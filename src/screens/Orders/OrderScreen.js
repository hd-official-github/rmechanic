import React from 'react'
import { View, Text } from 'react-native'
import Appbar from '../../components/Appbar'

export default function OrderScreen({ navigation }) {
    return (
        <View>
            <Appbar title="ORDER HISTORY" navigation={navigation} />
        </View>
    )
}
