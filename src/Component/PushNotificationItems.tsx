import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

type Props = {
  title: string;
  check: boolean;
  state: (value: boolean) => void;
};

const PushNotificationItems: React.FC<Props> = ({ title, check, state }) => {
  const [isEnabled, setIsEnabled] = useState(check);

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10, paddingHorizontal: 16, }}>
        <View style={{ width: 30, height: 30, backgroundColor: 'grey', borderRadius: 8, marginRight: 5 }} />
        <View style={{ flex: 1, marginHorizontal: 12, }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, }}>
            {title}
          </Text>
          <Text style={{ textAlign: 'justify', fontSize: 14, color: '#555', }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
          <ToggleSwitch
            isOn={isEnabled}
            onColor="green"
            offColor="grey"
            labelStyle={{ color: 'black', fontWeight: '900' }}
            size="medium"
            onToggle={(isEnabled) => {{
              setIsEnabled(isEnabled);
              state(isEnabled)}
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PushNotificationItems;
