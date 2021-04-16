import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

import { View, Text, ScrollView } from 'react-native'
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Appbar from '../../components/Appbar'

export default function OrderDetails({ navigation }) {
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
    return (
        <View style={{ flex: 1 }}>
            <Appbar title="Order Details" navigation={navigation} />
            <ScrollView scrollEventThrottle={16}>
                <View style={styles.card}>
                    <View style={styles.header}>

                        <Text style={styles.title}>Booking Id #112211</Text>
                    </View>
                    <View style={styles.item}>
                        <Avatar.Image source={require('../../../assets/images/repair.png')} size={25} />
                        <Text style={styles.subtext}>Denting And Painting Service</Text>
                    </View>
                    <View style={styles.item}>
                        <Avatar.Image source={require('../../../assets/images/audi.jpg')} size={25} />
                        <Text style={styles.subtext}>Audi A3</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Service Order</Text>
                        <Text style={{ fontFamily: "ManropeMedium", color: "#000" }}>You order list is as follows</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Avatar.Image source={require('../../../assets/images/invoice.png')} size={55} />
                        <View>
                            <Text style={{ fontFamily: "ManropeMedium" }}>11 Items</Text>
                            <Text style={{ fontFamily: "ManropeBold" }}>₹ 299.00</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: "#000", borderRadius: 12 }}>
                            <Text style={{ color: "#fff", padding: 15, fontFamily: "ManropeBold" }}>View Details</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.card}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Order Status</Text>
                        {/* <Text style={{ color: "#ffdc3d", marginTop: 10 }}>Processing</Text> */}
                        {/* <Text style={{ color: 'green', marginTop: 10, fontFamily: "ManropeBold" }}>Mechanic Assigned</Text> */}
                        <Text style={{ color: 'green', marginTop: 10, fontFamily: "ManropeBold" }}>Waiting for Order Placement</Text>
                    </View>
                    {/* PLACED */}
                    {/* <View style={styles.item}>
                        <Avatar.Image source={require('../../../assets/images/progress.png')} size={25} />
                        <Text style={styles.subtext}>Order Is Placed and waiting to be picked up. You will be notified as soon a mechanic is assigned</Text>
                    </View> */}
                    {/* ASSIGNED */}

                    <View style={styles.assigned}>
                        <View style={{ flex: 1 }}>
                            <Image source={{ uri: 'https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg' }} style={{ width: 60, height: 50, borderRadius: 12 }} resizeMode="cover" />
                        </View>
                        <View style={{ paddingLeft: 20, flex: 2 }}>
                            <Text style={{ fontFamily: "ManropeBold", marginBottom: 5 }}>Chris Morris</Text>
                            <Text style={{ fontFamily: "ManropeMedium" }}>5 Spring Motors</Text>
                            <Text style={{ fontFamily: "ManropeMedium" }}>Arriving on Monday 14th at 20:30</Text>
                        </View>
                        <View style={{ flexDirection: 'column', flex: 2, paddingLeft: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../../assets/images/star.png')} style={{ width: 40, height: 40 }} />
                                <Text style={{ fontFamily: "ManropeBold" }}>Rating 4.5/5</Text>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, backgroundColor: "#000", justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                                <Icon name="call" size={20} color="#fff" /><Text style={{ color: "#fff", fontFamily: "ManropeBold", paddingLeft: 10 }}>Call</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                    <Text style={{ fontFamily: "ManropeBold", marginTop: 20 }}>OTP :  2423</Text>
                    {/* ASSESSMENT PAYMENT */}
                </View>

            </ScrollView>
            <View style={{ backgroundColor: "#fff", flexDirection: 'row', paddingVertical: 12 }}>
                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: "#ccc", borderRadius: 12, paddingHorizontal: 15, paddingVertical: 8 }}>
                        <Text style={{ color: "#000", padding: 4, fontFamily: "ManropeBold" }}>Call HelpLine</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: "#000", borderRadius: 12, paddingHorizontal: 10, paddingVertical: 8 }}>
                        <Text style={{ color: "#fff", padding: 10, fontFamily: "ManropeBold" }}>Place Order Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginBottom: 5
    },
    title: {
        fontFamily: "ManropeBold",
        // paddingLeft: 10,
        fontSize: 16
    },
    subtext: {
        paddingLeft: 10,
        fontFamily: "ManropeMedium",
        fontSize: 14
    },
    item: {
        flexDirection: 'row', alignItems: 'center', marginTop: 5
    },
    header: {
        flexDirection: 'column', marginBottom: 20
    },
    assigned: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'

    }
})