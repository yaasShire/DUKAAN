import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { FAB } from 'react-native-paper'
import { nameShortner } from '../../../../../../utils/utilityFunctions'
import UpdateProductModalField from '../updateProductModalField'
import ResultModal from '../resultModal'
import UpdatePickerProduct from '../updatePickerProduct'
const UpdateProductCard = ({ color = "blue", keyboardType = "default", onPress = () => { }, label = "", value, category = {}, productId = "", fieldName = "", setIsLoading = () => { }, setError = () => { }, fetchTargetProduct = () => { } }) => {
    const [showModal, setShowModal] = useState(false)
    const [showResultModal, setShowResultModal] = useState(false)
    return (
        <View style={styles.card}>
            <View style={styles.verticalBar(color)} />
            <View style={styles.contentWrapper}>
                <View>
                    <Text style={styles.title}>{label}</Text>
                    <Text style={styles.value}>{nameShortner(value, 80)}</Text>
                </View>
                <FAB color='#fff' style={styles.fab} icon={'pen'} onPress={() => {
                    setShowModal(true)
                }} />
            </View>
            <UpdateProductModalField keyboardType={keyboardType} fetchTargetProduct={fetchTargetProduct} setError={setError} setIsLoading={setIsLoading} setShowResultModal={setShowResultModal} fieldName={fieldName} productId={productId} value={value} label={label} onPress={onPress} showModal={showModal} setShowModal={setShowModal} />
            {/* <UpdatePickerProduct /> */}
            <ResultModal setShowResultModal={setShowResultModal} showResultModal={showResultModal} />
        </View>
    )
}

export default UpdateProductCard