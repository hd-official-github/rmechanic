
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
// import { NavigationActions } from 'react-navigation';

import { View, Text, SafeAreaView, Image } from 'react-native'
// import { StackActions } from '@react-navigation/routers';


export default function PaymentSuccess({ navigation }) {
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
    function navigate() {
        navigation.reset({
            routes: [{ name: 'Orders' }],
        });

    } return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>
                <Image source={require('../../../assets/images/success.png')} size={35} />
                <Text style={styles.heading}>Payment Completed</Text>
                <Text style={styles.subheading}>Your Order has been successfully booked.</Text>
            </View>
            <View style={styles.section2}>
                <TouchableOpacity style={styles.button} onPress={() => navigate()}>
                    <Text style={styles.text}>View Your Order</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    section: {
        backgroundColor: '#FFDC3D',
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    section2: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFDC3D', flexDirection: 'row', paddingBottom: 80, flex: 1
    },
    heading: {
        fontFamily: "ManropeBold",
        fontSize: 25
    },
    subheading: {
        marginTop: 10,
        fontSize: 17,
        fontFamily: "ManropeMedium"
    },
    button: {
        backgroundColor: "#000",
        width: 300,
        padding: 20,
        borderRadius: 30

    },
    text: {
        textAlign: 'center',
        color: "#fff",
        fontFamily: 'ManropeBold'
    }

})