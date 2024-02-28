import Colors from '@common/colors';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    paddingVertical: ScaleHeight(10),
    marginHorizontal: ScaleWidth('5%'),
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default styles;
