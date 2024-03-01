import Colors from '@common/colors';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: ScaleHeight(12),
  },
  innerContainer: {
    paddingVertical: ScaleHeight(7),
    marginHorizontal: ScaleWidth('5%'),
  },
  headerTxt: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.black,
  },
  textgray: {
    color: Colors.gray,
  },
  secondTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  startItem: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: 26,
  },
  endItem: {
    color: Colors.primary,
    // fontWeight: '700',
    fontSize: 20,
  },
});

export default styles;
