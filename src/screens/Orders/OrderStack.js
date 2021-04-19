import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import React from 'react'
import OrderDetails from './OrderDetails';
import Orderlist from './Orderlist';
import OrderScreen from './OrderScreen';

const navopts = () => ({
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
})

const Stack = createStackNavigator();
export default function OrderStack() {
    return (
        <Stack.Navigator initialRouteName="OrderScreen">
            <Stack.Screen name="OrderScreen" component={OrderScreen} options={navopts} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} options={navopts} />
            <Stack.Screen name="Orderlist" component={Orderlist} options={navopts} />
        </Stack.Navigator>
    )
}
