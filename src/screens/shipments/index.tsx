import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import MainHeader from '@components/mainHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import screenNames from '@navigation/screenNames';
import {useSelector} from 'react-redux';
import {RootState} from '@store/index';

interface ShipmentProps {
  navigation: StackNavigationProp<ParamListBase>;
}

const ShipmentsScreen: React.FC<ShipmentProps> = ({navigation}) => {
  const {fullName} = useSelector((state: RootState) => state.auth);
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        onProfilePress={() => navigation.navigate(screenNames.Profile)}
      />
      <View style={styles.innerContainer}>
        <Text>{'hello'}</Text>
        <Text style={styles.headerTxt}>{fullName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ShipmentsScreen;
