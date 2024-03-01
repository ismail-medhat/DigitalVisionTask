import Colors from '@common/colors';
import {ScaleWidth} from '@common/fitSize';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: Colors.placeholderColor,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: ScaleWidth(16),
    color: Colors.black,
  },
});
