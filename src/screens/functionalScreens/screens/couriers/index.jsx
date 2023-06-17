import { View, Button, Text, StatusBar, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import CourierCard from "../../../../components/molecules/courierCard";
import styles from './style'
import GlobalHeader from "../../../../components/molecules/globalHeader";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import kanye from '../../../../assets/kanye.jpg'
import musk from '../../../../assets/musk.jpg'
import justin from '../../../../assets/justin.jpg'
import person3 from '../../../../assets/person3.jpg'
import dwayne from '../../../../assets/dwayne.jpg'
import chris from '../../../../assets/chris.jpg'
import captan from '../../../../assets/captanAmerica.webp'
import AppHeader from "../../../../components/molecules/appHeader";
import { FlatList } from "react-native";
const Courier = ({ navigation }) => {
    const data = [
        {
            id: 1,
            name: "Kanye West",
            image: kanye,
            rating1: 4.9,
            rating2: 4.7,
            distance: 5
        },
        {
            id: 2,
            name: "Elon Musk",
            image: musk,
            rating1: 3.4,
            rating2: 5.0,
            distance: 3
        },
        {
            id: 3,
            name: "Justin Beiber",
            image: justin,
            rating1: 3.9,
            rating2: 4.8,
            distance: 9

        },
        {
            id: 4,
            name: "Jordan Melson",
            image: person3,
            rating1: 1.9,
            rating2: 2.7,
            distance: 4
        },
        {
            id: 5,
            name: "They Wayne Johson",
            image: dwayne,
            rating1: 4.9,
            rating2: 4.4,
            distance: 12
        },
        {
            id: 6,
            name: "Chris Hemsworth",
            image: chris,
            rating1: 3.9,
            rating2: 2.7,
            distance: 15
        },
        {
            id: 7,
            name: "Captain America",
            image: captan,
            rating1: 4.9,
            rating2: 1.7,
            distance: 9
        },
    ]
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <StatusBar barStyle={Platform.OS == 'android' ? 'light-content' : 'dark-content'} />
            <AppHeader title={"Nearest Couriers"} navigation={navigation} />

            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item?.id}
                contentContainerStyle={styles.couriersWrapper}
                renderItem={({ item }) => (
                    <CourierCard person={item} />
                )}
            />
        </View>
    );
}
export default Courier