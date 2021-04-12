import React from 'react'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Avatar } from 'react-native-paper';
import Appbar from '../../components/Appbar';

export default function Assessment({ navigation, route }) {
    const { serviceId } = route.params;
    return (
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
                    <View style={styles.steps}>
                        <View style={styles.stepitem}>
                            <Avatar.Image source={require('../../../assets/images/1.png')} size={30} />
                            <Text style={styles.steptext}>Book</Text>
                        </View>
                        <View style={styles.stepitem}>
                            <Avatar.Image source={require('../../../assets/images/2.png')} size={30} />
                            <Text style={styles.steptext}>Assessment</Text>
                        </View>
                        <View style={styles.stepitem}>
                            <Avatar.Image source={require('../../../assets/images/3.png')} size={30} />
                            <Text style={styles.steptext}>Order</Text>
                        </View>
                        <View style={styles.stepitem}>
                            <Avatar.Image source={require('../../../assets/images/4.png')} size={30} />
                            <Text style={styles.steptext}>Service</Text>
                        </View>
                    </View>
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
                <TouchableOpacity style={styles.buttonpay}>
                    <Text style={{ color: "#fff", fontFamily: "ManropeBold" }}>Proceed To Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        fontWeight: 'bold'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
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
    }
});
