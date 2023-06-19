import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Picker } from 'react-native-ui-lib/src/components/picker'
import { FlatList } from 'react-native-gesture-handler'
import styles from './style'
import { FAB } from 'react-native-paper'
import { fetchData } from '../../../hooks/useFetch'
import { postData } from '../../../hooks/usePost'
const UpdateProductCategory = ({ productDetail = {}, name = "", title = "", value = "", data = [] }) => {
    const [selectedId, setSelectedId] = useState(null)
    const [selectedName, setSelectedName] = useState()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const updateCategory = async () => {
        const productData = new FormData()
        productData.append('UPID', productDetail?.UPID)
        productData.append(name, Number(selectedId))
        const response = await postData('seller/products/update', productData, setError, setIsLoading)
    }
    return (
        <Picker
            style={styles.pickerContainer}
            label={title}
            labelStyle={styles.labelStyle}
            placeholder={selectedName || value}
        >
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Picker.Item
                        key={item?.name}
                        label={item?.name}
                        onPress={() => {
                            setSelectedId(item?.id)
                            setSelectedName(item?.name)
                            updateCategory()
                        }}
                    />
                )}
            />

        </Picker>
    )
}

export default UpdateProductCategory