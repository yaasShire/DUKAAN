import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import AddShopField from '../../../../../components/atoms/addShopField'
import AddShopButton from '../../../../../components/atoms/addShopButton'
import { Formik } from 'formik'
import { shopLocationValidation } from '../../../../../utils/validationSchema/shopLocationValidation'
import CancelButton from '../../../../../components/atoms/canelButton'
import { useDispatch } from 'react-redux'
import { setLocationData } from '../../../../../redux/shop'
import { List } from 'react-native-paper';
import SelectList from '../../../../../components/molecules/selectList'
import { states, regions } from '../../../../../dataStore'
import { fetchData } from '../../../../../hooks/useFetch'
import PickLocation from './components/pickLocation'
import Map from '../../../screens/map'
import * as Location from 'expo-location';
import { setCoordinates } from '../../../../../redux/shop'
import ProductRegistrationHeader from '../../components/productRegistrationHeader'

const PersonalInfo = ({ setcurrentPosition, navigation }) => {
    const [expanded, setExpanded] = React.useState(true);
    const [region, setRegion] = useState("")
    const [state, setState] = useState("")
    const [error, setError] = useState(null)
    const [regionsList, setRegionsList] = useState([])
    const [statesList, setStatesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showMap, setShowMap] = useState(false)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const handlePress = () => setExpanded(!expanded);
    const dispatch = useDispatch()
    const handleDataSubmit = (values) => {
        dispatch(setLocationData(values))
        setcurrentPosition(prev => prev + 1)
    }
    useEffect(() => {
        // states
        const fetchStates = async () => {
            const data = await fetchData('global/states/', setError, setIsLoading)
            setStatesList(data.data.data)

        }
        fetchStates()
        // regions
        const fetchRegions = async () => {
            const data = await fetchData('global/regions/', setError, setIsLoading)
            setRegionsList(data.data.data)
        }
        fetchRegions()

    }, [])

    const [coordinate, setCoordinate] = useState({
        latitude: 0,
        longitude: 0
    })

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            dispatch(setCoordinates({ latitude: location?.coords?.latitude, longitude: location?.coords?.longitude }))
            setCoordinate({
                latitude: location?.coords?.latitude,
                longitude: location?.coords?.longitude,
            })
        })();
    }, []);
    return (
        <View style={styles.container}>
            <ProductRegistrationHeader title="Enter Location Details" />
            <Formik
                initialValues={{ country: "", state: "", city: "", region: "", nearestLANMark: "" }}
                validationSchema={shopLocationValidation}
                onSubmit={(values) => handleDataSubmit(values)}
            >
                {
                    ({ values, errors, handleBlur, handleChange, handleSubmit, touched, setTouched, setFieldTouched }) => (
                        <ScrollView style={styles.fieldsHolder} showsVerticalScrollIndicator={false} contentContainerStyle={{ rowGap: 15 }}>
                            <AddShopField label={'Country'} name="country" values={values.country} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <AddShopField label={'City'} name="city" values={values.city} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <AddShopField label={'Nearest LAN Mark'} name="nearestLANMark" values={values.nearestLANMark} errors={errors} touched={touched} setTouched={setTouched} handleBlur={handleBlur} handleSubmit={handleSubmit} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <SelectList regionsList={regionsList} name="region" errors={errors} setRegion={setRegion} label={'Region'} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <SelectList statesList={statesList} onBlur name="state" errors={errors} setState={setState} label={'State'} handleChange={handleChange} setFieldTouched={setFieldTouched} />
                            <PickLocation coordinate={coordinate} navigation={navigation} setShowMap={setShowMap} />
                            <View style={styles.buttonHolder}>
                                <CancelButton disabled={false} handleSubmit={handleSubmit} label="Previous" setcurrentPosition={setcurrentPosition} />
                                <AddShopButton handleSubmit={() => handleSubmit(values)} label="Next" setcurrentPosition={setcurrentPosition} />
                            </View>
                        </ScrollView>
                    )
                }
            </Formik>
            {
                showMap && (
                    <Map />
                )
            }
        </View>
    )
}

export default PersonalInfo