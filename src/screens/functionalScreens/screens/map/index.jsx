import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location';
import { globalStyles } from '../../../../globalConstants/styles';
import { FAB } from 'react-native-paper';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { setCoordinates } from '../../../../redux/shop';
const Map = ({ route, navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const { coordinates } = useSelector(state => state.shopRegistration)
    console.log(coordinates.latitude)
    const dispatch = useDispatch()
    const [pin, setPin] = useState({
        latitude: 37.78825,
        longitude: -122.4324
    })
    const [coordinate, setCoordinate] = useState({
        latitude: coordinates?.latitude,
        longitude: coordinates?.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const handleSaveLocation = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <MapView
                key={"AIzaSyA47XXKuNkOS0Z6m0RdyKsRgw9ydRr35ww"}
                style={styles.mapStyle}
                initialRegion={coordinate}
                provider={PROVIDER_GOOGLE}
                onPress={(e) => {
                    console.log(e.nativeEvent.position.x)
                    dispatch(setCoordinates({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    }))
                    setCoordinate({
                        latitude: e.nativeEvent.coordinate.latitude,
                        longitude: e.nativeEvent.coordinate.longitude,
                    });
                }}
            >
                <Marker
                    coordinate={coordinate}
                    title={"Shop Location"}
                    description={"This location will stored as the shop location"}
                    pinColor="red"

                    onDragEnd={(e) => {
                        setCoordinate({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        })
                    }}
                >
                    <Callout>
                        <Text>Here is the shop</Text>
                    </Callout>
                </Marker>
                <Circle
                    center={coordinate}
                    radius={50}
                    strokeColor='red'
                    strokeWidth={10}
                />
            </MapView>
            <MotiView

                from={{ scale: .8, opacity: .5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "timing",
                    duration: 1000,
                    easing: Easing.out(Easing.ease),
                    loop: true
                }}

                style={[styles.fabWrapper, StyleSheet.absoluteFillObject]}>
                <FAB
                    style={[styles.fab]}
                    icon="plus"
                    color='#fff'
                    onPress={() => {
                        handleSaveLocation()
                    }}
                />
            </MotiView>
        </View>
    )
}

export default Map