import React from 'react';
import { Dimensions, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Orders from '../Screens/Orders';
import History from '../Screens/History';
import Profile from '../Screens/Profile';

import HomeIcon from 'react-native-vector-icons/Feather';
import OrderIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/Feather';
import PushNotifications from '../Screens/PushNotifications';

type TabParamList = {
  Home: undefined;
  Orders: undefined;
  History: undefined;
  Profile: undefined;
};

type StackParamList = {
  Main: undefined;
  PushNotifications: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: Dimensions.get('window').height * 0.06,
        borderTopWidth: 1,
        borderColor: '#ddd',
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const Icon =
          route.name === 'Home'
            ? HomeIcon
            : route.name === 'Orders'
            ? OrderIcon
            : route.name === 'History'
            ? HistoryIcon
            : ProfileIcon;

        return (
          <TouchableOpacity
            key={route.key}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => navigation.navigate(route.name as keyof TabParamList)}
          >
            {isFocused && (
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                  height: 4,
                  backgroundColor: 'green',
                }}
              />
            )}

            <Icon
              name={
                route.name === 'Home'
                  ? 'home'
                  : route.name === 'Orders'
                  ? 'shopping-outline'
                  : route.name === 'History'
                  ? 'clock-time-seven-outline'
                  : 'user'
              }
              size={24}
              color={isFocused ? 'black' : 'grey'}
            />
            <Text style={{ color: isFocused ? 'black' : 'grey', fontSize: 12 }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Main: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen
          name="PushNotifications"
          component={PushNotifications}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
