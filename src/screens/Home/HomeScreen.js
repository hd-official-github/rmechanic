import React, { useEffect, useState } from 'react'
import { Alert, TouchableOpacity } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { View, Text, StyleSheet, Image, BackHandler } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import SwiperLayout from '../../components/Swiper'
import { ScrollView } from 'react-native';
import { CONSTANTS } from '../../constants';

import Header from '../Header/Header';
import axios from 'axios';
import Loader from '../../components/Loader';





// const requirement = async () => {
//     try {
//         const g = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
//             title: "ACESS LOCATION PERMISSION",
//             message:
//                 "RMechanic needs your location " +
//                 "to find the nearest garage to you",
//             buttonNeutral: "Ask Me Later",
//             buttonNegative: "Cancel",
//             buttonPositive: "OK"
//         });
//         if (PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)) {
//             console.log("You can use the ACCESS_FINE_LOCATION");
//         } else {
//             alert('not');
//         }
//     } catch (err) {
//         console.log('errr while gettign loc ', err);
//     }
// }
export default function HomeScreen({ navigation }) {

    const [datas, setDatas] = useState([]);
    const [isLoading, setLoading] = useState(true);


    const gotodetails = (serviceId) => {

        AsyncStorage.getItem('location', (err, res) => {
            if (res == null) {
                navigation.push('SelectLocation');
            } else {
                navigation.push('ServiceDetails', { serviceId: serviceId });
            }
        });

    }
    const getservices = () => {
        axios.get(CONSTANTS.BASE_URL + "/getservices").then((data) => { setDatas(data.data.services); setLoading(false) }).catch((e) => Alert.alert("Err"));
    }
    useEffect(() => {
        getservices();
    }, []);
    return (
        < View style={{ flex: 1 }} >
            <Header navigation={navigation} />
            <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} alwaysBounceVertical={true} >
                <SwiperLayout />
                <Text style={styles.heading}>What services are you looking for ?</Text>
                <View style={styles.grid}>
                    {isLoading ? <Loader /> : datas.map((item) => {
                        return (
                            <TouchableOpacity onPress={() => gotodetails(item.service_id)} style={styles.griditem} key={item.service_id}>
                                <Image source={{ uri: CONSTANTS.IMG_URL + item.image_url }} resizeMode="cover" style={{ width: 60, height: 60 }} key={item.index} />
                                <Text style={styles.title} key={item.index}>{item.service_name}</Text>
                            </TouchableOpacity>
                        );
                    })
                    }
                </View>
                <View style={{ flex: 1, marginVertical: 20, marginHorizontal: 15 }}>
                    <Image
                        source={require('../../../assets/images/cad2.png')} resizeMode="cover" style={{ width: '100%', height: 156 }}
                    />
                </View>
                <View>

                </View>
            </ScrollView>

        </View >
    )
}
const styles = StyleSheet.create({
    grid: {
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    heading: {
        fontFamily: CONSTANTS.FONT_BOLD, fontSize: 18, marginTop: 20,
        backgroundColor: "#fff",
        padding: 10
    },
    griditem: {
        width: '25%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', textAlign: 'center',
        borderWidth: 0.5,
        borderColor: "#eee",
        padding: 20,
        fontFamily: 'ManropeMedium'
    },
    title: {
        fontFamily: 'ManropeMedium',
        textAlign: 'center',
        fontSize: 11
    }

});