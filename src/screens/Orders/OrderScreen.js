import React, { useState, useEffect } from 'react'
import { RefreshControl } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'
import Appbar from '../../components/Appbar'

export default function OrderScreen({ navigation }) {
    const [orders, setOrders] = useState([]);

    return (
        <View>
            <Appbar title="ORDER HISTORY" navigation={navigation} />
            <ScrollView scrollEventThrottle={16}
            // refreshControl={
            //     <RefreshControl
            //         onRefresh={ }
            //     />
            // }
            >
                <Text style={{ fontFamily: "ManropeBold", padding: 14, fontSize: 18 }}>Ongoing Orders</Text>
                <TouchableOpacity style={{ marginBottom: 10 }} onPress={() => navigation.push('OrderDetails')}>
                    <View style={styles.card}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Booking id #1332211</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar.Image source={require('../../../assets/images/progress.png')} size={24} />
                                <Text style={{ fontFamily: "ManropeBold", }}>Order In Progress</Text>
                            </View>

                        </View>
                        <View style={styles.right}>
                            <View style={styles.lv1}>
                                <Avatar.Image source={require('../../../assets/images/repair.png')} size={25} />
                                <Text style={styles.textright}>Denting and  Services</Text>
                            </View>
                            <View style={styles.lv2}>
                                <Avatar.Image source={require('../../../assets/images/audi.jpg')} size={25} />
                                <Text style={styles.textright}>Audi A3</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#ffdc3d', backgroundColor: "#fff", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                        <Text style={{ textAlign: 'center', paddingVertical: 13, fontFamily: "ManropeBold", color: "#000" }}>VIEW ORDER</Text>
                        <Icon name="angle-right" size={25} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 10 }}>
                    <View style={styles.card}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Booking id #1332211</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar.Image source={require('../../../assets/images/failed.png')} size={24} />
                                <Text style={{ fontFamily: "ManropeBold", }}>Order Failed </Text>
                            </View>

                        </View>
                        <View style={styles.right}>
                            <View style={styles.lv1}>
                                <Avatar.Image source={require('../../../assets/images/repair.png')} size={25} />
                                <Text style={styles.textright}>Denting and Painting Services</Text>
                            </View>
                            <View style={styles.lv2}>
                                <Avatar.Image source={require('../../../assets/images/audi.jpg')} size={25} />
                                <Text style={styles.textright}>Audi A3</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#ffdc3d', backgroundColor: "#fff", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                        <Text style={{ textAlign: 'center', paddingVertical: 13, fontFamily: "ManropeBold", color: "#000" }}>VIEW ORDER</Text>
                        <Icon name="angle-right" size={25} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 10 }}>
                    <View style={styles.card}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Booking id #1332211</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar.Image source={require('../../../assets/images/caution.png')} size={24} />
                                <Text style={{ fontFamily: "ManropeBold", }}>Ongoing Assessment</Text>
                            </View>

                        </View>
                        <View style={styles.right}>
                            <View style={styles.lv1}>
                                <Avatar.Image source={require('../../../assets/images/repair.png')} size={25} />
                                <Text style={styles.textright}>Denting and Painting Services</Text>
                            </View>
                            <View style={styles.lv2}>
                                <Avatar.Image source={require('../../../assets/images/audi.jpg')} size={25} />
                                <Text style={styles.textright}>Audi A3</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#ffdc3d', backgroundColor: "#fff", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                        <Text style={{ textAlign: 'center', paddingVertical: 13, fontFamily: "ManropeBold", color: "#000" }}>VIEW ORDER</Text>
                        <Icon name="angle-right" size={25} />
                    </View>
                </TouchableOpacity>
                <Text style={{ fontFamily: "ManropeBold", padding: 14, fontSize: 18 }}>Previous Orders</Text>
                <TouchableOpacity style={{ marginBottom: 10 }} >
                    <View style={styles.card}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Booking id #1332211</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar.Image source={require('../../../assets/images/online.png')} size={24} />
                                <Text style={{ fontFamily: "ManropeBold", }}>Order Completed</Text>
                            </View>

                        </View>
                        <View style={styles.right}>
                            <View style={styles.lv1}>
                                <Avatar.Image source={require('../../../assets/images/repair.png')} size={25} />
                                <Text style={styles.textright}>Denting and Painting Services</Text>
                            </View>
                            <View style={styles.lv2}>
                                <Avatar.Image source={require('../../../assets/images/audi.jpg')} size={25} />
                                <Text style={styles.textright}>Audi A3</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#000" }}>
                        <Text style={{ textAlign: 'center', paddingVertical: 13, fontFamily: "ManropeBold", color: "#fff" }}>VIEW ORDER HISTORY</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 10 }} >
                    <View style={styles.card}>
                        <View style={styles.left}>
                            <Text style={styles.title}>Booking id #1332211</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar.Image source={require('../../../assets/images/online.png')} size={24} />
                                <Text style={{ fontFamily: "ManropeBold", }}>Order Completed</Text>
                            </View>

                        </View>
                        <View style={styles.right}>
                            <View style={styles.lv1}>
                                <Avatar.Image source={require('../../../assets/images/repair.png')} size={25} />
                                <Text style={styles.textright}>Denting and Painting Services</Text>
                            </View>
                            <View style={styles.lv2}>
                                <Avatar.Image source={require('../../../assets/images/audi.jpg')} size={25} />
                                <Text style={styles.textright}>Audi A3</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#000" }}>
                        <Text style={{ textAlign: 'center', paddingVertical: 13, fontFamily: "ManropeBold", color: "#fff" }}>VIEW ORDER HISTORY</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View >
    )
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