import React from 'react'

import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native'
// import Swiper from 'react-native-swiper'
// const { width } = Dimensions.get('window')
export default function SwiperLayout() {
    return (
        <>
            <ScrollView horizontal={true} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 5 }}>
                <View style={styles.container}>
                    <Image style={styles.slide} source={require('../../assets/images/b1.jpg')} resizeMode="cover" />
                </View>
                <View style={styles.container}>
                    <Image style={styles.slide} source={require('../../assets/images/b2.jpg')} resizeMode="cover" />
                </View>
                <View style={styles.container}>
                    <Image style={styles.slide} source={require('../../assets/images/b3.jpg')} resizeMode="cover" />
                </View>
            </ScrollView >
        </>
    )
}
const styles = StyleSheet.create({
    slide: {

    },
    container: {
        paddingTop: 4,
        paddingHorizontal: 2
    }
})