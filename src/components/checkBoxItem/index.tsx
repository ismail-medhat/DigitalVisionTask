import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CheckBox from '@components/checkBox';
import Colors from '@common/colors';
import SvgBoxes from '@assets/svgs/SvgBoxes';
import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  title: string;
  dataNumber: number;
  status?: string;
  fromCountry: string;
  toCountry: string;
  //   icon: JSX.Element;
  checked: number | boolean;
  onChange: () => {};
};

const CheckBoxItem = ({
  title,
  dataNumber,
  fromCountry,
  toCountry,
  checked,
  onChange,
}: Props) => {
  return (
    <View
      style={{
        backgroundColor: Colors.lightGray,
        borderRadius: 10,
        paddingHorizontal: 6,
        marginBottom: 20,
        flexDirection: 'row',
        paddingVertical: ScaleHeight(10),
        marginHorizontal: ScaleWidth('5%'),
        gap: 7,
      }}>
      {/* Left side*/}
      <View style={{justifyContent: 'center'}}>
        <CheckBox checked={checked} onChange={onChange} />
        {/* {CheckElement} */}
      </View>

      {/* Right side*/}
      <View style={{justifyContent: 'center'}}>
        <SvgBoxes />
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text
          style={{
            color: Colors.LightBlack,
            fontSize: 15,
            fontWeight: '500',
          }}>
          {title}
          {/* AWB */}
        </Text>
        <Text
          style={{color: Colors.LightBlack, fontSize: 17, fontWeight: '800'}}>
          {dataNumber}
          {/* 41785691423 */}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
          <Text
            style={{color: Colors.MediumGray, fontSize: 14, fontWeight: '400'}}>
            {fromCountry}
            {/* Cairo */}
          </Text>
          <Icon name="arrowright" size={20} color={Colors.primary} />
          <Text
            style={{color: Colors.MediumGray, fontSize: 14, fontWeight: '400'}}>
            {/* Alexandria */}
            {toCountry}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={{justifyContent: 'center'}}>
        <View
          style={{
            paddingVertical: 4,
            paddingHorizontal: 5,
            backgroundColor: Colors.lightGray,
            borderColor: Colors.white,
            borderWidth: 1,
            borderRadius: 7,
          }}>
          <Text style={{color: Colors.MediumGray, fontSize: 12}}>CANCELED</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent: 'center'}}>
        <View
          style={{
            padding: 3,
            backgroundColor: Colors.white,
            borderColor: Colors.white,
            borderWidth: 1,
            borderRadius: 20,
          }}>
          {/* <Text style={{color: Colors.MediumGray, fontSize: 12}}>CANCELED</Text> */}
          <Icon name="arrowsalt" size={20} color={Colors.blueTxt} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CheckBoxItem;
