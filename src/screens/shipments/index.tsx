import {SafeAreaView, Text, View, Animated, Easing} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import MainHeader from '@components/mainHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import screenNames from '@navigation/screenNames';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@store/index';
import SearchInput from '@components/searchInput';
import ButtonWithIcon from '@components/buttonWithIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@components/checkBox';
import CheckBoxItemData from '@components/checkBoxItemData';
import Colors from '@common/colors';
import {shipmetListAsync} from '@store/slices/shipmentSlice';

const myIcon = <Icon name="filter" size={25} color={Colors.MediumGray} />;
const myIcon2 = <Icon2 name="line-scan" size={25} color={Colors.white} />;

const userData: Array<any> = [
  {
    title: 'AWS',
    dataNumber: 41785691423,
    fromCountry: 'Cairo',
    toCountry: 'Alexendria',
    checked: true,
    id: 1,
  },
  {
    title: 'AWS',
    dataNumber: 41785691423,
    fromCountry: 'Cairo',
    toCountry: 'Alexendria',
    checked: true,
    id: 2,
  },
  {
    title: 'AWS',
    dataNumber: 41785691423,
    fromCountry: 'Cairo',
    toCountry: 'Alexendria',
    checked: false,
    id: 3,
  },
  {
    title: 'AWS',
    dataNumber: 41785691423,
    fromCountry: 'Cairo',
    toCountry: 'Alexendria',
    checked: true,
    id: 4,
  },
  {
    title: 'AWS',
    dataNumber: 41785691423,
    fromCountry: 'Cairo',
    toCountry: 'Alexendria',
    checked: false,
    id: 5,
  },
  {
    title: 'AWS',
    dataNumber: 41785691423,
    fromCountry: 'Cairo',
    toCountry: 'Alexendria',
    checked: false,
    id: 6,
  },
  {
    title: 'AWS',
    dataNumber: 41785691423,
    fromCountry: 'Cairo',
    toCountry: 'Alexendria',
    checked: false,
    id: 7,
  },
  {
    title: 'AWS',
    dataNumber: 41785691423,
    fromCountry: 'Cairo',
    toCountry: 'Alexendria',
    checked: false,
    id: 8,
  },
  {
    title: 'AWS',
    dataNumber: 41785691423,
    fromCountry: 'Cairo',
    toCountry: 'Alexendria',
    checked: true,
    id: 9,
  },
  {
    title: 'AWS',
    dataNumber: 41785691423,
    fromCountry: 'Cairo',
    toCountry: 'Alexendria',

    checked: false,
    id: 10,
  },
];

interface ShipmentProps {
  navigation: StackNavigationProp<ParamListBase>;
}

const ShipmentsScreen: React.FC<ShipmentProps> = ({navigation}) => {
  const {fullName} = useSelector((state: RootState) => state.auth);
  const {shipmentList} = useSelector((state: RootState) => state.shipment);
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState<any>(userData);
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();

  // use this when render data from server
  useEffect(() => {
    dispatch(
      shipmetListAsync({
        doctype: 'AWB',
        fields: '*',
      }),
    );
  }, []);

  //////////////All Items //////////
  const handleSelectAll = (): any => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      const allItemIds = items.map((item: any) => item?.id);
      console.log(allItemIds);

      setSelectedItems(allItemIds); // an array of all item IDs
    }
    setSelectAll(!selectAll);
  };

  const handleItemSelect = (itemId: number): any => {
    if (selectAll) setSelectAll(false);

    if (selectedItems.includes(itemId)) {
      // filter used to remove id from array
      setSelectedItems(selectedItems?.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader
        onProfilePress={() => navigation.navigate(screenNames.Profile)}
      />
      <View style={styles.innerContainer}>
        <Text>{'hello'}</Text>
        <Text style={styles.headerTxt}>{fullName}</Text>
      </View>
      <View style={styles.innerContainer}>
        <SearchInput placeholder="Search" onChangeText={handleSearchChange} />
      </View>
      <View
        style={[
          styles.innerContainer,
          {flexDirection: 'row', gap: 10, paddingBottom: 30},
        ]}>
        <ButtonWithIcon
          text="Filters"
          btnStyle={{backgroundColor: Colors.placeholderColor, flex: 1}}
          icon={myIcon}
        />
        <ButtonWithIcon
          text="Add Scan"
          btnStyle={{backgroundColor: Colors.primary, flex: 1}}
          icon={myIcon2}
          btnTitleStyle={{color: Colors.white}}
        />
      </View>

      <View style={[styles.innerContainer, styles.secondTitle]}>
        <View>
          <Text style={styles.startItem}>{'Shipments'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <CheckBox checked={selectAll} onChange={handleSelectAll} />
          </View>
          <Text style={[styles.endItem, {paddingLeft: 10}]}>{'Mark All'}</Text>
        </View>
      </View>

      <View>
        <CheckBoxItemData
          selectedItems={selectedItems}
          handleItemSelect={handleItemSelect}
          shipmentList={userData}
        />
      </View>
    </SafeAreaView>
  );
};

export default ShipmentsScreen;
