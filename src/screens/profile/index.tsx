import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>{'ProfileScreen'}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
