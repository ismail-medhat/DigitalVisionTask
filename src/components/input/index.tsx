import {Text, KeyboardTypeOptions, ViewStyle, ColorValue} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {styles} from './styles';
import Colors from '@common/colors';

type InputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  withRightIcon?: boolean;
  rightIcon?: JSX.Element;
  onRightIconPress?: () => void;
  secureTextEntry?: boolean;
  isHaveError?: string | boolean;
  errorTxt?: string;
  inputStyle?: ViewStyle;
  iconSize?: number;
  iconColor?: ColorValue | string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  editable?: boolean;
};

const Input: React.FC<InputProps> = ({
  label = 'Input',
  value,
  onChangeText = text => {},
  withRightIcon = false,
  rightIcon,
  onRightIconPress = () => {},
  secureTextEntry = false,
  isHaveError = false,
  errorTxt = '',
  inputStyle,
  iconSize = 20,
  iconColor,
  keyboardType,
  editable = true,
}) => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlure = () => {
    setFocused(false);
  };

  return (
    <>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        underlineStyle={styles.underlineStyle}
        style={[
          styles.inputStyle,
          inputStyle,
          {
            borderColor: isHaveError
              ? Colors.red
              : focused
              ? Colors.primary
              : Colors.placeholderColor,
          },
        ]}
        activeUnderlineColor={Colors.gray}
        selectionColor={Colors.primary}
        placeholderTextColor={Colors.gray}
        right={withRightIcon ? withRightIcon : undefined}
        secureTextEntry={secureTextEntry}
        onFocus={onFocus}
        onBlur={onBlure}
        keyboardType={keyboardType}
        editable={editable}
      />

      {isHaveError ? (
        <Text style={styles.emailErrorTxt}>{`*${errorTxt}`}</Text>
      ) : null}
    </>
  );
};

export default Input;
