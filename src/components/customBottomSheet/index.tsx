import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {styles} from './styles';
import BottomSheet from 'react-native-raw-bottom-sheet';
import {ScaleHeight} from '@common/fitSize';
import Colors from '@common/colors';

type CustomBottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
  height?: number;
  containerStyle?: ViewStyle;
  dragFromTopOnly?: boolean;
};

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  height = ScaleHeight('40%'),
  containerStyle,
  dragFromTopOnly = false,
}) => {
  const bottomSheetRef = useRef<BottomSheet>();
  useEffect(() => {
    if (isOpen) {
      bottomSheetRef?.current.open();
    } else {
      bottomSheetRef?.current.close();
    }
  }, [isOpen]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      height={height}
      duration={250}
      closeOnDragDown
      onClose={onClose}
      animationType="fade"
      dragFromTopOnly={dragFromTopOnly}
      customStyles={{
        container: {
          borderTopLeftRadius: ScaleHeight(10),
          borderTopRightRadius: ScaleHeight(10),
        },
        draggableIcon: {
          backgroundColor: Colors.MediumGray,
        },
      }}>
      <View style={[containerStyle]}>{children}</View>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
