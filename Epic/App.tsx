import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ChallengesScreen from './src/screens/ChallengesScreen';
import ChallengeDetailScreen from './src/screens/ChallengeDetailScreen'; // Import the detailed screen
import { Image } from 'react-native'; // Import Image component

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Challenges
const ChallengesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Challenges">
      <Stack.Screen 
        name="Challenges" 
        component={ChallengesScreen} 
        options={{ headerShown: false }} // Hide the header for this screen
      />
      <Stack.Screen 
        name="ChallengeDetail" 
        component={ChallengeDetailScreen} 
        options={{ headerShown: false }} // Hide the header for this screen as well
      />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#fff' }, // Customize tab bar style if needed
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false, // Hide header for Home screen
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./src/assets/home-icon.png')} // Use your custom icon here
                style={{ width: 30, height: 30, tintColor: focused ? '#007AFF' : '#gray' }} // Change color based on focus
              />
            ),
          }}
        />
        {/* Use the stack navigator for Challenges */}
        <Tab.Screen 
          name="Challenges" 
          component={ChallengesStack} 
          options={{
            headerShown: false, // Hide header for Challenges tab
            tabBarIcon: ({ focused }) => (
              <Image 
                source={require('./src/assets/challenges-icon.png')} // Use your custom icon here
                style={{ width: 30, height: 30, tintColor: focused ? '#007AFF' : '#gray' }} // Change color based on focus
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
