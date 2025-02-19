import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const [portfolioItems] = useState<PortfolioItem[]>([
    { id: 1, title: 'Portfolio Website', description: 'A personal website showcasing my projects.' },
    { id: 2, title: 'To-Do App', description: 'A simple task management app built with React Native.' },
    { id: 3, title: 'E-Commerce App', description: 'A shopping app with cart and payment integration.' },
    { id: 4, title: 'Blog Platform', description: 'A CMS for creating and managing blog posts.' },
  ]);

  const renderItem = ({ item }: { item: PortfolioItem }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
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
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Projects;