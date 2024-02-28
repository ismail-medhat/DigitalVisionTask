import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>{'ScanScreen'}</Text>
      </View>
    </View>
  );
};

export default ScanScreen;
