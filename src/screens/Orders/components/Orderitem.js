import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper';
import { CONSTANTS } from '../../../constants';


export default function Orderitem({ navigation, res }) {
    // console.log("RES  ", res.billing_id);

    useEffect(() => {

    }, [])

    return (
        <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => navigation.push('OrderDetails', { billing_id: res.billing_id })}>
            <View style={styles.card}>
                <View style={styles.left}>
                    <Text style={styles.title}>Booking id #{res.billing_id}</Text>
                    <GetStatus res={res.order_status} />

                </View>
                <View style={styles.right}>
                    <View style={styles.lv1}>
                        <Avatar.Image source={{ uri: CONSTANTS.IMG_URL + res.service_img }} size={25} />
                        <Text style={styles.textright}>{res.service_name} </Text>
                    </View>
                    <View style={styles.lv2}>
                        <Avatar.Image source={{ uri: res.car_img }} size={25} />
                        <Text style={styles.textright}>{res.car_name}</Text>
                    </View>
                </View>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: '#ffdc3d', backgroundColor: "#fff", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                <Text style={{ textAlign: 'center', paddingVertical: 13, fontFamily: "ManropeBold", color: "#000" }}>VIEW ORDER</Text>
                <Icon name="angle-right" size={25} />
            </View>
        </TouchableOpacity>
    )
}
export function GetStatus(res) {
    switch (res.res) {
        case "1": return <OrderProgress />
            break;
        case "2": return <OrderAsessment />
            break;
        case "3": return <OrderServicing />
            break;
        case "4": return <OrderFailed />
            break;
        default: return <OrderProgress />
    }
}
export function OrderProgress() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar.Image source={require('../../../../assets/images/progress.png')} size={24} />
            <Text style={{ fontFamily: "ManropeBold", }}>Order In Progress</Text>
        </View>
    );
}
export function OrderFailed() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar.Image source={require('../../../../assets/images/failed.png')} size={24} />
            <Text style={{ fontFamily: "ManropeBold", }}>Order Failed </Text>
        </View>
    );
}
export function OrderAsessment() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar.Image source={require('../../../../assets/images/caution.png')} size={24} />
            <Text style={{ fontFamily: "ManropeBold", }}>Ongoing Assessment</Text>
        </View>
    );
}
export function OrderServicing() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="delete" size={25} />
            <Text style={{ fontFamily: "ManropeBold", }}>Servicing</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        flex: 3
    },
    text: {
        fontFamily: "ManropeMedium"
    },
    textright: {
        paddingLeft: 15, fontFamily: "ManropeMedium", fontSize: 12
    },
    title: {
        fontFamily: "ManropeBold", marginBottom: 10
    },
    lv1: {
        flexDirection: 'row', alignItems: 'center',
    },
    lv2: {
        flexDirection: 'row', alignItems: 'center', marginVertical: 5
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 30
    }
});
