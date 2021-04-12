import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import { CONSTANTS } from '../../constants';
// import Icon from 'react-native-vector-icons/AntDesign';


export default function Header({ navigation }) {

    function myVehicles() {

        navigation.navigate('Vehicles');
    }

    const [location, setlocation] = useState("PICK A CITY");
    const [car, setcarname] = useState("Select Vehicle");
    const [carimage, setcarimage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqYGSi3lhN98UCZaVjmRw8qLN-GB2maSXOQ&usqp=CAU");

    setInterval(() => {
        AsyncStorage.getItem('location').then(success => {
            if (success == null) {
                setlocation("PICK A CITY")
            } else {

                setlocation(success)
            }
        },


        ).catch(err => setlocation("PICK A CITY"))
    }, 3000);

    useEffect(() => {
        AsyncStorage.getItem('uuid', (err, success) => {

            axios.post(CONSTANTS.BASE_URL + "/getvehicles", { "uuid": success }).then(res => {
                // console.log('smg ', res.data);
                setcarimage(res.data.cars[0].image);
                setcarname(res.data.cars[0].car + " " + res.data.cars[0].model);
            }).catch(err => {
                // console.log('err occured get car ', err);
                setcarimage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqYGSi3lhN98UCZaVjmRw8qLN-GB2maSXOQ&usqp=CAU");
                setcarname("");
            })
        })

    });
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('SelectLocation')} style={styles.location}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ paddingLeft: 10 }}>
                        <Icon name="location-sharp" size={28} color="#2F2E41" />
                    </View>
                    <View>
                        <Text style={styles.headertext}>{location}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.car} onPress={() => myVehicles()}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Avatar.Image size={38} source={{ uri: carimage }} defaultSource={{ uri: 'https://i.pinimg.com/originals/95/69/69/956969895c373bd435ccaf2c2e1de4f2.jpg' }} />
                    <Text style={styles.headertext}>{car ? car : "Your Vehicles"}</Text>
                </View>
            </TouchableOpacity>
        </View >
    );
}
const styles = StyleSheet.create({
    header: { height: 64, width: '100%', backgroundColor: '#fff', flexDirection: 'row', borderBottomColor: '#c3c3c3', borderBottomWidth: 1 },
    car: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    location: { flex: 3, alignItems: 'center', flexDirection: 'row' },
    headertext: {
        fontFamily: 'ManropeBold',
        paddingHorizontal: 15,
        paddingEnd: 20
    }
});