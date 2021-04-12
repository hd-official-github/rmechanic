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


// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();



export default function AppNav() {

    const [hascar, sethascar] = useState(false);

    useEffect(() => {
        // console.log(CONSTANTS.BASE_URL);
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
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

            </Tab.Navigator>
            {/* <Tab.Navigator initialRouteName={hascar ? 'Home' : 'Vehicles'} shifting={true}
                barStyle={{ display: 'none', backgroundColor: '#FFDC3D' }} activeColor="#2F2E41" inactiveColor="#3e2465" sceneAnimationEnabled={true} >

                <Tab.Screen name="Home" component={HomeStack} options={({ route }) => ({
                    tabBarVisible: false,
                    // tabBarVisible: showBottomNavigation(route),
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={25} />
                    ),

                })} />
                <Tab.Screen name="Orders" component={SettingsScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="bookmark" size={25} color={color} />
                    ),
                }} />
                <Tab.Screen name="Vehicles" component={SettingsScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="car" size={25} color={color} />
                    ),
                }} />
                <Tab.Screen name="Account" component={SettingsScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" size={25} color={color} />
                    ),

                }} />
            </Tab.Navigator> */}
        </View>
    )
}

// export function showBottomNavigation(route) {

//     const routeName = getFocusedRouteNameFromRoute(route);

//     switch (routeName) {
//         case 'ServiceDetails':
//             break;
//         default:
//             return false;
//     }


// }

