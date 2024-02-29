import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import Colors from '@common/colors';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  btnStyle?: ViewStyle;
  titleStyle?: TextStyle;
  loading?: boolean;
  mode?: 'white' | 'blue';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  btnStyle,
  titleStyle,
  loading,
  mode = 'white',
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[
        styles.container,
        {backgroundColor: mode == 'white' ? Colors.white : Colors.primary},
        btnStyle,
      ]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator
          size={'small'}
          color={mode == 'white' ? Colors.primary : Colors.white}
        />
      ) : (
        <Text
          style={[
            styles.btnTitle,
            {color: mode == 'white' ? Colors.primary : Colors.white},
            titleStyle,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
