import React from 'react';
import {ScrollView, View} from 'react-native';
import CheckBoxItem from '@components/checkBoxItem';

type CheckBoxItemDataProps = {
  shipmentList: any;
  selectedItems: [];
  handleItemSelect: (id: number) => any;
};

const CheckBoxItemData: React.FC<CheckBoxItemDataProps> = ({
  shipmentList,
  selectedItems,
  handleItemSelect,
}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View>
        <ScrollView>
          <View style={{marginTop: 20, marginBottom: 50}}>
            {shipmentList.map((user: any) => (
              <View key={user.id}>
                <CheckBoxItem
                  title={user.title}
                  dataNumber={user.dataNumber}
                  fromCountry={user.fromCountry}
                  toCountry={user.toCountry}
                  checked={selectedItems.includes(user.id)}
                  onChange={() => handleItemSelect(user.id)}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default CheckBoxItemData;
