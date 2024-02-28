import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '@common/images';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import screenNames from '@navigation/screenNames';

type ISplashScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<ISplashScreenProps> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screenNames.Auth);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={Images.splashLogo}
          style={styles.splashImg}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
