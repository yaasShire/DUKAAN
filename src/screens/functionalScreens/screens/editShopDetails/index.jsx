import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import AppHeader from '../../../../components/molecules/header'
import { SafeAreaView } from 'react-native-safe-area-context'
import EditShopCard from './components/editCard'
import EditGeolocation from './components/editGeolocation'
import GeolocationPicker from './components/geolocationPicker'
import { fetchData } from '../../../../hooks/useFetch'
const EditShopDetails = ({ navigation, route }) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [states, setStates] = useState([])
    const [regions, setRegions] = useState([])
    const [selectedState, setSelectedState] = useState({})
    const [selectedRegion, setSelectedRegion] = useState({})

    useEffect(() => {
        const fetchStates = async () => {
            const { data } = await fetchData('global/states', setError, setIsLoading)
            if (data?.data?.length > 0) {
                setStates(data?.data)
            }
        }
        const fetchRegions = async () => {
            const { data } = await fetchData('global/regions', setError, setIsLoading)
            if (data?.data?.length > 0) {
                setRegions(data?.data)
            }
        }
        fetchRegions()
        fetchStates()
    }, [])
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <AppHeader navigation={navigation} backButton={true} title='Edit Shop' />
            <ScrollView contentContainerStyle={styles.editCardListWrapper}>
                <EditShopCard shopId={route?.params?.shop?.USID} title="Name" field="name" value={route?.params?.shop?.name} color="#4ce322" />
                <EditShopCard shopId={route?.params?.shop?.USID} title="Email" field="email" value={route?.params?.shop?.email} color="#560dd4" />
                <EditShopCard shopId={route?.params?.shop?.USID} title="Phone Number" field="phone_number" value={route?.params?.shop?.phone_number} color="#560dd4" />
                <GeolocationPicker list={regions} shopId={route?.params?.shop?.USID} title="Region" field="region" defaultLocation={route?.params?.shop?.region} value={route?.params?.shop?.region?.name} color="#ed0e55" />
                <GeolocationPicker list={states} shopId={route?.params?.shop?.USID} title="State" field="state" defaultLocation={route?.params?.shop?.state} value={route?.params?.shop?.state?.name} color="#08fce4" />
                <EditGeolocation shop={route?.params?.shop} shopId={route?.params?.shop?.USID} title="GeoLocation" field="GeoLocation" value={route?.params?.shop?.state?.name} color="#08fce4" />
            </ScrollView>
        </View>
    )
}

export default EditShopDetails