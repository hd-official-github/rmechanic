import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import React from 'react'
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
        </Stack.Navigator>
    )
}
