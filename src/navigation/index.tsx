import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStackNavigator from './mainStackNavigator';
import BottomTabNavigator from './bottomTabNavigator';

import ScreenNames from './screenNames';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.Main} component={MainStackNavigator} />
        <Stack.Screen
          name={ScreenNames.BottomTabs}
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
