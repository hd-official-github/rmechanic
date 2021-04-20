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
    const [loading, setLoading] = useState(true);

    async function getorders(res) {
        axios.post(CONSTANTS.BASE_URL + "/getorders", { uuid: res }).then((res) => {
            setOrders(res.data.orders);
            setLoading(false);
        });
    }

    useEffect(() => {
        AsyncStorage.getItem('uuid', (err, res) => {
            getorders(res);
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

                            orders.map((res, index) => {
                                // console.log("RES ", res)
                                return <Orderitem navigation={navigation} res={res} key={index} />
                            })
                        }

                        <Text style={styles.heading}>Previous Orders</Text>
                        <OrderCompleted navigation={navigation} />
                    </ScrollView>
            }

        </View >
    )
}
const styles = StyleSheet.create({
    heading: {
        fontFamily: "ManropeBold", padding: 14, fontSize: 18
    }
})