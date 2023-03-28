import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import AddProductField from '../../../../../components/atoms/addProductField'
const RequiredInfo = () => {
    return (
        <View style={styles.container}>
            <AddProductField label="Product Name" />
            <AddProductField label="Product id" />
            <AddProductField label="Brand" />
            <AddProductField label="Year of make" />

        </View>
    )
}

export default RequiredInfo