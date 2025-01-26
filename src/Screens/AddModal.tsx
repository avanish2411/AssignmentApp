import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';
import CrossIcon from 'react-native-vector-icons/Entypo';
import AddModalItems from '../Component/AddModalItems';

interface AddModalProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

const ratingData = [
    { id: '1', name: '⭐ 4 and Above' },
    { id: '2', name: '⭐ 4.5 and Above' },
    { id: '3', name: '⭐ 5 and Above' },
];

const AddModal: React.FC<AddModalProps> = ({ modalVisible, setModalVisible }) => {
    const [isSelectedR, setSelectionR] = useState(false);
    const [isSelectedD, setSelectionD] = useState(false);
    const [isSelectedDistance, setSelectionDistance] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const onClick = (id: string) => {
        setSelected(id);
    };

    const renderRatingItem = ({ item }: { item: { id: string; name: string } }) => (
        <TouchableOpacity
            style={{
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 25,
                width: 200,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
                backgroundColor: selected === item.id ? 'green' : 'white',
            }}
            onPress={() => onClick(item.id)}>
            <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', textAlign: 'center', letterSpacing: 1 }}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    return (
        <Modal
            animationType="slide"
            transparent
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', width: '100%', height: '100%' }} />
            <View style={{ height: 650, backgroundColor: 'white', marginTop: 'auto', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <CrossIcon name="cross" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '800', fontSize: 20, marginLeft: 'auto', marginRight: 'auto' }}>Sort/Filter</Text>
                </View>
                <Text style={{ fontWeight: '800', fontSize: 20, marginVertical: 15 }}>Sort By</Text>
                <AddModalItems name="Recommended" check={isSelectedR} state={setSelectionR} />
                <AddModalItems name="Delivery time" check={isSelectedD} state={setSelectionD} />
                <AddModalItems name="Distance" check={isSelectedDistance} state={setSelectionDistance} />

                <Text style={{ fontWeight: '800', fontSize: 20, marginVertical: 15 }}>Price range</Text>
                {['Below $10', '$10 to $99', 'Over $100'].map((price, index) => (
                    <Text key={index} style={{ fontSize: 18, fontWeight: '500', color: 'black', marginLeft: 15, marginBottom: 10, letterSpacing: 1 }}>
                        {index === 0 ? '$' : index === 1 ? '$$' : '$$$'} {price}
                    </Text>
                ))}

                <Text style={{ fontWeight: '800', fontSize: 20, marginVertical: 15 }}>Rating</Text>
                <FlatList
                    data={ratingData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderRatingItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </Modal>
    );
};

export default AddModal;
