import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import MainHeader from '@components/mainHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import screenNames from '@navigation/screenNames';

interface ShipmentProps {
  navigation: StackNavigationProp<ParamListBase>;
}

const ShipmentsScreen: React.FC<ShipmentProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        onProfilePress={() => navigation.navigate(screenNames.Profile)}
      />
      <View style={styles.innerContainer}>
        <Text>{'hello'}</Text>
        <Text style={styles.headerTxt}>{'Ibrahim Shaker'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ShipmentsScreen;
