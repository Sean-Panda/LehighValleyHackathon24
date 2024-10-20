import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ChallengeOverview = () => {
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Challenge Overview</Text>
      <View style={styles.challengeItem}>
        <Image source={require('../assets/savingChallenge.png')} style={styles.challengeImage} />
        <View style={styles.challengeTextContainer}>
          <Text style={styles.challengeTitle}>Savings Challenge</Text>
          <Text style={styles.challengeDescription}>Save at least $20 per week on expenses</Text>
          <Text style={styles.challengeProgress}>Your Progress: $34 (#2)</Text>
        </View>
      </View>
      <View style={styles.challengeItem}>
        <Image source={require('../assets/internshipWarrior.png')} style={styles.challengeImage} />
        <View style={styles.challengeTextContainer}>
          <Text style={styles.challengeTitle}>Internship Warriors</Text>
          <Text style={styles.challengeDescription}>Apply to at least 10 internships this week</Text>
          <Text style={styles.challengeProgress}>Your Progress: 9 applications (#4)</Text>
        </View>
      </View>
      <View style={styles.challengeItem}>
        <Image source={require('../assets/cse340.png')} style={styles.challengeImage} />
        <View style={styles.challengeTextContainer}>
          <Text style={styles.challengeTitle}>CSE340 - Complete HW Early</Text>
          <Text style={styles.challengeDescription}>Complete the weekly homework early</Text>
          <Text style={styles.challengeProgress}>Your Progress: 1 day (#5)</Text>
        </View>
      </View>
      {/* Additional Challenges */}
      <View style={styles.challengeItem}>
        <Image source={require('../assets/investments.png')} style={styles.challengeImage} />
        <View style={styles.challengeTextContainer}>
          <Text style={styles.challengeTitle}>Investment Insights</Text>
          <Text style={styles.challengeDescription}>Research and invest in one new stock this week</Text>
          <Text style={styles.challengeProgress}>Your Progress: 1 stock (#6)</Text>
        </View>
      </View>
      <View style={styles.challengeItem}>
        <Image source={require('../assets/coffee.png')} style={styles.challengeImage} />
        <View style={styles.challengeTextContainer}>
          <Text style={styles.challengeTitle}>Coffee Chats</Text>
          <Text style={styles.challengeDescription}>Have at least 3 coffee chats with professionals</Text>
          <Text style={styles.challengeProgress}>Your Progress: 2 chats (#7)</Text>
        </View>
      </View>
      <View style={styles.challengeItem}>
        <Image source={require('../assets/expenses.png')} style={styles.challengeImage} />
        <View style={styles.challengeTextContainer}>
          <Text style={styles.challengeTitle}>Money Management</Text>
          <Text style={styles.challengeDescription}>Track your spending for the week</Text>
          <Text style={styles.challengeProgress}>Your Progress: $150 tracked (#8)</Text>
        </View>
      </View>
      <View style={styles.challengeItem}>
        <Image source={require('../assets/fitness.png')} style={styles.challengeImage} />
        <View style={styles.challengeTextContainer}>
          <Text style={styles.challengeTitle}>Fitness Challenge</Text>
          <Text style={styles.challengeDescription}>Exercise for at least 30 minutes, 5 times a week</Text>
          <Text style={styles.challengeProgress}>Your Progress: 3 sessions (#9)</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  challengeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  challengeImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  challengeTextContainer: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  challengeProgress: {
    fontSize: 14,
    color: '#444',
  },
});

export default ChallengeOverview;
