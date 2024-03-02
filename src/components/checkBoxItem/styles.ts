import Colors from '@common/colors';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  shipmentContainer: {
    backgroundColor: Colors.placeholderColor,
    borderRadius: 10,
    marginBottom: 12,
    marginHorizontal: ScaleWidth('5%'),
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titletxt: {
    color: Colors.LightBlack,
    fontSize: 15,
  },
  areaTxt: {
    color: Colors.grayTxt,
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBox: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    backgroundColor: '#D9E6FD',
    borderColor: Colors.white,
    borderWidth: 0.8,
    borderRadius: 7,
  },
  statusTxt: {color: '#2E50C1', fontSize: 12},
  extendBox: {
    padding: 3,
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 30,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  originTitle: {
    fontSize: 14,
    color: Colors.blueTxt,
  },
  originTxt: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  originZone: {
    color: Colors.grayTxt,
    fontSize: 14,
  },
  dashLine: {
    flex: 1,
    height: 1,
    borderWidth: 1.5,
    borderColor: Colors.white,
    borderStyle: 'dashed',
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 16,
    paddingStart: 5,
    fontWeight: '500',
  },
  callBtn: {
    backgroundColor: '#6E91EC',
    height: ScaleHeight(35),
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  whatsappBtn: {
    backgroundColor: '#25D366',
    height: ScaleHeight(35),
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  extenCard: {
    backgroundColor: '#F9F8FB',
    padding: 12,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default styles;
