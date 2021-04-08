import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AccountScreen from './AccountScreen';


const navopts = () => ({
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
})

const Stack = createStackNavigator();
export default function AccountStack() {
    return (
        <Stack.Navigator initialRouteName="AccountScreen">
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={navopts} />
        </Stack.Navigator>
    )
}
