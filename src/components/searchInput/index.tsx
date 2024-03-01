import {View, TextInput} from 'react-native';
import React from 'react';

import {styles} from './styles';
import Colors from '@common/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

type InputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
};

const SearchInput: React.FC<InputProps> = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={20}
        color={Colors.MediumGray}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.MediumGray}
      />
    </View>
  );
};

export default SearchInput;
