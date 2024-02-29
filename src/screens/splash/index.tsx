import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import screenNames from '@navigation/screenNames';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolateColor,
  withDelay,
} from 'react-native-reanimated';

import SvgShipSmallLogo from '@assets/svgs/SvgShipSmallLogo';
import {ScreenH} from '@common/fitSize';

type ISplashScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<ISplashScreenProps> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screenNames.Auth);
    }, 2000);
  }, []);

  const scaleValue = useSharedValue(1);
  const translateY = useSharedValue(0);
  const backgroundColor = useSharedValue(0);

  React.useEffect(() => {
    // Trigger the scale animation when the component mounts
    scaleValue.value = withTiming(3, {
      duration: 1500,
      easing: Easing.inOut(Easing.quad),
    });
    translateY.value = withDelay(
      1700,
      withTiming(-ScreenH / 2, {duration: 1500}),
    );
    backgroundColor.value = withDelay(1800, withTiming(1, {duration: 1000}));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleValue.value}, {translateY: translateY.value}],
    };
  });

  const animatedBgStyle = useAnimatedStyle(() => {
    const interpolatedColor = interpolateColor(
      backgroundColor.value,
      [0, 1],
      ['#FFF', '#2F50C1'],
    );

    return {
      backgroundColor: interpolatedColor,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedBgStyle]}>
      <View style={styles.innerContainer}>
        <Animated.View style={[styles.splashImg, animatedStyle]}>
          <SvgShipSmallLogo />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default SplashScreen;
