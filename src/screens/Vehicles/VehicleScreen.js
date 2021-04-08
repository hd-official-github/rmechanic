import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'
import Appbar from '../../components/Appbar'
import Loader from '../../components/Loader'
import { CONSTANTS } from '../../constants'

export default function VehicleScreen({ navigation }) {

    var [cars, setcars] = useState([]);
    var [loaded, setloaded] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('uuid', (err, res) => {

            console.log(res);
            axios.post(CONSTANTS.BASE_URL + "/getvehicles", { 'uuid': res }).then(res => {

                cars = res.data.cars;

                setcars(cars = res.data.cars);
                setloaded(true);
            }).catch(err => {
                console.log('err ', err);
            });
        });
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <Appbar title="MY VEHICLES" navigation={navigation} />
            {
                loaded ? <ScrollView scrollEventThrottle={16}>
                    {
                        cars.map((item, index) => {
                            return (
                                <View style={styles.card} key={index}>
                                    <View style={styles.cheader} >
                                        <View>
                                            <Avatar.Image size={38} source={{ uri: item.image }} />
                                        </View>
                                        <View style={{ paddingHorizontal: 20 }}>
                                            <Text style={{ fontFamily: 'ManropeBold', fontSize: 14 }}>{item.car} {item.model}</Text>
                                            <Text>{item.reg}</Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        })

                    }
                </ScrollView> : <Loader />
            }

            <TouchableOpacity style={{ paddingVertical: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', marginVertical: 15, marginHorizontal: 20 }} onPress={() => navigation.push('AddVehicle')}>
                <Text style={{ color: "#fff", fontWeight: 'bold', fontFamily: 'ManropeBold', letterSpacing: 6 }}>ADD A VEHICLE</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 1,
        marginHorizontal: 10
    },
    cheader: {
        flexDirection: 'row', alignItems: 'center'
    }
});
