import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Leaderboard = () => {
  const [currentLeaderboard, setCurrentLeaderboard] = useState('savings');

  const toggleLeaderboard = () => {
    if (currentLeaderboard === 'savings') {
      setCurrentLeaderboard('internship');
    } else if (currentLeaderboard === 'internship') {
      setCurrentLeaderboard('investments');
    } else {
      setCurrentLeaderboard('savings');
    }
  };

  const savingsData = [
    { name: 'Sean', score: 34, avatar: require('../assets/sean_avatar.png') },
    { name: 'Tommy', score: 42, avatar: require('../assets/tommy_avatar.png'), isFirst: true },
    { name: 'Shelby', score: 24, avatar: require('../assets/shelby_avatar.png') },
  ];

  const internshipData = [
    { name: 'Jenny', score: 16, avatar: require('../assets/jenny_avatar.png') },
    { name: 'Tommy', score: 21, avatar: require('../assets/tommy_avatar.png'), isFirst: true },
    { name: 'Jon', score: 12, avatar: require('../assets/jon_avatar.png') },
  ];

  const investmentsData = [
    { name: 'Tommy', score: 40, avatar: require('../assets/tommy_avatar.png') },
    { name: 'Shelby', score: 45, avatar: require('../assets/shelby_avatar.png'), isFirst: true },
    { name: 'Sean', score: 10, avatar: require('../assets/sean_avatar.png') },
  ];

  const renderLeaderboard = (data) => {
    return data.map((item, index) => (
      <View key={index} style={[styles.leaderItem, item.isFirst ? styles.leaderFirst : {}]}>
        <Text style={styles.leaderScore}>{item.score}</Text>
        <Image source={item.avatar} style={styles.avatar} />
        <Text style={styles.leaderName}>{item.name}</Text>
      </View>
    ));
  };

  const getCurrentData = () => {
    switch (currentLeaderboard) {
      case 'internship':
        return internshipData;
      case 'investments':
        return investmentsData;
      default:
        return savingsData;
    }
  };

  return (
    <LinearGradient colors={['#4a2a94', '#3c43d9']} style={styles.container}>
      <Text style={styles.title}>Leaderboards</Text>
      <Text style={styles.subTitle}>{`${currentLeaderboard.charAt(0).toUpperCase() + currentLeaderboard.slice(1)} Challenge`}</Text>
      <Text style={styles.challengeText}>
        {currentLeaderboard === 'investments'
          ? 'Invest wisely and grow your wealth'
          : currentLeaderboard === 'internship'
          ? 'Apply to at least 10 internships this week'
          : 'Save at least $20 per week on expenses'}
      </Text>
      <Text style={styles.progressText}>Your Progress: {currentLeaderboard === 'investments' ? '50' : currentLeaderboard === 'internship' ? '9' : '34'} (#2)</Text>

      <View style={styles.leaderboardContainer}>
        <TouchableOpacity onPress={toggleLeaderboard}>
          <Text style={styles.arrow}>&lt;</Text>
        </TouchableOpacity>
        {renderLeaderboard(getCurrentData())}
        <TouchableOpacity onPress={toggleLeaderboard}>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
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
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  challengeText: {
    fontSize: 14,
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
