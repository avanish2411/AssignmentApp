import React, { useState } from 'react'
import { Alert, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LocationIcon from 'react-native-vector-icons/Ionicons'
import SearchIcon from 'react-native-vector-icons/Feather'
import FilterIcon from 'react-native-vector-icons/AntDesign'
import AddModal from './AddModal'

const Orders = () => {
  const [selected, setSelected] = useState('Delivery');4
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = () => {
    setSelected(prev => prev === 'Delivery' ? 'Pickup' : 'Delivery')
  }

  const handleFilter = () => {
    setModalVisible(true);
  }
  return (
    <SafeAreaView style={{ padding: 12 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:10 }}>
          <LocationIcon name='location-outline' size={30} color='black' />
          <Text style={{ fontWeight: '800', fontSize: 18, paddingLeft: 15 }}>1124 Jupiter,Blackhole</Text>
        </View>
        <SearchIcon name='search' size={30} color='black' />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16, backgroundColor: 'grey', borderRadius: 22, justifyContent: 'center', padding: 8 }}>
        <TouchableOpacity style={{ padding: 8, margin: 'auto', backgroundColor: selected === 'Delivery' ? 'green' : 'grey', borderRadius: 16, width: '50%', }} onPress={handleClick}>
          <Text style={{ fontWeight: '400', fontSize: 18, textAlign: 'center', color: selected === 'Delivery' ? 'white' : 'black' }}>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 8, backgroundColor: selected === 'Delivery' ? 'grey' : 'green', margin: 'auto', borderRadius: 16, width: '50%' }} onPress={handleClick}>
          <Text style={{ fontWeight: '400', fontSize: 18, textAlign: 'center', color: selected === 'Delivery' ? 'black' : 'white' }}>Pickup</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
        <Text style={{ fontWeight: '800', fontSize: 18 }}>Orders</Text>
        <FilterIcon name='filter' size={30} color='black' onPress={handleFilter}/>
      </View>
      <AddModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  )
}

export default Orders

const styles = StyleSheet.create({})