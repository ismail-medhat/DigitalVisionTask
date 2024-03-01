// import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import Colors from '@common/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: Colors.BorderGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
  },
});

export default styles;
