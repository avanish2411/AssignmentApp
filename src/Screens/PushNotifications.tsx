import React,{useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import RightIcon from 'react-native-vector-icons/MaterialIcons';
import Profile from './Profile';

import { useNavigation } from '@react-navigation/native';
import PushNotificationsItems from '../Component/PushNotificationItems';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Profile: undefined;
};

const PushNotifications = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isEnabledOffer, setIsEnabledOffer] = useState(false);
  const [isEnabledM, setIsEnabledM] = useState(false);
  const [isEnabledV, setIsEnabledV] = useState(false);
  const [isEnabledOthers, setIsEnabledOthers] = useState(false);
  
  return (
    <SafeAreaView style={{ padding: 8 }}>
      <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
        <RightIcon name="keyboard-arrow-left" size={32} color="black" onPress={() => navigation.goBack()} />
        <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 18, marginLeft: 80 }}>Push Notifications</Text>
      </View>
      <PushNotificationsItems title="Offers/Deals" check={isEnabledOffer} state={setIsEnabledOffer}/>
      <PushNotificationsItems title="Messages" check={isEnabledM} state={setIsEnabledM}/>
      <PushNotificationsItems title="Voucher/Coupon" check={isEnabledV} state={setIsEnabledV}/>
      <PushNotificationsItems title="Other" check={isEnabledOthers} state={setIsEnabledOthers}/>
      <View style={{backgroundColor:'green',padding:20,margin:10,borderRadius:27,marginTop:375}}>
        <Text style={{textAlign:'center',fontSize:18,fontWeight:'400',color:'white',letterSpacing:1}}>Update Settings</Text>
      </View>
    </SafeAreaView>
  )
}

export default PushNotifications

const styles = StyleSheet.create({})