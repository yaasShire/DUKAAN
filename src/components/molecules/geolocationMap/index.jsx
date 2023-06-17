import { View, Text, Modal, StatusBar, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MapView, { Callout, Circle, Marker } from 'react-native-maps'
import styles from './style'
import { MotiView } from '@motify/components'
import { FAB } from 'react-native-paper'
import { Easing } from 'react-native-reanimated'
const GeolocationMap = ({ showModal = false, setShowModal = () => { }, coordinate = {}, setCoordinate = () => { }, handleSaveLocation = () => { } }) => {
    return (
        <Modal visible={showModal} animationType='slide'>
            <View style={styles.container}>
                <StatusBar hidden />
                <MapView
                    style={styles.mapStyle}
                    initialRegion={coordinate}
                    provider='google'
                    onPress={(e) => {
                        console.log(e.nativeEvent.coordinate)
                        setCoordinate({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
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
                        radius={500}
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
                            setShowModal(false)
                        }}
                    />
                </MotiView>
            </View>
        </Modal>
    )
}

export default GeolocationMap