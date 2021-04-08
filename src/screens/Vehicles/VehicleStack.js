import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import AddModel from './AddModel';
import AddRegNumber from './AddRegNumber';
import AddVehicle from './AddVehicle';
import VehicleScreen from './VehicleScreen';

const Stack = createStackNavigator();
export default function VehicleStack() {
    const navopts = () => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    })
    return (
        <Stack.Navigator initialRouteName="VehicleScreen">
            <Stack.Screen name="VehicleScreen" component={VehicleScreen} options={navopts} />
            <Stack.Screen name="AddVehicle" component={AddVehicle} options={navopts} />
            <Stack.Screen name="AddModel" component={AddModel} options={navopts} />
            <Stack.Screen name="AddRegNumber" component={AddRegNumber} options={navopts} />
        </Stack.Navigator>
    );

}
