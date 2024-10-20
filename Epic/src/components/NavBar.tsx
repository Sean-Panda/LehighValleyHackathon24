import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.icon}
          source={require('../assets/home-icon.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Challenges')}>
        <Image
          style={styles.icon}
          source={require('../assets/challenges-icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default NavBar;
