import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import Colors from '@common/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '@components/button';
import Input from '@components/input';
import {Formik} from 'formik';
import {loginValidationSchema} from '@utils/validations';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '@store/index';
import {loginAsync} from '@store/slices/authSlice';
import {useNavigation} from '@react-navigation/native';
import screenNames from '@navigation/screenNames';
import styles from './styles';

type LoginBottomSheetProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type LoginDataObj = {
  usr: string;
  pwd: string;
};

const LoginBottomSheet: React.FC<LoginBottomSheetProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const onClose = () => {
    setIsOpen(false);
  };

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {authLoading} = useSelector((state: RootState) => state.auth);

  const handleLogin = (values: LoginDataObj) => {
    console.log('first login', values);
    dispatch(loginAsync(values))
      .unwrap()
      .then(res => {
        navigation.navigate(screenNames.BottomTabs);
        onClose();
      });
  };

  return (
    <Modal visible={isOpen} animationType={'slide'}>
      <StatusBar barStyle={'light-content'} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.sheetView}>
          <View style={styles.topBannerView} />
          <View style={styles.innerSheetView}>
            <View style={styles.topDragView} />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.cancelBox}
              onPress={onClose}>
              <Ionicons
                name={'chevron-back'}
                size={22}
                color={Colors.blueTxt}
              />
              <Text style={styles.cancelTxt}>{'Cancel'}</Text>
            </TouchableOpacity>
            <Text style={styles.modelHeaderTxt}>{'Login'}</Text>
            <Text style={styles.titleTxt}>
              {
                'Please enter your First, Last name and your phone number in order to register'
              }
            </Text>
            <Formik
              initialValues={{usr: '', pwd: ''}}
              validationSchema={loginValidationSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={handleLogin}>
              {({handleChange, handleSubmit, values, errors}) => (
                <>
                  <Input
                    label="Email"
                    value={values.usr}
                    onChangeText={handleChange('usr')}
                    isHaveError={errors.usr}
                    errorTxt={errors.usr}
                    keyboardType={'email-address'}
                  />
                  <Input
                    label="Password"
                    value={values.pwd}
                    onChangeText={handleChange('pwd')}
                    secureTextEntry={true}
                    isHaveError={errors.pwd}
                    errorTxt={errors.pwd}
                  />

                  <Button
                    title={'Login'}
                    onPress={handleSubmit}
                    btnStyle={styles.signInButton}
                    loading={authLoading}
                    mode={'blue'}
                  />
                </>
              )}
            </Formik>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LoginBottomSheet;
