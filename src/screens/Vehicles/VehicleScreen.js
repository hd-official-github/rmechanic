import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'
import Appbar from '../../components/Appbar'
import Loader from '../../components/Loader'
import { CONSTANTS } from '../../constants'
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native'
import { RefreshControl } from 'react-native'

export default function VehicleScreen({ navigation }) {

    var [cars, setcars] = useState([]);
    var [loaded, setloaded] = useState(false);
    const [refresh, setrefresh] = useState(true);

    function getcars() {
        AsyncStorage.getItem('uuid', (err, res) => {

            axios.post(CONSTANTS.BASE_URL + "/getvehicles", { 'uuid': res }).then(res => {
                cars = res.data.cars;
                setcars(cars = res.data.cars);
                setloaded(true);
                setrefresh(false);
            }).catch(err => {
                console.log('err ', err);
            });
        });

    }


    function deletecars(reg) {

        Alert.alert(
            "Delete vehicle ?",
            "Are you sure you want to delete this vehicle ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        axios.post(CONSTANTS.BASE_URL + "/deletevehicle", { 'reg': reg }, { headers: { "Content-Type": "application/json" } })
                            .then(res => {
                                console.log("LOG DEL DATA ", res.data);
                                if (res.data) {
                                    navigation.reset({
                                        routes: [{ name: 'Home' }],
                                    });
                                }
                            }).catch(err => {
                                console.log(err);
                                getcars()
                            });
                    }
                }
            ]);
    }

    useEffect(() => {
        getcars();
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <Appbar title="MY VEHICLES" navigation={navigation} back={null} />
            {
                loaded ? <ScrollView scrollEventThrottle={16}
                    refreshControl={
                        <RefreshControl
                            refreshing={refresh}
                            onRefresh={getcars()}
                        />
                    }

                >
                    {
                        cars.map((item, index) => {
                            return (
                                <View style={styles.card} key={index}>
                                    <View style={styles.cheader} >
                                        <View style={{ flexDirection: 'row' }}>
                                            <Avatar.Image size={38} source={{ uri: item.image }} />
                                            <View style={{ paddingHorizontal: 20 }}>
                                                <Text style={{ fontFamily: 'ManropeBold', fontSize: 14 }}>{item.car} {item.model}</Text>
                                                <Text style={{ fontFamily: "ManropeMedium" }}>{item.reg}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => deletecars(item.reg)}>
                                            <Icon name="delete" size={25} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        })

                    }
                </ScrollView> : <Loader />
            }
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 10 }}>
                <TouchableOpacity style={styles.refresh} onPress={() => getcars()}>
                    <MaterialCommunityIcons name="refresh" size={25} />
                    <Text style={{ paddingHorizontal: 20, fontFamily: "ManropeMedium" }}>Refresh Vehicle List</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ paddingVertical: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', marginVertical: 15, marginHorizontal: 20 }} onPress={() => navigation.push('AddVehicle')}>
                <Text style={{ color: "#fff", fontWeight: 'bold', fontFamily: 'ManropeBold', letterSpacing: 6, fontFamily: "ManropeMedium" }}>ADD A VEHICLE</Text>
            </TouchableOpacity>

        </View >
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
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between'
    },
    refresh: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        width: 200,
        paddingVertical: 5,
        borderRadius: 20
    }

});
