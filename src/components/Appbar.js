import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Appbar({ navigation, title }) {
    // const navigation = useNavigation();

    return (
        <View style={styles.appbar}>
            <TouchableOpacity style={styles.back} onPress={() => navigation.pop()} ><Icon name="arrow-back" size={28} color="#2F2E41" /></TouchableOpacity>
            <Text style={{ fontFamily: 'ManropeBold' }}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    appbar: {
        height: 64,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc'

    },
    back: {
        paddingEnd: 10
    }
})