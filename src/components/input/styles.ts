import Colors from '@common/colors';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  underlineStyle: {
    height: 0,
  },
  inputStyle: {
    width: '100%',
    borderTopLeftRadius: ScaleHeight(10),
    borderTopRightRadius: ScaleHeight(10),
    borderRadius: ScaleHeight(10),
    backgroundColor: Colors.placeholderColor,
    marginTop: ScaleHeight(17),
    fontSize: ScaleWidth(12),
    fontWeight: '500',
    color: Colors.primary,
    borderWidth: ScaleWidth(1),
    borderColor: Colors.placeholderColor,
    height: ScaleHeight(50),
  },
  emailErrorTxt: {
    color: Colors.red,
    fontSize: ScaleWidth(14),
    paddingRight: ScaleWidth(14),
    paddingVertical: ScaleHeight(2),
    fontWeight: '400',
  },
});
