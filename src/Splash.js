import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'

export default function Splash({ navigation }) {
    useEffect(() => {
        AsyncStorage.getItem('uuid').then((value) => {
            if (value) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }
        })
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')} />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDC3D',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
