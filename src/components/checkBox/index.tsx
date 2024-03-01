import React, {useRef} from 'react';
import {TouchableOpacity, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Colors from '@common/colors';

type Props = {
  checked: number | boolean;
  onChange: () => void;
};

let CheckBox = ({checked, onChange}: Props) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  let toggleCheckbox = () => {
    let toValue = checked ? 0 : 1;

    Animated.timing(scaleValue, {
      toValue,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    onChange();
  };

  const animatedScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1.2, 1],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={toggleCheckbox}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <Animated.View
        style={[
          styles.checkbox,
          {
            transform: [{scale: animatedScale}],
            backgroundColor: checked ? '#2F50C1' : 'transparent',
          },
        ]}>
        {checked && <Icon name="check" size={16} color={Colors.BorderGray} />}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CheckBox;
