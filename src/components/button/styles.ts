import Colors from '@common/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});

export default styles;
