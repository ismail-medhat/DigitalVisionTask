import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import SvgWhiteAppLogo from '@assets/svgs/SvgWhiteAppLogo';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import screenNames from '@navigation/screenNames';
import Button from '@components/button';

type SigninScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SigninScreen: React.FC<SigninScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.innerContainer}>
        <SvgWhiteAppLogo />
        <Button
          title={'Login'}
          onPress={() => navigation.navigate(screenNames.BottomTabs)}
          btnStyle={styles.btnStyle}
        />
      </View>
    </View>
  );
};

export default SigninScreen;
