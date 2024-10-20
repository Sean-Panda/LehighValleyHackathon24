// src/screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile_page.png')} // Update the path as needed
        style={styles.image}
        resizeMode="contain" // Ensure the image maintains its aspect ratio
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '180%', // Set width to 100% to fit the screen
    top: -40,
    height: undefined, // Allow height to be determined by aspect ratio
    aspectRatio: 1, // Adjust this value based on the image's aspect ratio
  },
  text: {
    fontSize: 24,
    marginTop: 20, // Add some space between the image and text
  },
});

export default ProfileScreen;
