import React from 'react'
import { View, Text } from 'react-native'
import Appbar from '../../components/Appbar'

export default function AccountScreen({ navigation }) {
    return (
        <View>
            <Appbar title="ACCOUNT" navigation={navigation} />
        </View>
    )
}
