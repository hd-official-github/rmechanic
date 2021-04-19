import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper';


export default function OrderCompleted({ navigation }) {
    return (
        <TouchableOpacity style={{ marginBottom: 10 }} >
            <View style={styles.card}>
                <View style={styles.left}>
                    <Text style={styles.title}>Booking id #1332211</Text>
                    <OrderComplete />
                </View>
                <View style={styles.right}>
                    <View style={styles.lv1}>
                        <Avatar.Image source={require('../../../../assets/images/repair.png')} size={25} />
                        <Text style={styles.textright}>Denting and Painting Services</Text>
                    </View>
                    <View style={styles.lv2}>
                        <Avatar.Image source={require('../../../../assets/images/audi.jpg')} size={25} />
                        <Text style={styles.textright}>Audi A3</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "#000" }}>
                <Text style={{ textAlign: 'center', paddingVertical: 13, fontFamily: "ManropeBold", color: "#fff" }}>VIEW ORDER HISTORY</Text>
            </View>
        </TouchableOpacity>
    )
}
export function OrderComplete() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar.Image source={require('../../../../assets/images/online.png')} size={24} />
            <Text style={{ fontFamily: "ManropeBold", }}>Order Completed</Text>
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
