import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import SelectLocation from '../Header/SelectLocation';
import Assessment from './Assessment';
// import HeaderStack from '../Header/HeaderStack';
import HomeScreen from './HomeScreen';
import PaymentFailed from './PaymentFailed';
import PaymentSuccess from './PaymentSuccess';
import RatePage from './RatePage';
import ServiceDetails from './ServiceDetails';
const Stack = createStackNavigator();
export default function HomeStack() {
    const navopts = () => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    });
    const navoptsver = () => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    });
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={navopts} />
            <Stack.Screen name="SelectLocation" component={SelectLocation} options={navoptsver} />
            <Stack.Screen name="ServiceDetails" component={ServiceDetails} options={navopts} />
            <Stack.Screen name="RatePage" component={RatePage} options={navopts} />
            <Stack.Screen name="Assessment" component={Assessment} options={navopts} />
            <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} options={navopts} />
            <Stack.Screen name="PaymentFailed" component={PaymentFailed} options={navopts} />

        </Stack.Navigator>
    );

}
