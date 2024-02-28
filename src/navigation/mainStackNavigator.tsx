// MainStackNavigator.tsx

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenNames from './screenNames';
import AuthStackNavigator from './authStackNavigator';
import ShipmentsScreen from '@screens/shipments';
import ScanScreen from '@screens/scan';
import WalletScreen from '@screens/wallet';
import ProfileScreen from '@screens/profile';
import SplashScreen from '@screens/splash';

const Stack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.Splash}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
      <Stack.Screen name={ScreenNames.Auth} component={AuthStackNavigator} />
      <Stack.Screen name={ScreenNames.Shipments} component={ShipmentsScreen} />
      <Stack.Screen name={ScreenNames.Scan} component={ScanScreen} />
      <Stack.Screen name={ScreenNames.Wallet} component={WalletScreen} />
      <Stack.Screen name={ScreenNames.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
