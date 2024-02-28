import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const ShipmentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>{'ShipmentsScreen'}</Text>
      </View>
    </View>
  );
};

export default ShipmentsScreen;
