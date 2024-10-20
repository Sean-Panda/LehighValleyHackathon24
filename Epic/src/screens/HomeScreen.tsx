import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Leaderboard from '../components/Leaderboard';
import ChallengeOverview from '../components/ChallengeOverview';
import NavBar from '../components/NavBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Leaderboard />
        <ChallengeOverview />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
