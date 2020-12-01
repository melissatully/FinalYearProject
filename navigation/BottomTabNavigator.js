import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';


import Colors from '../utils/colors';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import BasketScreen from '../screens/BasketScreen';
//mport useColorScheme from '../hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  //const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors.white}}>
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: 'Menu', tabBarIcon: ({ color }) => <TabBarIcon name="ios-pizza" color={colors.primary} />,
        }}
      />
      <BottomTab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          tabBarLabel: 'Basket', tabBarIcon: ({ color }) => <TabBarIcon name="ios-cart" color={colors.primary} />,
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }