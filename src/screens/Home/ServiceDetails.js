import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import Appbar from '../../components/Appbar';


export default function ServiceDetails({ navigation, route }) {

    const { serviceId } = route.params;


    // BackHandler.addEventListener('hardwareBackPress', () => navigation.navigate('HomeScreen'))
    useEffect(() => {
        console.log(serviceId);
        const parent = navigation.dangerouslyGetParent();
        parent.setOptions({
            tabBarVisible: false
        });
        return () =>
            parent.setOptions({
                tabBarVisible: true
            });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.upsection}>
                <Appbar navigation={navigation} title="Denting and Painting" />
                <SafeAreaView>
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1, width: '100%' }}>
                            <Image
                                source={require('../../../assets/images/redpol.jpg')} resizeMode="contain" style={{ width: '100%' }}
                            />
                        </View>
                        <View style={styles.services}>
                            <Text style={styles.heading}>Our Services</Text>
                            <View style={styles.grid}>
                                <TouchableOpacity style={styles.griditem}>
                                    <Avatar.Image size={100} source={{ uri: 'https://pristinedentrepair.com/wp-content/uploads/2019/11/best-dent-repair-services-1080x675.jpg' }} />
                                    <Text style={styles.gridtext}>Dent removal</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.griditem}>
                                    <Avatar.Image size={100} source={{ uri: 'https://us.123rf.com/450wm/sydeen/sydeen1311/sydeen131100010/23871798-car-painting-at-conventional-garage.jpg?ver=6' }} />
                                    <Text style={styles.gridtext}>Painting</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.griditem}>
                                    <Avatar.Image size={100} source={{ uri: 'https://www.autoguide.com/blog/wp-content/uploads/2018/08/best-polishing-kits-for-yoru-car.jpg' }} />
                                    <Text style={styles.gridtext}>Polishing</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.griditem}>
                                    <Avatar.Image size={100} source={{ uri: 'https://www.autoguide.com/blog/wp-content/uploads/2018/08/best-polishing-kits-for-yoru-car.jpg' }} />
                                    <Text style={styles.gridtext}>Polishing</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.rates} onPress={() => navigation.navigate('RatePage')}>
                            <Image resizeMode="cover" source={require('../../../assets/images/rates.png')} style={{ width: 35, height: 35, backgroundColor: '#C7E3E5', borderRadius: 20 }} />
                            <Text style={{ fontFamily: 'ManropeBold', fontSize: 16, paddingHorizontal: 20 }}>See Denting and Painting Rates</Text>
                            <Icon name='arrow-forward-outline' size={20} style={{}} />
                        </TouchableOpacity>
                        <View style={styles.services}>
                            <Text style={styles.heading}>R Expert Repairs</Text>
                            <Text style={styles.subheading}>Learn more about denting and painting services</Text>
                            <ScrollView horizontal={true} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} >
                                <TouchableOpacity>
                                    <View style={styles.slideitem}>
                                        <Image
                                            source={{ uri: 'https://5.imimg.com/data5/GL/UN/MY-30977239/car-denting-and-painting-service-500x500.png' }} resizeMode="cover"
                                            style={{ width: '100%', height: 200 }}
                                        />
                                        <Text style={styles.chead}>Heading</Text>
                                        <Text style={styles.csubhead}>Sub Heading</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.slideitem}>
                                        <Image
                                            source={{ uri: 'https://5.imimg.com/data5/GL/UN/MY-30977239/car-denting-and-painting-service-500x500.png' }} resizeMode="cover" style={{ width: '100%', height: 200 }}
                                        />
                                        <Text style={styles.chead}>Heading</Text>
                                        <Text style={styles.csubhead}>Sub Heading</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={styles.slideitem}>
                                        <Image
                                            source={{ uri: 'https://5.imimg.com/data5/GL/UN/MY-30977239/car-denting-and-painting-service-500x500.png' }} resizeMode="cover" style={{ width: '100%', height: 200 }}
                                        />
                                        <Text style={styles.chead}>Heading</Text>
                                        <Text style={styles.csubhead}>If the subheading is too long it might take the next line . what will u do then</Text>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>

                        </View>

                        <View style={{ height: 80 }}>

                        </View>
                    </ScrollView>
                </SafeAreaView >

            </View >
            <View style={styles.bottombutton}>
                <TouchableOpacity style={styles.book} onPress={() => navigation.push('Assessment', { serviceId: serviceId })}>
                    <Text style={styles.text}>BOOK  AN  ASSESSMENT @ ₹ 99</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upsection: {
        flex: 8,

    },
    book: {
        backgroundColor: "#000",
        width: '100%',
        paddingVertical: 20,
        borderRadius: 5
    },
    bottombutton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    text: {
        color: "#fff",
        textAlign: 'center',
        fontFamily: "ManropeBold",
        letterSpacing: 2
    },
    header: {
        height: 64,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc'
    },
    services: {
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 10
    },
    heading: {
        paddingTop: 20,
        fontFamily: 'ManropeBold',
        fontSize: 20
    },
    grid: {
        flexDirection: 'row',
        // paddingHorizontal: 10,
        paddingVertical: 20,
        flexWrap: 'wrap'

    },
    griditem: {
        width: '33%',
        alignItems: 'center',
    },
    gridtext: {
        paddingVertical: 10,
        fontFamily: 'ManropeMedium',
        fontSize: 15
    },
    subheading: {
        paddingTop: 10,
        color: "gray"
    },
    slideitem: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        width: 300,

        marginRight: 15,
    },
    chead: {
        paddingLeft: 10,
        fontFamily: 'ManropeBold',
        paddingBottom: 10,
        fontSize: 18,
        paddingTop: 20
    },
    csubhead: {
        paddingLeft: 10,
        paddingBottom: 10,
        fontFamily: 'ManropeMedium',
        fontSize: 15,
        color: 'gray'
    },
    rates: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginBottom: 10
    }
});
