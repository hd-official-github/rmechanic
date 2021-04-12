import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper';

export default function Steps() {
    return (
        <View style={styles.steps}>
            <View style={styles.stepitem}>
                <Avatar.Image source={require('../../assets/images/1.png')} size={30} />
                <Text style={styles.steptext}>Book</Text>
            </View>
            <View style={styles.stepitem}>
                <Avatar.Image source={require('../../assets/images/2.png')} size={30} />
                <Text style={styles.steptext}>Assessment</Text>
            </View>
            <View style={styles.stepitem}>
                <Avatar.Image source={require('../../assets/images/3.png')} size={30} />
                <Text style={styles.steptext}>Order</Text>
            </View>
            <View style={styles.stepitem}>
                <Avatar.Image source={require('../../assets/images/4.png')} size={30} />
                <Text style={styles.steptext}>Service</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    steps: {
        backgroundColor: "#fff",
        padding: 5,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    stepitem: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '25%'
    },
    steptext: {
        fontFamily: 'ManropeMedium',
        fontSize: 11,
        textAlign: 'center',
        marginTop: 10
    },
});