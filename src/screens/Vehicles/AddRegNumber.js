import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Toast from 'react-native-toast-message';



import Appbar from '../../components/Appbar';
import { CONSTANTS } from '../../constants';

export default function AddRegNumber({ navigation, route }) {
    const { car, image, model } = route.params;
    const [reg, onChangeReg] = useState("");
    useEffect(() => {
        // console.log("REG ", reg);
    }, [])
    async function validateAndSubmit() {
        if (reg != '') {
            AsyncStorage.getItem('uuid', (err, result) => {
                const data = {
                    "car": car,
                    "image": image,
                    "model": model,
                    "user_id": result,
                    "reg": reg
                }
                axios.post(CONSTANTS.BASE_URL + "/submitvehicle", JSON.stringify(data))
                    .then(res => {
                        if (res.data.ok) {
                            navigation.popToTop();
                        }
                    })
                    .catch(err => console.log('error saving data ', err))
            });

        } else {
            Toaster('error', 'REGISTRATION NUMBER NOT FOUND', "Registration Number is Required");
        }
    }
    function Toaster(type, text1, text2) {
        Toast.show({
            type: type,
            text1: text1,
            text2: JSON.stringify(text2),
            position: 'bottom',
            visibilityTime: 4000,
            autoHide: true,
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <Appbar title="ADD REGISTRATION NUMBER" navigation={navigation} />
            <View style={styles.card}>
                <Text style={styles.label}>Car Brand: {car}</Text>
                <Text style={styles.label}>Car Model: {model}</Text>
                <Text style={styles.reg}>ADD REGISTRATION NUMBER</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(reg) => onChangeReg(reg)}
                    value={reg}
                    placeholder="Example TN-03-AB-1223"
                    autoFocus={true}
                />
                <TouchableOpacity onPress={() => validateAndSubmit()} style={{ padding: 20, backgroundColor: "#FFDC3D", alignItems: 'center' }}>
                    <Text style={styles.label}>SAVE AND CONTINUE</Text>
                </TouchableOpacity>
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View >
    )
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    label: {
        fontFamily: 'ManropeBold',
        fontSize: 14
    },
    reg: {
        marginTop: 20,
        fontFamily: 'ManropeBold'
    }
})
