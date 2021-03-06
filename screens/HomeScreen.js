import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import BottomTabNavigator  from '../navigation/BottomTabNavigator';
import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import colors from '../utils/colors';


export default function HomeScreen() {
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
    {/*   <BottomTabNavigator/> */}
      <Text style={{color: colors.black}}>Home Screen Here</Text> 
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
