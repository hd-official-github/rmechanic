import React from 'react'
import { StyleSheet } from 'react-native'

import { View, Text, SafeAreaView } from 'react-native'

export default function PaymentFailed() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.section}>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    section: {
        backgroundColor: '#FFDC3D'
    }
})