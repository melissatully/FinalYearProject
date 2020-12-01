import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import BottomTabNavigatorx  from '../navigation/BottomTabNavigator';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import colors from '../utils/colors';


export default function ProfileScreen() {
  useStatusBar('dark-content');
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <BottomTabNavigatorx/>
      <Text style={{color: colors.black}}>Profile Screen</Text> 
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
