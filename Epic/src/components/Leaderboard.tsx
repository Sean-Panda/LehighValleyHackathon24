import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Leaderboard = () => {
  return (
    <LinearGradient colors={['#4a2a94', '#3c43d9']} style={styles.container}>
      <Text style={styles.title}>Leaderboards</Text>
      <Text style={styles.subTitle}>Savings Challenge</Text>
      <Text style={styles.challengeText}>Save at least $20 per week on expenses</Text>
      <Text style={styles.progressText}>Your Progress: $34 (#2)</Text>

      <View style={styles.leaderboardContainer}>
        <Text style={styles.arrow}>&lt;</Text>
        <View style={styles.leaderItem}>
          <Text style={styles.leaderScore}>34</Text>
          <Image source={require('../assets/sean_avatar.png')} style={styles.avatar} />
          <Text style={styles.leaderName}>Sean</Text>
        </View>
        <View style={[styles.leaderItem, styles.leaderFirst]}>
          <Text style={styles.leaderScore}>42</Text>
          <Image source={require('../assets/tommy_avatar.png')} style={styles.avatar} />
          <Text style={styles.leaderName}>Tommy</Text>
        </View>
        <View style={styles.leaderItem}>
          <Text style={styles.leaderScore}>24</Text>
          <Image source={require('../assets/shelby_avatar.png')} style={styles.avatar} />
          <Text style={styles.leaderName}>Shelby</Text>
        </View>
        <Text style={styles.arrow}>&gt;</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 60,
  },
  title: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  subTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  challengeText: {
    fontSize: 12,
    color: '#ddd',
    textAlign: 'center',
    marginBottom: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  leaderboardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leaderItem: {
    alignItems: 'center',
    backgroundColor: '#6c49cd',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  leaderFirst: {
    backgroundColor: '#8a5fd1',
    paddingVertical: 20,
  },
  leaderScore: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  leaderName: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 10,
  },
  arrow: {
    fontSize: 32,
    color: '#fff',
  },
});

export default Leaderboard;
