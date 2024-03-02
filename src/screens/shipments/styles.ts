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
    paddingVertical: ScaleHeight(5),
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
    fontSize: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  addScanTxt: {backgroundColor: Colors.primary, width: ScaleWidth('43%')},
  filterTxt: {
    backgroundColor: Colors.placeholderColor,
    width: ScaleWidth('43%'),
  },
  cancelTxt: {fontSize: 18, color: Colors.blueTxt},
  modelTitle: {fontSize: 18, fontWeight: 'bold', color: Colors.black},
  statusListRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  statusBox: {
    marginEnd: 15,
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.placeholderColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  modelSubtitle: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#58536E',
    marginBottom: 15,
    marginTop: 5,
  },
  statusTxt: {fontSize: 14, color: '#58536E', fontWeight: '500'},
  modelSeperateLine: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.placeholderColor,
  },
  modelHeaderPadding: {padding: 15, paddingBottom: 15, paddingTop: 10},
});

export default styles;
