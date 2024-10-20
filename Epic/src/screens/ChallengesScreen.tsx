import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import LinearGradient from 'react-native-linear-gradient';
import NavBar from '../components/NavBar';

const ChallengesScreen: React.FC = () => {
  const navigation = useNavigation(); // Initialize navigation hook

  const handlePress = (challengeName: string) => {
    if (challengeName === 'Internship Warriors') {
      navigation.navigate('ChallengeDetail', { challengeName });
    }
    // You can add similar logic for other challenges if needed
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient colors={['#4a2a94', '#3c43d9']} View style={styles.header}>
          <Text style={styles.headerText}>Challenges</Text>
        </LinearGradient>

        {/* Savings Challenge */}
        <View style={styles.challengeItem}>
          <Image source={require('../assets/savingChallenge.png')} style={styles.challengeImage} />
          <View style={styles.textContainer}>
            <Text style={styles.challengeTitle}>Savings Challenge</Text>
            <Text>Save at least $20 per week on expenses</Text>
            <Text style={styles.progressText}>Your Progress: $34 (#2)</Text>
          </View>
        </View>

        {/* Internship Warriors Challenge */}
        <TouchableOpacity onPress={() => handlePress('Internship Warriors')}>
          <View style={styles.challengeItem}>
            <Image source={require('../assets/internshipWarrior.png')} style={styles.challengeImage} />
            <View style={styles.textContainer}>
              <Text style={styles.challengeTitle}>Internship Warriors</Text>
              <Text>Apply to at least 10 internships this week</Text>
              <Text style={styles.progressText}>Your Progress: 9 applications (#4)</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* CSE340 Challenge */}
        <View style={styles.challengeItem}>
          <Image source={require('../assets/cse340.png')} style={styles.challengeImage} />
          <View style={styles.textContainer}>
            <Text style={styles.challengeTitle}>CSE340 - Complete HW Early</Text>
            <Text>Complete the weekly homework early.</Text>
            <Text style={styles.progressText}>Your Progress: 1 day (#5)</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#4b0082',
    padding: 20,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  challengeItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  challengeImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressText: {
    marginTop: 5,
    color: '#666',
  },
});

export default ChallengesScreen;
