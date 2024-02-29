import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
  Modal,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import React, {useRef, useEffect, Dispatch, SetStateAction} from 'react';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import Colors from '@common/colors';
import Animated, {FadeIn, SlideInUp} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';

type LoginBottomSheetProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const LoginBottomSheet: React.FC<LoginBottomSheetProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal visible={isOpen} animationType={'slide'}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.sheetView}>
        <View style={styles.topBannerView} />
        <View style={styles.innerSheetView}>
          <View style={styles.topDragView} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.cancelBox}
            onPress={onClose}>
            <Ionicons name={'chevron-back'} size={25} color={Colors.blueTxt} />
            <Text style={styles.cancelTxt}>{'Cancel'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoginBottomSheet;

const styles = StyleSheet.create({
  sheetView: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: ScaleHeight(55),
  },
  topBannerView: {
    width: ScaleWidth('90%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: ScaleHeight(8),
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    position: 'absolute',
    top: ScaleHeight(48),
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
    paddingVertical: ScaleHeight(10),
  },
  cancelTxt: {
    fontSize: ScaleWidth(18),
    fontWeight: '500',
    color: Colors.blueTxt,
    paddingStart: ScaleWidth(5),
  },
});
