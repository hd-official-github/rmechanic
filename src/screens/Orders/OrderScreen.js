import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Appbar from '../../components/Appbar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { CONSTANTS } from '../../constants';
import Orderitem from './components/Orderitem';
import Loader from '../../components/Loader'

import OrderCompleted from './components/OrderCompleted';


export default function OrderScreen({ navigation }) {
    const [orders, setOrders] = useState([]);
    const [pevorders, setPrevOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getorders(res) {
        axios.post(CONSTANTS.BASE_URL + "/getorders", { uuid: res }).then((res) => {
            console.log("ORD ", res.data.orders);
            console.log("PREV ORD ", res.data.prev_orders);
            setOrders(res.data.orders);
            setPrevOrders(res.data.prev_orders);
            setLoading(false);
        });
    }
    // const timer = (res) => setInterval(() => {
    //     console.log("TIMER");
    //     getorders(res)
    // }, 3000);

    useEffect(() => {

        AsyncStorage.getItem('uuid', (err, res) => {
            getorders(res);
            // timer(res);
        });

    }, [])

    return (
        <View>
            <Appbar title="ORDER HISTORY" navigation={navigation} />
            {
                loading ? <Loader /> :
                    <ScrollView scrollEventThrottle={16}>
                        <Text style={styles.heading}>Ongoing Orders</Text>
                        {

                            orders.length > 0 ? orders.map((res, index) => {
                                // console.log("RES ", res)
                                return <Orderitem navigation={navigation} res={res} key={index} />
                            }) : NoOrders("NO ONGOING ORDERS")


                        }
                        <Text style={styles.heading}>Previous Orders</Text>
                        {

                            pevorders.length > 0 ? pevorders.map((res, index) => {
                                return <OrderCompleted navigation={navigation} res={res} key={index} />
                            }) : NoOrders("NO PREVIOUS ORDERS")
                        }
                    </ScrollView>
            }

        </View >
    )
}
export function NoOrders(res) {
    return <View style={{ backgroundColor: "#fff", marginHorizontal: 10, paddingVertical: 10 }}>
        <Text style={{ color: "#000", fontFamily: "ManropeBold", textAlign: 'center' }}>{res}</Text>
    </View>;
}
const styles = StyleSheet.create({
    heading: {
        fontFamily: "ManropeBold", padding: 14, fontSize: 18
    }
})