import React from 'react';
import {FlatList, View} from 'react-native';
import CheckBoxItem from '@components/checkBoxItem';
import styles from './styles';

type CheckBoxItemDataProps = {
  shipmentList: any;
  selectedItems: [];
  handleItemSelect: (id: string) => any;
};

const CheckBoxItemData: React.FC<CheckBoxItemDataProps> = ({
  shipmentList,
  selectedItems,
  handleItemSelect,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={shipmentList}
        keyExtractor={shipment => shipment.name}
        renderItem={({item}) => (
          <View key={item.name}>
            <CheckBoxItem
              title={'AWS'}
              dataNumber={item?.name}
              origin={item?.destination_city}
              originZone={item?.origin_zone}
              destination={item?.origin_city}
              destinationZone={item?.destination_zone}
              status={item?.status}
              senderPhone={item?.sender_phone}
              checked={selectedItems.includes(item?.name)}
              onChange={() => handleItemSelect(item?.name)}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={styles.listFooterStyle}
      />
    </View>
  );
};
export default CheckBoxItemData;
