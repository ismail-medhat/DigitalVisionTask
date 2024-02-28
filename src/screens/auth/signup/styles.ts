import Colors from '@common/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default styles;
