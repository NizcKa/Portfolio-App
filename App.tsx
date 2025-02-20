import React, { createContext, useState } from 'react';
import { StyleSheet, Text, Switch, SafeAreaView } from 'react-native';
import Projects from './src/pages/Projects';
import Profile from './src/pages/Profile';

interface ThemeContextType {  //Define type of ThemeContext (bool here)
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

export const ThemeContext = createContext({ //creates the theme context and lets it be exported out of App.tsx to other components
  darkMode: false,
  setDarkMode: (mode: boolean) => {},
});

export default function App() {

  const [darkMode, setDarkMode] = useState(false);  //Sets dark mode to false intially

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <SafeAreaView style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>

        <Profile />
        <Projects />
        <Text>Dark Mode</Text>  
        <Switch 
            value={darkMode} 
            onValueChange={() => setDarkMode(!darkMode)} 
            thumbColor={darkMode ? "#f4f3f4" : "#121212"} 
            trackColor={{ false: "#767577", true: "#81b0ff" }} 
          />
      </SafeAreaView>
    </ThemeContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 10,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
});
