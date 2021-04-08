import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Header({ navigation }) {

    function myVehicles() {
        // Geolocation.getCurrentPosition((info) => {
        //     openMap({ latitude: info.coords.latitude, longitude: info.coords.longitude });
        // });
        navigation.navigate('Vehicles');
    }


    const [location, setlocation] = useState("PICK A CITY");

    setInterval(() => {
        AsyncStorage.getItem('location').then(success => {
            if (success == null) {
                setlocation("PICK A CITY")
            } else {
                setlocation(success)
            }
        }

        ).catch(err => setlocation("PICK A CITY"))
    }, 3000);

    useEffect(() => {
    });
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('SelectLocation')} style={styles.location}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ paddingHorizontal: 13 }}>
                        <Icon name="location-sharp" size={28} color="#2F2E41" />
                    </View>
                    <View>
                        <Text>{location}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.car} onPress={() => myVehicles()}>
                <View>
                    <Avatar.Image size={38} source={{ uri: 'https://img.indianautosblog.com/2020/10/01/maruti-swift-front-third-quarter-e4af.jpg' }} defaultSource={{ uri: 'https://i.pinimg.com/originals/95/69/69/956969895c373bd435ccaf2c2e1de4f2.jpg' }} />
                </View>
            </TouchableOpacity>
        </View >
    );
}
const styles = StyleSheet.create({
    header: { height: 64, width: '100%', backgroundColor: '#fff', flexDirection: 'row', borderBottomColor: '#c3c3c3', borderBottomWidth: 1 },
    car: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    location: { flex: 3, alignItems: 'center', flexDirection: 'row' }
});