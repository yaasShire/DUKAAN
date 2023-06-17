import { View, Text, Modal, StyleSheet, Alert } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import styles from './style'
import { FAB } from 'react-native-paper'
import RBSheet from "react-native-raw-bottom-sheet";
import MapView, { Callout, Circle, Marker } from 'react-native-maps'
import { HeightDimension, WidthDimension } from '../../../../../../globalConstants/styles';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated';
import GeolocationMap from '../../../../../../components/molecules/geolocationMap';
import { setCoordinates } from '../../../../../../redux/shop';
import { useDispatch } from 'react-redux';
import { postData } from '../../../../../../hooks/usePost';
import ResponseModal from '../responseModal';
const EditGeolocation = ({ color, title, value, field, shopId, shop = {} }) => {
    const [detail, setDetail] = useState({ value, title, field })
    const [showModal, setShowModal] = useState(false)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showResponseModal, setShowResponseModal] = useState(false)
    const [responseMessage, setResponseMessage] = useState("")
    const dispatch = useDispatch()
    const [coordinate, setCoordinate] = useState({
        latitude: Number(shop?.latitude),
        longitude: Number(shop?.longitude),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const bottomSheet = useRef()

    const handleSaveLocation = async () => {
        const shopData = new FormData()
        shopData.append('USID', shopId)
        shopData.append('latitude', coordinate?.latitude)
        shopData.append('longitude', coordinate?.longitude)
        const { result } = await postData('seller/shop/update', shopData, setError, setIsLoading)
        if (result?.status == 'changed')
            setResponseMessage(result?.status)
        setShowResponseModal(true)
        setTimeout(() => {
            setShowResponseModal(false)

        }, 3000)
    }

    return (
        <>
            <View style={styles.card}>
                <View style={styles.verticalBar(color)} />
                <View style={styles.contentWrapper}>
                    <View>
                        <Text style={styles.title}>{detail?.title}</Text>
                    </View>
                    <FAB color='#fff' style={styles.fab} icon={'earth'} onPress={() => {
                        // setDetail({ title, value, field })
                        setShowModal(true)
                    }}
                    />
                </View>
            </View>
            <GeolocationMap coordinate={coordinate} setCoordinate={setCoordinate} showModal={showModal} setShowModal={setShowModal} handleSaveLocation={handleSaveLocation} />
            <ResponseModal responseMessage={responseMessage} showResponseModal={showResponseModal} setShowResponseModal={setShowResponseModal} />
        </>
    )
}

export default EditGeolocation