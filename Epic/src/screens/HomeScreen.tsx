import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Leaderboard from '../components/Leaderboard';
import ChallengeOverview from '../components/ChallengeOverview';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Leaderboard />
      <ChallengeOverview />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
