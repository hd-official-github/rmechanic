import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Linking, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import StarRating from 'react-native-star-rating';

import { View, Text, ScrollView } from 'react-native'
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Appbar from '../../components/Appbar'
import Loader from '../../components/Loader';
import { CONSTANTS } from '../../constants';

export default function OrderDetails({ navigation, route }) {
    var num;
    const { billing_id } = route.params;
    const [data, setData] = useState({});
    const [img, setImg] = useState({});
    const [loading, setLoading] = useState(true);
    const [giveStar, setGivestar] = useState(true);
    async function getorderdetails() {

        axios.post(CONSTANTS.BASE_URL + "/orderdetails", { billing_id: billing_id })
            .then(res => {
                setData(res.data.orderdetails[0]);
                setImg(res.data.img);
                num = res.data.orderdetails[0].order_status;
                // console.log("NUM:", num);
                setLoading(false)

            })
            .catch(err => {

            });
    }
    function getstarrating() {
        axios.post(CONSTANTS.BASE_URL + "/getrating", { billing_id: billing_id }).then((res) => {
            if (res.data.rating)
                setGivestar(false);
            // console.log("GET RATING ", res.data);
        });
    }
    function callHelpline() {
        let phoneNumber = "7992323986";
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phoneNumber}`;
        }
        else {
            phoneNumber = `tel:${phoneNumber}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Phone number is not available');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getstarrating();
        getorderdetails();
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
            <Appbar title="Order Details" navigation={navigation} back={true} />
            {
                loading ? <Loader /> :

                    <ScrollView scrollEventThrottle={16}>
                        <View style={styles.card}>
                            <View style={styles.header}>
                                <Text style={styles.title}>Booking Id #{data.billing_id}</Text>
                            </View>
                            <View style={styles.item}>
                                <Avatar.Image source={{ uri: CONSTANTS.IMG_URL + img.service_img }} size={25} />
                                <Text style={styles.subtext}>{data.service_name}</Text>
                            </View>
                            <View style={styles.item}>
                                <Avatar.Image source={{ uri: img.car_img }} size={25} />
                                <Text style={styles.subtext}>{data.car_name}</Text>
                            </View>
                        </View>


                        <ServiceOrder num={data.order_status} navigation={navigation} />
                        <View style={styles.card}>
                            <View style={styles.header}>
                                <Text style={styles.title}>Order Status</Text>

                                <OrderText num={data.order_status} navigation={navigation} />

                            </View>

                            <OrderStatus num={data.order_status} navigation={navigation} billing_id={billing_id} star={giveStar} />
                        </View>

                    </ScrollView>

            }

            <View style={{ backgroundColor: "#fff", flexDirection: 'row', paddingVertical: 12 }}>
                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => callHelpline()}
                        style={{ backgroundColor: "#f3f3f3", borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4, flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image source={require('../../../assets/images/support.png')} size={42} />
                        <Text style={{ color: "#000", padding: 4, fontFamily: "ManropeBold" }}>Call HelpLine</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>

                    <OrderButton num={data.order_status} navigation={navigation} />
                </View>
            </View>
        </View >
    )
}
export function ServiceOrder({ navigation, num }) {
    if (num == '3' || num == '4') {
        return (
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
                    <TouchableOpacity style={{ backgroundColor: "#000", borderRadius: 10 }} onPress={() => navigation.push('Orderlist')}>
                        <Text style={{ color: "#fff", paddingHorizontal: 15, paddingVertical: 12, fontFamily: "ManropeBold" }}>View Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else {
        return null;
    }
}
export function OrderText({ navigation, num }) {
    switch (num) {
        case "1": return <Text style={{ color: "#ffdc3d", marginTop: 10 }}>Processing</Text>
        case "2": return <Text style={{ color: 'green', marginTop: 10, fontFamily: "ManropeBold" }}>Mechanic Assigned</Text>

        case "3": return <Text style={{ color: 'green', marginTop: 10, fontFamily: "ManropeBold" }}>Assessment</Text>
        case "4": return <Text style={{ color: 'green', marginTop: 10, fontFamily: "ManropeBold" }}>Servicing </Text>
        case "5": return <Text style={{ color: 'green', marginTop: 10, fontFamily: "ManropeBold" }}>Delivered </Text>
        default: return <Text style={{ color: "#ffdc3d", marginTop: 10 }}>Processing Failed</Text>


    }
}
export function OrderStatus({ navigation, num, billing_id, star }) {
    const [starCount, setStarCount] = useState(0);
    const [feedback, setFeedback] = useState(false);
    const [giveStar, setGivestar] = useState(star);


    function setRating(rating) {
        setStarCount(rating);
        axios.post(CONSTANTS.BASE_URL + "/rating", { rating: rating, billing_id: billing_id }).then((res) => {
            setFeedback(true);
            // console.log("SET RATING ", res.data);
            setTimeout(() => {
                setGivestar(false);
            }, 2000);

        });
    }

    switch (num) {
        case "1": return <View style={styles.item}>
            <Avatar.Image source={require('../../../assets/images/progress.png')} size={25} />
            <Text style={styles.subtext}>Order Is Placed and waiting to be picked up. You will be notified as soon a mechanic is assigned</Text>
        </View>
        case "2": return <View style={styles.assigned}>
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

        case "3": return <View style={{ marginBottom: 50 }}>
            <View style={styles.assigned}>
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: 'https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg' }} style={{ width: 60, height: 50, borderRadius: 12 }} resizeMode="cover" />
                </View>
                <View style={{ paddingLeft: 20, flex: 2 }}>
                    <Text style={{ fontFamily: "ManropeBold", marginBottom: 5 }}>Chris Morris</Text>
                    <Text style={{ fontFamily: "ManropeMedium" }}>5 Spring Motors</Text>

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
        </View>
        case "4": return <View style={styles.assigned}>
            <View style={{ flex: 1 }}>
                <Image source={{ uri: 'https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg' }} style={{ width: 60, height: 50, borderRadius: 12 }} resizeMode="cover" />
            </View>
            <View style={{ paddingLeft: 20, flex: 2 }}>
                <Text style={{ fontFamily: "ManropeBold", marginBottom: 5 }}>Chris Morris</Text>
                <Text style={{ fontFamily: "ManropeMedium" }}>5 Spring Motors</Text>
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
        case "5": return <View>
            <View style={styles.assigned}>
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: 'https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg' }} style={{ width: 60, height: 50, borderRadius: 12 }} resizeMode="cover" />
                </View>
                <View style={{ paddingLeft: 20, flex: 2 }}>
                    <Text style={{ fontFamily: "ManropeBold", marginBottom: 5 }}>Chris Morris</Text>
                    <Text style={{ fontFamily: "ManropeMedium" }}>5 Spring Motors</Text>
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
            {
                giveStar ? <View style={{ paddingVertical: 30 }}>
                    <Text style={{ fontFamily: "ManropeBold", marginBottom: 20 }}>Rate your experience</Text>
                    <View>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={starCount}
                            selectedStar={(rating) => setRating(rating)}
                        />
                    </View>
                    {feedback ? <Text style={{ textAlign: 'center', fontFamily: "ManropeMedium", marginVertical: 20, color: "green" }}>Thanks for your feedback</Text> : null}
                </View> : null
            }
        </View>
    }
}
export function OrderButton({ navigation, num }) {
    switch (num) {
        case "3": return <TouchableOpacity style={{ backgroundColor: "#000", borderRadius: 12, paddingHorizontal: 10, paddingVertical: 8 }}>
            <Text style={{ color: "#fff", padding: 4, fontFamily: "ManropeBold" }}>Place Order Now</Text>
        </TouchableOpacity>
        case "4": return <Text style={{ color: "#000", padding: 4, fontFamily: "ManropeBold" }}>Delievery Expected on 21st June</Text>
        default: return null;
    }
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