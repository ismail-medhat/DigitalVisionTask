import React, {ReactNode, useEffect} from 'react';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {persistor, store, RootState} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {I18nextProvider} from 'react-i18next';
import i18n from 'src/i18n';
import Toast, {ToastProvider} from 'react-native-toast-notifications';
import Colors from '@common/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScaleWidth} from '@common/fitSize';
import {ToastProps} from 'react-native-toast-notifications/lib/typescript/toast';
const App: React.FC = () => {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <AppNavigator />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  toastBox: {
    padding: 15,
    backgroundColor: Colors.gray,
    width: ScaleWidth('90%'),
    borderRadius: ScaleWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: ScaleWidth(10),
  },
  toastMessage: {
    fontSize: 15,
    fontWeight: '500',
    paddingStart: ScaleWidth(5),
    color: Colors.red,
  },
});

export default App;
