import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import axios from 'axios';
// import { CONSTANTS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeScreen from '../screens/Home/HomeScreen';
import HomeStack from '../screens/Home/HomeStack'
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VehicleStack from '../screens/Vehicles/VehicleStack';
import { CONSTANTS } from '../constants';
import OrderStack from '../screens/Orders/OrderStack';
import AccountStack from '../screens/Account/AccountStack';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';


// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();



export default function AppNav({ navigation }) {

    const [hascar, sethascar] = useState(false);
    const [isRendered, setrendered] = useState(false);
    const [userid, setuserid] = useState("");

    async function getuserid() {
        await AsyncStorage.getItem('uuid', (err, res) => {
            axios.post(CONSTANTS.BASE_URL + "/getvehicles", { uuid: res }).then((res) => {
                if (res.data.cars) {
                    // sethascar(true);
                    sethascar(true);
                    setTimeout(() => {
                        setrendered(true);
                    }, 1000);



                }
            })
        });
    }
    useEffect(() => {
        // console.log(CONSTANTS.BASE_URL);
        getuserid();
        // console.log("USER ID" + userid);


    }, [])
    return (
        <View style={{ flex: 1 }}>
            {
                isRendered ? <Tab.Navigator

                    backBehavior='none'
                    initialRouteName={hascar ? 'Home' : 'Vehicles'}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                            } else if (route.name === 'Orders') {
                                iconName = focused ? 'bookmark' : 'bookmark-outline';
                            } else if (route.name === 'Vehicles') {
                                iconName = focused ? 'car' : 'car-outline';
                            } else if (route.name === 'Orders') {
                                iconName = focused ? 'bookmark' : 'bookmark-outline';
                            }
                            return <Icon name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        fontFamily: 'ManropeBold',
                        activeBackgroundColor: '#FFDC3D',
                        activeTintColor: '#3e2465',
                        inactiveTintColor: 'gray',
                        labelStyle: {
                            fontSize: 12,
                            fontWeight: 'bold',
                            fontFamily: CONSTANTS.FONT_MEDIUM,
                            color: '#3e2465'
                        }
                    }}
                >
                    <Tab.Screen name="Home" component={HomeStack} />
                    <Tab.Screen name="Orders" component={OrderStack} />
                    <Tab.Screen name="Vehicles" component={VehicleStack} />
                    <Tab.Screen name="Account" component={AccountStack} options={{

                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="account-circle" size={25} color={color} options={() => ({
                                tabBarIcon: ({ color, focused, size }) => (
                                    <Icon name={focused ? 'account-circle' : 'account-circle-outline'} color={color} size={size} />
                                ),
                            })} />
                        ),
                    }} />

                </Tab.Navigator> : <Loader />
            }

        </View>
    )
}
