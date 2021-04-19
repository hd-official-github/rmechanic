import { CommonActions } from '@react-navigation/routers'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'

import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay'
import Appbar from '../../components/Appbar'
import { CONSTANTS } from '../../constants'

export default function Orderlist({ navigation }) {
    useEffect(() => {
        console.log('orderlist');
    }, [])
    async function onpay() {
        var options = {
            description: 'Order Payment',
            image: CONSTANTS.IMG_URL + "/assets/images/raz.png",
            currency: 'INR',
            key: CONSTANTS.RAZ_KEY,
            amount: '9900',
            name: 'R Mechanic',
            prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software'
            },
            theme: { color: '#FFDC3D' }
        }
        RazorpayCheckout.open(options).then((data) => {

            const payment_id = data.razorpay_payment_id;
            if (payment_id) {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'OrderScreen' }
                        ],
                    })
                );
                // navigation.popToTop();
            }

        }).catch((error) => {
            navigation.popToTop();
        });
    }
    return (
        <View>
            <Appbar title="Order List" navigation={navigation} />
            <ScrollView scrollEventThrottle={16}>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Item</Text>
                        <Text style={styles.label}>Price</Text>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Image source={require('../../../assets/images/dent.png')} style={{ width: 60, height: 50, borderRadius: 12 }} resizeMode="cover" />
                        </View>
                        <View>
                            <Text style={styles.itemtext}>Front Bumper Dent</Text>
                        </View>
                        <View>
                            <Text style={styles.itemtext}>₹ 1,199</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Image source={require('../../../assets/images/dent.png')} style={{ width: 60, height: 50, borderRadius: 12 }} resizeMode="cover" />
                        </View>
                        <View>
                            <Text style={styles.itemtext}>Front Bumper Dent</Text>
                        </View>
                        <View>
                            <Text style={styles.itemtext}>₹ 1,199</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View>
                            <Image source={require('../../../assets/images/dent.png')} style={{ width: 60, height: 50, borderRadius: 12 }} resizeMode="cover" />
                        </View>
                        <View>
                            <Text style={styles.itemtext}>Front Bumper Dent</Text>
                        </View>
                        <View>
                            <Text style={styles.itemtext}>₹ 1,199</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.heading}>Summary</Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>Total Amount</Text>
                        <Text style={styles.label}>₹ 3,199</Text>
                    </View>
                </View>
                <View style={{ marginTop: 5 }}>
                    <TouchableOpacity style={{ backgroundColor: "#000" }} onPress={() => onpay()}>
                        <Text style={{ color: "#fff", textAlign: 'center', fontFamily: "ManropeMedium", paddingVertical: 20 }}>Pay ₹ 3,199</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        marginHorizontal: 10,
        paddingVertical: 20,
        marginBottom: 5

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',

    },
    label: {
        fontFamily: 'ManropeBold',
        fontSize: 15,
        paddingHorizontal: 10
    },
    itemtext: {
        fontFamily: "ManropeMedium",
        paddingHorizontal: 10

    },
    heading: {
        paddingHorizontal: 20,
        fontFamily: "ManropeBold",
        fontSize: 20,
        marginBottom: 20
    }


});
