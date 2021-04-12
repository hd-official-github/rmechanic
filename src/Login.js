import {
    Button,
    SafeAreaView,
    ScrollView,
    Text,
    View,
    StyleSheet,
    Image,
    ToastAndroid
} from 'react-native';

import React, { useState, useEffect } from 'react'
import {
    GoogleSignin,
    GoogleSigninButton
    // statusCodes,
} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CONSTANTS } from './constants';
import Loader from './components/Loader';
import Toast from 'react-native-toast-message';

const Login = ({ navigation }) => {
    const [loggingIn, setloggingIn] = useState(false);
    const [loggedIn, setloggedIn] = useState(false);
    // const [userInfo, setuserInfo] = useState([]);
    useEffect(() => {
        // var link = CONSTANTS.BASE_URL
        // axios.get(CONSTANTS.BASE_URL).then((data) => console.log(data.data)).catch(err => console.log(err));

        GoogleSignin.configure({
            scopes: ['email'],
            webClientId:
                '640559556492-q7jomc5ptfg9fkc1b87sm7vf17o9an7k.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);
    function Toaster(type, text1, text2) {
        Toast.show({
            type: type,
            text1: text1,
            text2: JSON.stringify(text2),
            position: 'bottom',
            visibilityTime: 4000,
            autoHide: true,
        })
    }
    signIn = async () => {

        await GoogleSignin.hasPlayServices();
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        setloggingIn(true);
        // Sign-in the user with the credential
        const data = await auth().signInWithCredential(googleCredential);

        const payload = {
            'uuid': data.user.uid,
            'user_name': data.user.displayName,
            'user_email': data.user.email,
            'user_phone': data.user.phoneNumber,
            'user_img_url': data.user.photoURL
        };
        await uploadUser(payload);
    };
    uploadUser = async (payload) => {

        axios.post(CONSTANTS.BASE_URL + '/submituser', JSON.stringify(payload), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                if (response.data.ok == 'true' && response.data.uid) {

                    AsyncStorage.setItem('uuid', response.data.uid);

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }
                // console.log(response.data);
            })
            .catch(function (error) {
                Toaster('error', 'NO INTERNET', "Please check your internet connection and try again");
            });

    }
    // signOut = async () => {
    //     try {
    //         await GoogleSignin.revokeAccess();
    //         await GoogleSignin.signOut();
    //         // setloggedIn(false);
    //         // setuserInfo([]);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    return (
        loggingIn ? <Loader /> :
            <View style={styles.container} >
                <View style={styles.top}>
                    <Image source={require('../assets/images/mechanic.png')} />
                    <Text style={styles.info}>On Demand Vehicle services at your doorsteps</Text>
                </View>
                <View style={styles.bottom}>
                    <GoogleSigninButton size={GoogleSigninButton.Size.Wide} color={GoogleSigninButton.Color.Light} onPress={signIn} style={{ backgroundColor: '#000', paddingVertical: 30 }} />
                </View>
                <Toast ref={(ref) => Toast.setRef(ref)} />
            </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 3,
        backgroundColor: '#FFDC3D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 1,
        backgroundColor: '#FFDC3D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        paddingVertical: 20,
        fontSize: 20,
        textAlign: 'center'
    }
});

{/* <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Button
                                onPress={signIn}
                                title="Login"
                                color="red"></Button>
                        </View>
                        <View style={styles.buttonContainer}>
                            {!loggedIn && <Text>You are currently logged out</Text>}
                            {loggedIn && (
                                <Button
                                    onPress={this.signOut}
                                    title="LogOut"
                                    color="red"></Button>
                            )}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView> */}

export default Login;