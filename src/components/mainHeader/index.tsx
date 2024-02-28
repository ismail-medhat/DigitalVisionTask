import {Image, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import Images from '@common/images';
import SvgAppLogo from '@assets/svgs/SvgAppLogo';
import SvgNotification from '@assets/svgs/SvgNotification';
import SvgUserProfile from '@assets/svgs/SvgUserProfile';

interface MainHeaderProps {
  headerStyle?: ViewStyle;
  onProfilePress?: () => void;
  onNotifyPress?: () => void;
}

const MainHeader: FC<MainHeaderProps> = ({
  headerStyle,
  onProfilePress,
  onNotifyPress,
}) => {
  return (
    <View style={[styles.container, headerStyle]}>
      <TouchableOpacity
        onPress={onProfilePress}
        style={styles.headerIconBox}
        activeOpacity={0.8}>
        <SvgUserProfile />
      </TouchableOpacity>
      <SvgAppLogo />
      <TouchableOpacity
        onPress={onNotifyPress}
        style={styles.headerIconBox}
        activeOpacity={0.8}>
        <SvgNotification />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
