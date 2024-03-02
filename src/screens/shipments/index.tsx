import {
  SafeAreaView,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
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
import {shipmentListData, shipmentStatusList} from '@utils/dummayData';
import {ScaleWidth} from '@common/fitSize';
import CustomBottomSheet from '@components/customBottomSheet';

const myIcon = <Icon name="filter" size={25} color={'#58536E'} />;
const myIcon2 = <Icon2 name="line-scan" size={25} color={Colors.white} />;

interface ShipmentProps {
  navigation: StackNavigationProp<ParamListBase>;
}

const ShipmentsScreen: React.FC<ShipmentProps> = ({navigation}) => {
  const {fullName} = useSelector((state: RootState) => state.auth);
  const {shipmentList} = useSelector((state: RootState) => state.shipment);
  const [searchText, setSearchText] = useState('');
  const [shipmentData, setShipmentData] = useState<any>(shipmentListData);
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     shipmetListAsync({
  //       doctype: 'AWB',
  //       fields: '*',
  //     }),
  //   );
  // }, []);

  const onCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleSelectAll = (): any => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      const allItemIds = shipmentData.map((item: any) => item?.name);
      setSelectedItems(allItemIds);
    }
    setSelectAll(!selectAll);
  };

  const handleItemSelect = (itemId: string | number): any => {
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
      <View style={[styles.innerContainer, styles.rowBetween]}>
        <ButtonWithIcon
          text="Filters"
          btnStyle={styles.filterTxt}
          icon={myIcon}
          btnTitleStyle={{color: '#58536E'}}
          onPress={() => setOpenFilter(true)}
        />
        <ButtonWithIcon
          text="Add Scan"
          btnStyle={styles.addScanTxt}
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
          <Text style={[styles.endItem, {paddingLeft: 5}]}>{'Mark All'}</Text>
        </View>
      </View>

      <View>
        <CheckBoxItemData
          selectedItems={selectedItems}
          handleItemSelect={handleItemSelect}
          shipmentList={shipmentData}
        />
      </View>
      <CustomBottomSheet isOpen={openFilter} onClose={onCloseFilter}>
        <View>
          <View style={[styles.rowBetween, styles.modelHeaderPadding]}>
            <TouchableOpacity onPress={onCloseFilter} activeOpacity={0.8}>
              <Text style={styles.cancelTxt}>{'Cancel'}</Text>
            </TouchableOpacity>
            <Text style={styles.modelTitle}>{'Filters'}</Text>
            <TouchableOpacity onPress={onCloseFilter} activeOpacity={0.8}>
              <Text style={styles.cancelTxt}>{'Done'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modelSeperateLine} />
          <View style={{padding: 15}}>
            <Text style={styles.modelSubtitle}>{'Shipment Status'}</Text>
            <View style={styles.statusListRow}>
              {shipmentStatusList.map(status => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.statusBox}
                  key={status.id}>
                  <Text style={styles.statusTxt}>{status.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </CustomBottomSheet>
    </SafeAreaView>
  );
};

export default ShipmentsScreen;
