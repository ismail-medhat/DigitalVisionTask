import Colors from '@common/colors';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import {isIos} from '@utils/generalFunc';
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
    color: Colors.primary,
  },
  btnStyle: {
    position: 'absolute',
    bottom: 50,
  },
  sheetView: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: isIos() ? ScaleHeight(55) : ScaleHeight(25),
  },
  topBannerView: {
    width: ScaleWidth('90%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: ScaleHeight(8),
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    position: 'absolute',
    top: isIos() ? ScaleHeight(48) : ScaleHeight(18),
  },
  topDragView: {
    width: ScaleWidth('13%'),
    borderRadius: 30,
    height: ScaleHeight(5),
    backgroundColor: '#AAA',
    alignSelf: 'center',
  },

  innerSheetView: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: ScaleWidth(10),
    borderTopRightRadius: ScaleWidth(10),
    paddingHorizontal: ScaleWidth('5%'),
    paddingVertical: ScaleHeight(5),
  },
  cancelBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: ScaleHeight(15),
  },
  cancelTxt: {
    fontSize: ScaleWidth(16),
    fontWeight: '500',
    color: Colors.blueTxt,
    paddingStart: ScaleWidth(5),
  },
  modelHeaderTxt: {
    fontSize: ScaleWidth(22),
    fontWeight: 'bold',
    color: Colors.black,
  },
  titleTxt: {
    fontSize: ScaleWidth(15),
    color: Colors.lightGray,
    paddingVertical: ScaleHeight(10),
  },
  signInButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    width: ScaleWidth('90%'),
  },
});

export default styles;
