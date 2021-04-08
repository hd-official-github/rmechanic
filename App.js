import {
  View,
} from 'react-native';

import React, { useEffect } from 'react'

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

  // const [loggedIn, setloggedIn] = useState(false);
  // const [userInfo, setuserInfo] = useState([]);
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['email'],
  //     webClientId:
  //       '640559556492-q7jomc5ptfg9fkc1b87sm7vf17o9an7k.apps.googleusercontent.com',
  //     offlineAccess: true,
  //   });
  // }, []);
  // signIn = async () => {

  //   await GoogleSignin.hasPlayServices();
  //   const { idToken } = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   const data = await auth().signInWithCredential(googleCredential);
  //   // console.log(data.user.uid);
  //   // setloggedIn(true);
  //   const payload = {
  //     'uuid': data.user.uid,
  //     'user_name': data.user.displayName,
  //     'user_email': data.user.email,
  //     'user_phone': data.user.phoneNumber,
  //     'user_img_url': data.user.photoURL
  //   };
  //   uploadUser(payload);
  // };
  // uploadUser = async (payload) => {

  //   axios.post('http://192.168.29.162:80/rmechanic/api/submituser', JSON.stringify(payload), {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }
  // signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     // setloggedIn(false);
  //     // setuserInfo([]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <>
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
    </>
  );
}


export default App;