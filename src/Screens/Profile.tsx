import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SettingItem from '../Component/SettingItem';
import RightIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import PushNotifications from './PushNotifications';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  PushNotifications: undefined;
};


const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{ padding: 8, marginTop: 15 }}>
      <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16, paddingVertical: 10 }}>Profile</Text>
      <View style={{ flexDirection: 'row', padding: 8, marginVertical: 15 }}>
        <View style={{ backgroundColor: 'grey', width: 50, height: 50, borderRadius: 10, marginRight: 15 }} />
        <View>
          <Text style={{ lineHeight: 26, fontSize: 22, fontWeight: '900' }}>Harsh Ghai</Text>
          <Text style={{ fontWeight: '600', fontSize: 18, color: 'green' }}>View Account</Text>
        </View>
      </View>
      <Text style={{ fontSize: 20, fontWeight: '800', marginVertical: 10, marginHorizontal: 8 }}>Settings</Text>
      <SettingItem name="Your favourites" size={24} color="black" />
      <SettingItem name="Payment" size={24} color="black" />
      <SettingItem name="Help Centre" size={24} color="black" />
      <SettingItem name="Voucher" size={24} color="black" />

      <TouchableOpacity onPress={() => navigation.navigate('PushNotifications')}>
        <SettingItem name="Notifications" size={24} color="black" />
      </TouchableOpacity>

      <SettingItem name="Support" size={24} color="black" />
      <SettingItem name="About" size={24} color="black" />

      <View style={{ marginBottom: 8, marginVertical: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 6, color: 'green' }}>Sign out</Text>
          <RightIcon name="keyboard-arrow-right" size={24} color="black" />
        </View>
        <View style={{ height: 1, backgroundColor: 'grey', marginHorizontal: 8 }} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
