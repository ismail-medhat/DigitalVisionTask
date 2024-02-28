// BottomTabNavigator.tsx

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenNames from './screenNames';
import {StyleSheet, View, Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import Colors from '@common/colors';
import ShipmentsScreen from '@screens/shipments';
import ScanScreen from '@screens/scan';
import WalletScreen from '@screens/wallet';
import ProfileScreen from '@screens/profile';

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
                  {color: focused ? Colors.black : Colors.gray},
                ]}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarIcon: ({focused}) => {
          let IconName: string = '';
          if (route.name === ScreenNames.Shipments) {
            IconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === ScreenNames.Scan) {
            IconName = focused ? 'person' : 'person-outline';
          } else if (route.name === ScreenNames.Wallet) {
            IconName = focused ? 'person' : 'person-outline';
          } else if (route.name === ScreenNames.Profile) {
            IconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={IconName} size={22} />;
        },
        headerShown: false,
        tabBarStyle: [
          styles.tapStyles,
          {
            backgroundColor: Colors.white,
            borderTopWidth: 0,
            borderWidth: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        ],
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
    height: ScaleHeight(80),
    width: ScaleWidth('100%'),
    borderWidth: 1,
  },
  tabBarItemStyle: {
    top: 15,
    height: 45,
  },
  tabBarLabelStyle: {
    bottom: 10,
  },
  tabBarName: {
    fontSize: 12,
    paddingTop: Platform.OS === 'ios' ? ScaleHeight(2) : 0,
    marginBottom: Platform.OS === 'android' ? ScaleHeight(14) : 0,
  },
});
