import React, {useRef, useState} from 'react';
import {
  Animated,
  LayoutAnimation,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import CheckBox from '@components/checkBox';
import Colors from '@common/colors';
import SvgBoxes from '@assets/svgs/SvgBoxes';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

type Props = {
  title: string;
  dataNumber: number | string;
  status?: string;
  origin: string;
  originZone: string;
  destination: string;
  destinationZone: string;
  checked: number | boolean;
  senderPhone: number | string | null;
  onChange: () => {};
};

const CheckBoxItem = ({
  title,
  dataNumber,
  origin,
  originZone,
  destinationZone,
  destination,
  checked,
  status = '',
  senderPhone = '+2001005042565',
  onChange,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const taggleView = () => {
    LayoutAnimation.easeInEaseOut();
    setIsOpen(!isOpen);
  };

  const openDialer = () => {
    const dialerUrl = `tel:${senderPhone}`;
    Linking.openURL(dialerUrl).catch(err =>
      console.error('Error opening dialer:', err),
    );
  };

  const openWhatsApp = () => {
    const whatsappUrl = `whatsapp://send?phone=${senderPhone}`;
    Linking.openURL(whatsappUrl).catch(err =>
      console.error('Error opening WhatsApp:', err),
    );
  };
  return (
    <View
      style={[
        styles.shipmentContainer,
        {borderWidth: checked ? 1.5 : 0, borderColor: '#6E91EC'},
      ]}>
      <View style={[styles.rowBetween, {padding: 12}]}>
        <CheckBox checked={checked} onChange={onChange} />
        <SvgBoxes />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.titletxt}>{title}</Text>
          <Text
            style={{color: Colors.LightBlack, fontSize: 18, fontWeight: '700'}}>
            {dataNumber}
          </Text>
          <View style={styles.rowStart}>
            <Text style={styles.areaTxt}>{origin}</Text>
            <Icon
              style={{paddingHorizontal: 3}}
              name="arrowright"
              size={20}
              color={Colors.primary}
            />
            <Text style={styles.areaTxt}>{destination}</Text>
          </View>
        </View>
        <View style={styles.statusBox}>
          <Text style={styles.statusTxt}>
            {status?.includes('New') ? 'RECEIVED' : status}
          </Text>
        </View>
        <TouchableOpacity onPress={taggleView} activeOpacity={0.8}>
          <View
            style={[
              styles.extendBox,
              {backgroundColor: isOpen ? Colors.blueTxt : Colors.white},
            ]}>
            <Icon
              name="arrowsalt"
              size={16}
              color={isOpen ? Colors.white : Colors.blueTxt}
            />
          </View>
        </TouchableOpacity>
      </View>
      {isOpen && (
        <Animated.View>
          <View style={styles.dashLine} />
          <View style={styles.extenCard}>
            <View style={styles.rowBetween}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.originTitle}>{'Origin'}</Text>
                <Text style={styles.originTxt}>{origin}</Text>
                <Text style={styles.originZone}>{originZone}</Text>
              </View>
              <Icon name="arrowright" size={25} color={Colors.primary} />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.originTitle}>{'Destination'}</Text>
                <Text style={styles.originTxt}>{destination}</Text>
                <Text style={styles.originZone}>{destinationZone}</Text>
              </View>
            </View>
            <View style={[styles.rowEnd, {marginTop: 10}]}>
              <TouchableOpacity
                onPress={openDialer}
                style={styles.callBtn}
                activeOpacity={0.8}>
                <View style={styles.rowCenter}>
                  <Ionicons name="call" size={22} color={Colors.white} />
                  <Text style={styles.btnTxt}>{'Call'}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={openWhatsApp}
                style={styles.whatsappBtn}
                activeOpacity={0.8}>
                <View style={styles.rowCenter}>
                  <FontAwesome name="whatsapp" size={22} color={Colors.white} />
                  <Text style={styles.btnTxt}>{'WhatsApp'}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export default CheckBoxItem;
