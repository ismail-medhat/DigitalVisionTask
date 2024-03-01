// import {ScaleHeight, ScaleWidth} from '@common/fitSize';
// import Colors from '@common/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
  },
  container_Menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 5,
    // textalign: 'center',
    display: 'flex',
    // fontsize: 16,
    margin: 4,
  },

  /////
  MenuItemView: {
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 35,
    right: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
    borderBottomColor: '#ccc',
  },
  MenuItemText: {color: 'black', marginLeft: 10},
});

export default styles;
