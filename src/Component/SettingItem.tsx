import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RightIcon from 'react-native-vector-icons/MaterialIcons'

interface SettingItemProps {
    name: string;
    size: number;
    color: string;
}

const SettingItem: React.FC<SettingItemProps> = ({ name, size, color }) => {
    return (
        <View style={{ marginBottom: 8, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 6 }}>{name}</Text>
                <RightIcon name='keyboard-arrow-right' size={size} color={color} />
            </View>
            <View style={{ height: 1, backgroundColor: 'grey', marginHorizontal: 8 }} />
        </View>

    )
}

export default SettingItem

const styles = StyleSheet.create({})