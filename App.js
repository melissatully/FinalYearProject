import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView, ScrollView, StatusBar, View, Text, Button, Image, StyleSheet } from 'react-native';

/* class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    )
  }
}

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MainScreen</Text>
      </View>
    )
  }
}

class MenuScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MenuScreen</Text>
      </View>
    )
  }
}

class CheckoutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CheckoutScreen</Text>
      </View>
    )
  }
} */

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('./images/pizzamialogo2019.jpg')} style={styles.img}/>
      <Text>Splash Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")}/>
      <Button title="Register" onPress={() => navigation.navigate("Registration")}/>
    </View>
  )
}

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: '#fff',
        headerTintStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{
          title:''
        }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegScreen} />
      </Stack.Navigator>

      <Tab.Navigator 
      initialRouteName="Main"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }} >
      <Tab.Screen name="Profile" component={'./screens/Profile.js'} options={{ tabBarLabel: 'Account' (<Icon size ={25} name={ios-person} />), }} />
      <Tab.Screen name="Home" component={'./screens/Main.js'} options={{ tabBarLabel: 'Home' (<Icon size ={25} name={ios-home} />), }} />
      <Tab.Screen name="Menu" component={'./screens/Menu.js'} options={{ tabBarLabel: 'Menu' (<Icon size ={25} name={ios-pizza} />), }} />
      <Tab.Screen name="Checkout" component={'./screens/Checkout.js'} options={{ tabBarLabel: 'Basket' (<Icon size ={25} name={ios-cart} />), }} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./images/pizzamialogo2019.jpg')} style={styles.img}/>
      <Text>Login Screen</Text>
    </View>
  )
}

const RegScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./images/pizzamialogo2019.jpg')} style={styles.img}/>
      <Text>Registration Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  text: {
    color: 'red', 
    fontSize: 50
  },
  img: {
    width: 200,
    height: 200,
    alignContent: 'center',
  }
});

/* const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName="Main"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }} >
      <Tab.Screen name="Profile" component={'./screens/Profile.js'} options={{ tabBarLabel: 'Account' (<Icon size ={25} name={ios-person} />), }} />
      <Tab.Screen name="Home" component={'./screens/Main.js'} options={{ tabBarLabel: 'Home' (<Icon size ={25} name={ios-home} />), }} />
      <Tab.Screen name="Menu" component={'./screens/Menu.js'} options={{ tabBarLabel: 'Menu' (<Icon size ={25} name={ios-pizza} />), }} />
      <Tab.Screen name="Checkout" component={'./screens/Checkout.js'} options={{ tabBarLabel: 'Basket' (<Icon size ={25} name={ios-cart} />), }} />
    </Tab.Navigator>
  );
} */
/* {

    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
        ),
      }
    },
    Home: {
      screen: MainScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      }
    },
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-pizza'} />
          </View>
        ),
      }
    },
    Checkout: {
      screen: CheckoutScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
          </View>
        ),
      }
    },
  },
  {
    initialRouteName: 'Profile',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
  }
); */

export default App;