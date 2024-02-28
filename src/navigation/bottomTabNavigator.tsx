// BottomTabNavigator.tsx

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenNames from './screenNames';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import Colors from '@common/colors';
import ShipmentsScreen from '@screens/shipments';
import ScanScreen from '@screens/scan';
import WalletScreen from '@screens/wallet';
import ProfileScreen from '@screens/profile';
import SvgActiveShipment from '@assets/svgs/SvgActiveShipment';
import SvgInActiveShipment from '@assets/svgs/SvgInActiveShipment';
import SvgActiveScan from '@assets/svgs/SvgActiveScan';
import SvgInActiveScan from '@assets/svgs/SvgInActiveScan';
import SvgActiveWallet from '@assets/svgs/SvgActiveWallet';
import SvgInActiveWallet from '@assets/svgs/SvgInActiveWallet';
import SvgActiveProfile from '@assets/svgs/SvgActiveProfile';
import SvgInActiveProfile from '@assets/svgs/SvgInActiveProfile';

const Tab = createBottomTabNavigator();

type ISBottomTabsProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const BottomTabNavigator: React.FC<ISBottomTabsProps> = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({focused}) => {
          return (
            <View>
              <Text
                style={[
                  styles.tabBarName,
                  {
                    color: focused ? Colors.primaryTxt : Colors.grayIcon,
                    fontWeight: focused ? '500' : 'normal',
                  },
                ]}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarIcon: ({focused}) => {
          if (route.name === ScreenNames.Shipments) {
            return focused ? <SvgActiveShipment /> : <SvgInActiveShipment />;
          } else if (route.name === ScreenNames.Scan) {
            return focused ? <SvgActiveScan /> : <SvgInActiveScan />;
          } else if (route.name === ScreenNames.Wallet) {
            return focused ? <SvgActiveWallet /> : <SvgInActiveWallet />;
          } else if (route.name === ScreenNames.Profile) {
            return focused ? <SvgActiveProfile /> : <SvgInActiveProfile />;
          }
        },
        headerShown: false,
        tabBarStyle: styles.tapStyles,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      })}>
      <Tab.Screen name={ScreenNames.Shipments} component={ShipmentsScreen} />
      <Tab.Screen name={ScreenNames.Scan} component={ScanScreen} />
      <Tab.Screen name={ScreenNames.Wallet} component={WalletScreen} />
      <Tab.Screen name={ScreenNames.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tapStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ScaleHeight(85),
    width: ScaleWidth('100%'),
    backgroundColor: Colors.white,
    borderTopWidth: 1.8,
    borderTopColor: Colors.placeholderColor,
    borderWidth: 0,
    paddingTop: 8,
    paddingHorizontal: 10,
  },
  tabBarItemStyle: {
    top: 15,
    height: 50,
  },
  tabBarLabelStyle: {
    bottom: 10,
  },
  tabBarName: {
    fontSize: 14,
    paddingTop: Platform.OS === 'ios' ? ScaleHeight(2) : 0,
    marginBottom: Platform.OS === 'android' ? ScaleHeight(14) : 0,
  },
});
