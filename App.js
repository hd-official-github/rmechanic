import {
  View,
} from 'react-native';

import React, { useEffect } from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './src/Splash';
import Login from './src/Login';
// import FormData from 'form-data';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import AppNav from './src/navigation/AppNav';



const Stack = createStackNavigator();
const App = () => {

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FFDC3D',
      accent: '#FFDC3D',
    },
  };
  return (
    <>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <View style={{
            flex: 1
          }}>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, }}>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={AppNav} />
            </Stack.Navigator>
          </View>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}


export default App;