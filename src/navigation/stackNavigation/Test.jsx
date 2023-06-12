import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Carousel } from "react-native-ui-lib/src/components/carousel";
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from "react-native-maps";
const Test = () => {
    const [position, setPosition] = React.useState({
        latitude: 2.033841,
        longitude: 45.320304,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    return (
        <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
            <MapView
                style={styles.map}

                region={{
                    latitude: position.latitude,
                    longitude: position.longitude,
                    latitudeDelta: 0.0005,
                    longitudeDelta: 0.0005,
                }}
                onPress={(e) => {
                    setPosition({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    });
                }}
            >
                <Marker
                    coordinate={position}
                    title={"Located here"}
                    description={"This location co-ordinates will be recorded"}
                />
            </MapView>
        </SafeAreaView>
    )
}

export default Test

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get("window").width * 1,
        height: Dimensions.get("window").height * 0.8,
    },
});