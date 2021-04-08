import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'
import Appbar from '../../components/Appbar'

export default function VehicleScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Appbar title="MY VEHICLES" navigation={navigation} />
            <ScrollView scrollEventThrottle={16}>
                <View style={styles.card}>
                    <View style={styles.cheader}>
                        <View>
                            <Avatar.Image size={38} source={require('../../../assets/images/mg.jpg')} />

                        </View>

                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontFamily: 'ManropeBold', fontSize: 14 }}>Suzuki Baleno</Text>
                            <Text>KA-03-FA-1222</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={{ paddingVertical: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', marginVertical: 15, marginHorizontal: 20 }} onPress={() => navigation.push('AddVehicle')}>
                <Text style={{ color: "#fff", fontWeight: 'bold', fontFamily: 'ManropeBold', letterSpacing: 6 }}>ADD A VEHICLE</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 1,
        marginHorizontal: 10
    },
    cheader: {
        flexDirection: 'row'
    }
});
