import React, { useEffect } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-paper'
import Appbar from '../../components/Appbar'


export default function AddVehicle({ navigation }) {
    useEffect(() => {
        const parent = navigation.dangerouslyGetParent();
        parent.setOptions({
            tabBarVisible: false
        });
        return () =>
            parent.setOptions({
                tabBarVisible: true
            });
    }, []);
    const cars = [
        {
            id: "audi",
            name: "Audi",
            image: "https://rmechanic.herokuapp.com/assets/images/audi.jpg"
        },
        {
            id: "bmw",
            name: "BMW",
            image: "https://rmechanic.herokuapp.com/assets/images/bmw.jpg"
        },
        {
            id: "chevy",
            name: "Chevrolet",
            image: "https://rmechanic.herokuapp.com/assets/images/chevy.jpg"
        },
        {
            id: "fiat",
            name: "Fiat",
            image: "https://rmechanic.herokuapp.com/assets/images/fiat.jpg"
        },
        {
            id: "ford",
            name: "Ford",
            image: "https://rmechanic.herokuapp.com/assets/images/ford.jpg"
        },
        {
            id: "honda",
            name: "Honda",
            image: "https://rmechanic.herokuapp.com/assets/images/honda.jpg"
        },
        {
            id: "hyundai",
            name: "Hyundai",
            image: "https://rmechanic.herokuapp.com/assets/images/hyundai.jpg"
        },
        {
            id: "jeep",
            name: "Jeep",
            image: "https://rmechanic.herokuapp.com/assets/images/jeep.jpg"
        },
        {
            id: "kia",
            name: "Kia",
            image: "https://rmechanic.herokuapp.com/assets/images/kia.jpg"
        },
        {
            id: "mahindra",
            name: "Mahindra",
            image: "https://rmechanic.herokuapp.com/assets/images/mahindra.jpg"
        },
        {
            id: "mercedes",
            name: "Mercedes",
            image: "https://rmechanic.herokuapp.com/assets/images/mercedes.jpg"
        },
        {
            id: "mg",
            name: "MG",
            image: "https://rmechanic.herokuapp.com/assets/images/mg.jpg"
        },
        {
            id: "nissan",
            name: "Nissan",
            image: "https://rmechanic.herokuapp.com/assets/images/nissan.jpg"
        },
        {
            id: "renault",
            name: "Renault",
            image: "https://rmechanic.herokuapp.com/assets/images/renault.jpg"
        },
        {
            id: "skoda",
            name: "Skoda",
            image: "https://rmechanic.herokuapp.com/assets/images/skoda.jpg"
        },
        {
            id: "suzuki",
            name: "Suzuki",
            image: "https://rmechanic.herokuapp.com/assets/images/suzuki.jpg"
        },
        {
            id: "tata",
            name: "Tata",
            image: "https://rmechanic.herokuapp.com/assets/images/tata.jpg"
        },
        {
            id: "toyota",
            name: "Toyota",
            image: "https://rmechanic.herokuapp.com/assets/images/toyota.jpg"
        },
        {
            id: "volkswagen",
            name: "Volkswagen",
            image: "https://rmechanic.herokuapp.com/assets/images/volkswagen.jpg"
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <Appbar title="ADD YOUR VEHICLE" navigation={navigation} back={true} />
            <ScrollView style={{ flex: 1, margin: 5 }}>
                <Text style={{ fontFamily: "ManropeBold", fontSize: 18, padding: 10 }}>Select brand</Text>
                <View style={styles.grid}>
                    {
                        cars.map((item) => {
                            return (
                                <TouchableOpacity style={styles.griditem} onPress={() => navigation.push('AddModel', { carid: item.id })} key={item.id}>
                                    <Avatar.Image size={38} source={{ uri: item.image }} />
                                    <Text style={styles.text}>{item.name}</Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    grid: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: "#fff"
    },
    griditem: {
        width: '33%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', textAlign: 'center',
        borderWidth: 0.5,
        borderColor: "#eee",
        padding: 20,
        fontFamily: 'ManropeMedium'
    },
    text: {
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'ManropeBold',
        marginVertical: 10
    }
})