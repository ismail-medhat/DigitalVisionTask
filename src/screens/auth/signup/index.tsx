import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>{'SignupScreen'}</Text>
      </View>
    </View>
  );
};

export default SignupScreen;
