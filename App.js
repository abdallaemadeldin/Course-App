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
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
