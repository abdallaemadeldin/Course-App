/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from './app.json';
import Splash from './src/screens/Splash';
import Intro from './src/screens/Intro';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator headerMode="screen" initialRouteName="Splash" mode="modal" keyboardHandlingEnabled={true} screenOptions={{
          animationEnabled: true,
          animationTypeForReplace: "pop",
          cardOverlayEnabled: true,
          cardShadowEnabled: true
        }}>
          <Stack.Screen name="Splash" component={Splash} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Intro" component={Intro} options={{
            headerShown: false
          }} />
          <Stack.Screen name="SignIn" component={SignIn} options={{
            headerShown: false
          }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{
            headerShown: false
          }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Home" component={Home} options={{
            headerStyle: {
              backgroundColor: Colors.green,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              elevation: 0,
              shadowOpacity: 0
            },
            headerTintColor: Colors.white
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
