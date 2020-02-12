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
import Splash from './src/screens/Splash';
import Intro from './src/screens/Intro';
import SignIn from './src/screens/SignIn';
import ForgetPassword from './src/screens/ForgetPassword';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator headerMode="none" initialRouteName="Splash" mode="modal" keyboardHandlingEnabled={true} screenOptions={{
          animationEnabled: true,
          animationTypeForReplace: "pop",
          cardOverlayEnabled: true,
          cardShadowEnabled: true
        }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
