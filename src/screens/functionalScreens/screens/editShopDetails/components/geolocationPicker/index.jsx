import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { FAB } from 'react-native-paper'
import { Picker } from "react-native-ui-lib/src/components/picker";
import { postData } from '../../../../../../hooks/usePost';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ResponseModal from '../responseModal';
const GeolocationPicker = ({ color, title, value, field, shopId, region = {}, state = {}, list = [], defaultLocation = {} }) => {
    const [selectedLocation, setSelectedLocation] = useState(defaultLocation)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showResponseModal, setShowResponseModal] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')
    const updateLocation = async () => {
        const shopData = new FormData()
        shopData.append('USID', shopId)
        shopData.append(field, selectedLocation?.id)
        const { result } = await postData('seller/shop/update', shopData, setError, setIsLoading)
        setResponseMessage(result?.status)
        if (result?.status == 'changed') {
            setShowResponseModal(true)
            setTimeout(() => {
                setShowResponseModal(false)
            }, 1000)
        }
    }
    return (
        <View style={styles.card}>
            <SafeAreaView />
            <View style={styles.verticalBar(color)} />
            <View style={styles.pickerButtonWrapper}>
                <Picker
                    containerStyle={styles.pickerStyle}
                    placeholder={selectedLocation?.name}
                    placeholderTextColor="#000"
                    shearchPlaceHolder={"Search"}
                    label={field}
                    labelStyle={styles.labelStyle}
                    enableModalBlur={false}
                    topBarProps={{ title: field }}
                >
                    {
                        list.map(item => (
                            <Picker.Item
                                key={item?.id}
                                label={item.name}
                                onChange={item => console.warn(item)}
                                onPress={() => {
                                    setSelectedLocation(item)
                                    updateLocation()
                                }}
                            />
                        ))
                    }
                </Picker>
                <Feather name='chevron-down' size={25} color={"gray"} style={{ position: "absolute", right: 14, zIndex: -10 }} />
            </View>
            <ResponseModal setShowResponseModal={setShowResponseModal} showResponseModal={showResponseModal} responseMessage={responseMessage} />
        </View>
    )
}

export default GeolocationPicker