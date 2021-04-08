import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Appbar from '../../components/Appbar';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { ScrollView } from 'react-native';


export default function RatePage({ navigation }) {
    const [icon, seticon] = useState("angle-up");
    return (

        <View style={{ flex: 1 }}>
            <View style={{ flex: 8 }}>
                <Appbar navigation={navigation} title="Rate Chart" />
                <ScrollView scrollEventThrottle={16}>
                    <Collapse isExpanded={true} onToggle={(isExpanded) => {
                        isExpanded ? seticon("angle-up") : seticon('angle-down')
                    }}>
                        <CollapseHeader >
                            <View style={styles.accordion}>
                                <Text style={styles.text}>Denting Prices</Text>
                                <Icon name={icon} size={28} />
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={styles.dataholder}>
                                <View style={styles.item}>
                                    <Text style={styles.itemtext}>DESCRIPTION</Text>
                                    <Text style={styles.itemtext}>PRICE</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.itemtext}>Full Body Dent Paint</Text>
                                    <Text style={styles.itemtext}>₹ 23,000</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.itemtext}>Front and Side Bumpers</Text>
                                    <Text style={styles.itemtext}>₹ 2,000</Text>
                                </View>
                            </View>
                        </CollapseBody>
                    </Collapse>
                    <Collapse isExpanded={true} onToggle={(isExpanded) => {
                        isExpanded ? seticon("angle-up") : seticon('angle-down')
                    }}>
                        <CollapseHeader >
                            <View style={styles.accordion}>
                                <Text style={styles.text}>Denting Prices</Text>
                                <Icon name={icon} size={28} />
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={styles.dataholder}>
                                <View style={styles.item}>
                                    <Text style={styles.itemtext}>DESCRIPTION</Text>
                                    <Text style={styles.itemtext}>PRICE</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.itemtext}>Full Body Dent Paint</Text>
                                    <Text style={styles.itemtext}>₹ 23,000</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.itemtext}>Front and Side Bumpers</Text>
                                    <Text style={styles.itemtext}>₹ 2,000</Text>
                                </View>
                            </View>
                        </CollapseBody>
                    </Collapse>
                    <Collapse isExpanded={true} onToggle={(isExpanded) => {
                        isExpanded ? seticon("angle-up") : seticon('angle-down')
                    }}>
                        <CollapseHeader >
                            <View style={styles.accordion}>
                                <Text style={styles.text}>Denting Prices</Text>
                                <Icon name={icon} size={28} />
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={styles.dataholder}>
                                <View style={styles.item}>
                                    <Text style={styles.itemtext}>DESCRIPTION</Text>
                                    <Text style={styles.itemtext}>PRICE</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.itemtext}>Full Body Dent Paint</Text>
                                    <Text style={styles.itemtext}>₹ 23,000</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text style={styles.itemtext}>Front and Side Bumpers</Text>
                                    <Text style={styles.itemtext}>₹ 2,000</Text>
                                </View>
                            </View>
                        </CollapseBody>
                    </Collapse>
                </ScrollView>
            </View>
            <View style={styles.bottombutton}>
                <TouchableOpacity style={styles.book}><Text style={styles.textb}>BOOK  AN  ASSESSMENT @ ₹ 99</Text></TouchableOpacity>
            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    accordion: {
        backgroundColor: "#FFDC3D", height: 64, marginHorizontal: 10, justifyContent: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingRight: 20
    },
    text: {
        paddingHorizontal: 10, fontFamily: "ManropeBold"
    },
    dataholder: {
        paddingHorizontal: 10, fontFamily: "ManropeBold", backgroundColor: "#fff"
    },
    item: { paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#eee', borderBottomWidth: 1 },
    itemtext: {
        fontFamily: "ManropeBold"
    },
    bottombutton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: "#fff",
    },
    book: {
        backgroundColor: "#000",
        width: '100%',
        paddingVertical: 20,
        borderRadius: 5
    },
    textb: {
        color: "#fff",
        textAlign: 'center',
        fontFamily: "ManropeBold",
        letterSpacing: 2
    },

})