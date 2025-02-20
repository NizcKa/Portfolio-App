import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ThemeContext } from '../../App'; // Import ThemeContext

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const { darkMode } = useContext(ThemeContext); // Get darkMode state

  const [portfolioItems] = useState<PortfolioItem[]>([
    { id: 1, title: 'Portfolio Website', description: 'Another portfolio website done with React.' },
    { id: 2, title: 'Inventory Management System', description: 'A simple inventory management website with the relevant functionality.' },
    { id: 3, title: 'Library Management Website', description: 'A library management website for the LRC.' },
    { id: 4, title: 'Art', description: 'I also do a bunch of art.' },
  ]);

  const renderItem = ({ item }: { item: PortfolioItem }) => (
    <View style={[styles.item, darkMode && styles.darkItem]}>
      <Text style={[styles.title, darkMode && styles.darkText]}>{item.title}</Text>
      <Text style={[styles.description, darkMode && styles.darkText]}>{item.description}</Text>
    </View>
  );

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <FlatList
        data={portfolioItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#333', // Dark background for dark mode
  },
  item: {
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  darkItem: {
    backgroundColor: '#444', // Darker item background for dark mode
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4,
  },
  darkText: {
    color: '#fff', // White text in dark mode
  },
});

export default Projects;