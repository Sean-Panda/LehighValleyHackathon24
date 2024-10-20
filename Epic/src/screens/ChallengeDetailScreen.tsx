import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NavBar from '../components/NavBar';


const leaderboardData = [
  { rank: 1, name: 'Tommy Gloomberg', score: 21, image: require('../assets/tommy_avatar.png') },
  { rank: 2, name: 'Jenny Smith', score: 16, image: require('../assets/jenny_avatar.png') },
  { rank: 3, name: 'Jonathan Kellner', score: 12, image: require('../assets/jon_avatar.png') },
  { rank: 4, name: 'Sean Lionpanda', score: 9, image: require('../assets/sean_avatar.png') },
  { rank: 5, name: 'Shelby Angels', score: 8, image: require('../assets/shelby_avatar.png') },
];

const ChallengeDetailScreen = ({ navigation }) => { // Added navigation prop
  const [modalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(9); // Default progress value
  const [newProgress, setNewProgress] = useState(String(progress));
  const progressPercentage = (progress / 10) * 100;

  // Function to handle the submission of new progress value
  const handleUpdateProgress = () => {
    setProgress(Number(newProgress)); // Update the progress value
    setModalVisible(false); // Close the modal
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#4a2a94', '#3c43d9']} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Internship Warriors</Text>
        <Text style={styles.subTitle}>Apply to at least 10 internships this week</Text>
      </LinearGradient>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Your Progress:</Text>
        <View style={styles.progress}>
          <View>
            <Text style={styles.statTitle}>{progress}</Text>
            <Text>Weekly Score</Text>
          </View>
          <View>
            <Text style={styles.statTitle}>+1</Text>
            <Text>From Last Week</Text>
          </View>
          <View>
            <Text style={styles.statTitle}>87</Text>
            <Text>Total Score</Text>
          </View>
          <View>
            <Text style={styles.statTitle}>#4</Text>
            <Text>Weekly Rank</Text>
          </View>
        </View>

        {/* Progress bar */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
        </View>
        <Text style={styles.progressLabel}>{progress}/10 internships completed</Text>

        <TouchableOpacity
          style={styles.updateButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </View>

      {/* Leaderboard */}
      <View style={styles.leaderboardContainer}>
        <Text style={styles.leaderboardTitle}>Leaderboards</Text>
        {leaderboardData.map((item) => (
          <View key={item.rank} style={styles.leaderboardItem}>
            <Image source={item.image} style={styles.profileImage} />
            <Text style={styles.rank}>#{item.rank}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score}</Text>
          </View>
        ))}
      </View>

      {/* Modal for updating progress */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Update Progress</Text>
            <TextInput
              style={styles.input}
              value={newProgress}
              onChangeText={setNewProgress}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleUpdateProgress}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
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
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'white',
    fontSize: 16,
  },
  progressContainer: {
    padding: 20,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 20,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4b0082',
  },
  progressLabel: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 16,
  },
  updateButton: {
    marginTop: 20,
    backgroundColor: '#4b0082',
    padding: 10,
    borderRadius: 5,
  },
  updateButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  leaderboardContainer: {
    padding: 20,
  },
  leaderboardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  rank: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4b0082',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#4b0082',
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ChallengeDetailScreen;
