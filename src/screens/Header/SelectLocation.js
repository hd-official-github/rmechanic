import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation';
import { View, Text, StyleSheet, PermissionsAndroid, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { CONSTANTS } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Loader from '../../components/Loader';



export default function SelectLocation({ navigation }) {
    const [loader, setloader] = useState(false)

    const requirement = async () => {
        try {
            await PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION;
        } catch (err) {
            Toaster('error', "ACCES FINE LOC PERM DENIED", err);
        }
    }
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
    async function sendLocToServer(info, locname) {
        setloader(true);

        console.log(locname)
        const uuid = await AsyncStorage.getItem('uuid');
        const data = { "lat": info.coords.latitude, "lng": info.coords.longitude, 'user_id': uuid, 'location': locname };
        axios.post(CONSTANTS.BASE_URL + "/submitlocation", JSON.stringify(data), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((success) => {

                AsyncStorage.getItem('location', (err, result) => {
                    if (!err && result != null) {

                        if (locname !== result) {
                            AsyncStorage.setItem('location', locname);
                        }
                    }
                    else {

                        AsyncStorage.setItem('location', locname);
                    }
                })
                navigation.navigate('HomeScreen')

            })
            .catch(err => Toaster('error', 'Network error happened', err.message))

        //navigation.pop();
    }

    async function getLocation(locname) {
        await requirement();

        Geolocation.getCurrentPosition(info => { sendLocToServer(info, locname) },
            (err) => { Alert.alert('Location Access Denied', JSON.stringify(err)) }, { enableHighAccuracy: false, maximumAge: 1000, timeout: 30000 });

    }
    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();
        parent.setOptions({
            tabBarVisible: false
        });
        return () =>
            parent.setOptions({
                tabBarVisible: true
            });
    }, []);
    return (
        <View style={{ flex: 1 }}>
            {
                loader ? <Loader /> :
                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <View style={styles.label}><Text style={styles.text}>SELECT YOUR LOCATION</Text></View>
                            {/* <TouchableOpacity style={styles.button} onPress={() => Toaster('info', 'Pick your City', 'Choose any city to continue')}>
                                <Icon name="my-location" size={25} style={{ paddingRight: 5 }} />
                                <Text style={styles.text}>USE CURRENT LOCATION</Text>
                            </TouchableOpacity> */}
                        </View>
                        <View style={{ paddingVertical: 20, paddingHorizontal: 10, backgroundColor: '#fff', marginBottom: 5, alignItems: 'center' }}>
                            <Text style={styles.text}>CITIES WE SERVE</Text>
                        </View>
                        <TouchableOpacity style={styles.item} onPress={() => getLocation("Bengaluru")}>
                            <Text style={styles.text}>Bengaluru</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={() => getLocation("Chennai")}>
                            <Text style={styles.text}>Chennai</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={() => getLocation("Mumbai")}>
                            <Text style={styles.text}>Mumbai</Text>
                        </TouchableOpacity>
                        <Toast ref={(ref) => Toast.setRef(ref)} />
                    </View>
            }
        </View>

    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FFDC3D",
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 10
    },
    text: {
        fontFamily: "ManropeBold",
    },
    input: {
        marginTop: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 24,
        marginBottom: 1
    }
})
