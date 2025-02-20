import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { ThemeContext } from '../../App'; // Import ThemeContext

const Profile: React.FC = () => {
  const theme = useContext(ThemeContext); // Access darkMode state
  const darkMode = theme?.darkMode || false; // Handle undefined case

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, darkMode ? styles.darkText : styles.lightText]}>
        Welcome to my portfolio
      </Text>

      <Image source={require('./images/igaku.png')} style={styles.image} />

      <Text style={[styles.heading, darkMode ? styles.darkText : styles.lightText]}>
        Nicholas Riley Landicho
      </Text>
      <Text style={[styles.body, darkMode ? styles.darkText : styles.lightText]}>
        I make things. A lot of things. I'm usually pretty good at doing things?
      </Text>

      <Text style={[styles.subheading, darkMode ? styles.darkText : styles.lightText]}>
        My Skills
      </Text>
      <Text style={[styles.body, darkMode ? styles.darkText : styles.lightText]}>
        C++, JavaScript, PHP, React, Arting
      </Text>

      <Text style={[styles.subheading, darkMode ? styles.darkText : styles.lightText]}>
        My Links
      </Text>
      <Text
        style={[styles.link, darkMode ? styles.darkLink : styles.lightLink]}
        onPress={() => Linking.openURL('https://github.com/NizcKa')}>
        Github
      </Text>
      <Text
        style={[styles.link, darkMode ? styles.darkLink : styles.lightLink]}
        onPress={() => Linking.openURL('https://www.instagram.com/nizc_ly/')}>
        Instagram
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 4,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  lightLink: {
    color: 'blue',
  },
  darkLink: {
    color: 'lightblue',
  },
});

export default Profile;