import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://synthv.fandom.com/wiki/Kasane_Teto' }} // Replace with actual image URL
        style={styles.image}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>
        Passionate React Native developer with experience in building mobile apps and web applications.
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
});


export default Profile;
