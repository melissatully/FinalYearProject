import React from 'react';
import { View, StyleSheet, Image, } from 'react-native';

import AppButton from '../components/AppButton';
import Colors from '../utils/colors';
import useStatusBar from '../hooks/useStatusBar';

export default function WelcomeScreen({ navigation }) {
  useStatusBar('light-content');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/pizzamialogo2019.jpg')} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center'
  },
  logo: {
    width: 350,
    height: 350
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 60,
    width: '100%'
  }
});
