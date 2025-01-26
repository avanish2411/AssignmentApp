import { StyleSheet, View,Text } from 'react-native';
import React from 'react';
import CheckBox from 'react-native-check-box';

interface AddModalItemsProps {
  check: boolean;
  state: (value: boolean) => void;
  name: string;
}

const AddModalItems: React.FC<AddModalItemsProps> = ({ check, state, name }) => {
  return (
    <View style={{ marginTop: 20, marginHorizontal: 15 }}>
      <CheckBox
        onClick={() => {
          state(!check);
        }}
        isChecked={check}
        rightText={name}
        rightTextStyle={{ fontSize: 20, fontWeight: '600', color: 'black' }}
        style={{ marginBottom: 10}}
        checkedImage={
          <View
            style={{
              width: 24,
              height: 24,
              backgroundColor: 'grey',
              borderRadius: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>✔</Text>
          </View>
        }
        unCheckedImage={
          <View
            style={{
              width: 24,
              height: 24,
              borderColor: 'grey',
              borderWidth: 2,
              borderRadius: 4,
            }}
          />
        }
      />
    </View>
  );
};

export default AddModalItems;

const styles = StyleSheet.create({});
