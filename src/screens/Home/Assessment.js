import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Avatar } from 'react-native-paper';
import Appbar from '../../components/Appbar';
import Steps from '../../components/Steps';
import RazorpayCheckout from 'react-native-razorpay';
import { CONSTANTS } from '../../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { CommonActions } from '@react-navigation/routers';


export default function Assessment({ navigation, route }) {
    const { serviceId } = route.params;
    const [car, setcar] = useState("");
    const [user, setuser] = useState({});
    const [locname, setLocname] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [phone, onChangephone] = useState("");
    const [address, onchangeAddress] = useState("");
    const phoneInput = useRef < PhoneInput > (null);

    // const [focusable, setfocusable] = useState(false);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };



    async function getcar(user) {
        await axios.post(CONSTANTS.BASE_URL + "/getvehicles", { uuid: user }).then((res) => {
            setcar(res.data.cars[0].car + " " + res.data.cars[0].model);

        })
    }
    async function getlocation(user) {
        await axios.post(CONSTANTS.BASE_URL + "/getlocation", { uuid: user }).then((res) => {

            setLat(res.data.location.lat);
            setLng(res.data.location.lng);
            setLocname(res.data.location.location);
        });
    }
    async function getUser(user) {
        await axios.post(CONSTANTS.BASE_URL + "/getUser", { uuid: user }).then((res) => {

            // console.log(res.data);
            setuser({
                uuid: user,
                user_email: res.data.user.user_email,
                user_name: res.data.user.user_name,
            });
        });
    }
    useEffect(() => {

        AsyncStorage.getItem('uuid', (err, result) => {
            // return result;

            getlocation(result);
            getcar(result);
            getUser(result);
        });

    }, []);
    function mv() {
        setModalVisible(!isModalVisible);
    }
    function pay() {

        setModalVisible(false);
        // console.log("service id ", serviceId);
        // console.log("USER ", user.user_email, " ", user.user_name);
        // console.log("phone ", phone);
        // console.log("address ", address);
        // console.log("car ", car);
        // console.log("LOC ", lat, " ", lng, " ", locname);
        var payload = {
            "service_id": serviceId,
            "uuid": user.uuid,
            "user_email": user.user_email,
            "user_name": user.user_name,
            "user_phone": phone,
            "address": address,
            "car_name": car,
            "loc_lat": lat,
            "loc_lng": lng,
            "loc_name": locname,
        }
        var options = {
            description: 'Service Booking Fee',
            image: CONSTANTS.IMG_URL + "/assets/images/raz.png",
            currency: 'INR',
            key: CONSTANTS.RAZ_KEY,
            amount: '9900', //in paisa
            name: 'R Mechanic',
            prefill: {
                email: user.user_email,
                contact: phone,
                name: user.user_name
            },
            theme: { color: '#FFDC3D' }
        }
        RazorpayCheckout.open(options).then((data) => {

            const payment_id = data.razorpay_payment_id;
            payload.payment_id = payment_id;


            // console.log(payload);

            axios.post(CONSTANTS.BASE_URL + "/submit_order", payload).then((res) => {
                // console.log(res.data);
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'PaymentSuccess' }
                        ],
                    })
                );
            }).catch((err => {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'PaymentFailed' }
                        ],
                    })
                );
            }));

        }).catch((error) => {

            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'PaymentFailed' }
                    ],
                })
            );

        });



        // navigation.push('PaymentFailed');

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Appbar title="Book your service" navigation={navigation} />
                <View style={{ flex: 8 }}>
                    <ScrollView >
                        <View style={styles.card}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Avatar.Image source={require('../../../assets/images/service.jpg')} size={35} />
                                <Text style={styles.heading}>Assessment Details</Text>
                            </View>

                            <Text style={styles.bottomtext}>Get an expert mechanic reach to your doorsteps and assess your car problems. Our team will then finalize your service and give you best estimates across all India </Text>
                        </View>
                        <Steps />
                        <View style={styles.card}>
                            <View style={styles.header}>
                                <Avatar.Image source={require('../../../assets/images/book.jpg')} size={35} />
                                <Text style={styles.heading}>Service Booking Details</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.bottomtext}>Denting and Painting</Text>
                                <Text style={styles.bottomtext}>₹ 99.0</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.bottomtext}>Taxes and GST</Text>
                                <Text style={styles.bottomtext}>₹ 0.0</Text>
                            </View>
                            <Text>--------------------------------------------</Text>
                            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                                <Text style={styles.bottomtext}>GRAND TOTAL</Text>
                                <Text style={styles.bottomtext}>₹ 99.0</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ backgroundColor: "#fff", flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                    <View style={{ marginVertical: 5 }}>
                        <Text style={styles.bottomlabel}>Total</Text>
                        <Text style={styles.bottomtext}>₹ 99</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonpay} onPress={() => mv()}>
                        <Text style={{ color: "#fff", fontFamily: "ManropeBold" }}>Proceed To Pay</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <Modal onBackButtonPress={() => setModalVisible(false)} onBackdropPress={() => setModalVisible(false)} isVisible={isModalVisible} swipeDirection={['down']}
                style={{ width: '100%', margin: 0, flex: 1, }}>
                <View style={{ height: 300, backgroundColor: "#fff", marginTop: 'auto', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                    <View style={styles.section}>
                        <Text style={styles.label}>Phone Number</Text>
                        <PhoneInput
                            // ref={phoneInput}
                            defaultValue={phone}
                            defaultCode="IN"
                            layout="second"
                            value={phone}
                            onChangeText={(text) => {
                                onChangephone(text);
                                // console.log(text);
                            }}
                            textContainerStyle={{ backgroundColor: "#fff", height: 70, color: "#000", }}
                            containerStyle={{ margin: 0, paddingHorizontal: 0 }}
                            textInputStyle={{ color: '#000', fontSize: 16, borderBottomColor: "#ccc", borderBottomWidth: 1 }}
                            codeTextStyle={{ padding: 0, margin: 0 }}

                            autoFocus
                        />

                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(address) => onchangeAddress(address)}
                            value={address}
                            placeholder="Street Address, Locality, Neighbourhood"

                        />
                    </View>
                    <TouchableOpacity style={{ backgroundColor: "#000", marginTop: 'auto' }} onPress={() => pay()}>
                        <Text style={{ color: "#fff", padding: 20, textAlign: 'center', fontFamily: 'ManropeBold' }}>SUBMIT</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
        borderRadius: 10
    },
    heading: {
        fontFamily: "ManropeBold",
        marginHorizontal: 10,
        fontSize: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    bottomlabel: {
        fontFamily: 'ManropeBold',
        fontSize: 22
    },
    bottomtext: {
        fontFamily: "ManropeMedium",
        fontSize: 14
    },
    buttonpay: {
        backgroundColor: '#000',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    section: {
        marginHorizontal: 20,
        marginVertical: 20,

    },
    label: {
        fontFamily: "ManropeBold",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    }
});
