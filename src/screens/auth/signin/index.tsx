import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import SvgWhiteAppLogo from '@assets/svgs/SvgWhiteAppLogo';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import screenNames from '@navigation/screenNames';
import Button from '@components/button';
import Animated, {FadeIn} from 'react-native-reanimated';
import LoginBottomSheet from './loginBottomSheet';

type SigninScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SigninScreen: React.FC<SigninScreenProps> = ({navigation}) => {
  const [openSheet, setOpenSheet] = React.useState<boolean>(false);
  return (
    <Animated.View entering={FadeIn.duration(1000)} style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.innerContainer}>
        <SvgWhiteAppLogo />
        <Button
          title={'Login'}
          onPress={() => setOpenSheet(true)}
          btnStyle={styles.btnStyle}
        />
      </View>
      <LoginBottomSheet isOpen={openSheet} setIsOpen={setOpenSheet} />
    </Animated.View>
  );
};

export default SigninScreen;
