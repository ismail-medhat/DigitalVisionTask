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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useRef, useEffect, Dispatch, SetStateAction} from 'react';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import Colors from '@common/colors';
import Animated, {FadeIn, SlideInUp} from 'react-native-reanimated';
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
import { isIos } from '@utils/generalFunc';

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
            <Text style={styles.headerTxt}>{'Login'}</Text>
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

const styles = StyleSheet.create({
  sheetView: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: isIos() ?  ScaleHeight(55) :  ScaleHeight(25),
  },
  topBannerView: {
    width: ScaleWidth('90%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: ScaleHeight(8),
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    position: 'absolute',
    top:isIos() ?  ScaleHeight(48):ScaleHeight(18),
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
    paddingVertical: ScaleHeight(15),
  },
  cancelTxt: {
    fontSize: ScaleWidth(16),
    fontWeight: '500',
    color: Colors.blueTxt,
    paddingStart: ScaleWidth(5),
  },
  headerTxt: {
    fontSize: ScaleWidth(22),
    fontWeight: 'bold',
    color: Colors.black,
  },
  titleTxt: {
    fontSize: ScaleWidth(15),
    color: Colors.lightGray,
    paddingVertical: ScaleHeight(10),
  },
  signInButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    width: ScaleWidth('90%'),
  },
});
