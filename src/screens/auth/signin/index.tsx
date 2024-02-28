import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>{'SigninScreen'}</Text>
      </View>
    </View>
  );
};

export default SigninScreen;
