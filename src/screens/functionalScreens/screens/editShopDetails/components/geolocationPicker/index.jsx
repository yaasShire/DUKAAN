import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { FAB } from 'react-native-paper'
import { Picker } from "react-native-ui-lib/src/components/picker";
import { postData } from '../../../../../../hooks/usePost';
const GeolocationPicker = ({ color, title, value, field, shopId, region = {}, state = {}, list = [], defaultLocation = {} }) => {
    const [selectedLocation, setSelectedLocation] = useState(defaultLocation)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const updateLocation = async () => {
        const shopData = new FormData()
        shopData.append('USID', shopId)
        shopData.append(field, selectedLocation?.id)
        const result = await postData('seller/shop/update', shopData, setError, setIsLoading)
        console.log(result)
    }
    return (
        <View style={styles.card}>
            <View style={styles.verticalBar(color)} />
            <View style={styles.pickerButtonWrapper}>
                <Picker
                    containerStyle={styles.pickerStyle}
                    placeholder={selectedLocation?.name}
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
                {/* <FAB color='#fff' style={styles.fab} icon={'pen'} onPress={() => {
                    setShowModal(true)
                    setDetail({ title, value, field })
                }} /> */}
            </View>
        </View>
    )
}

export default GeolocationPicker