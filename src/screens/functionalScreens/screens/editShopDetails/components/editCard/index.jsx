import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { FAB } from 'react-native-paper'
import EditShopField from '../editShopField'
import ResponseModal from '../responseModal'
const EditShopCard = ({ color, title, value, field, shopId, region = {}, state = {} }) => {
    const [showModal, setShowModal] = useState(false)
    const [detail, setDetail] = useState({ value, title, field })
    return (
        <>
            <View style={styles.card}>
                <View style={styles.verticalBar(color)} />
                <View style={styles.contentWrapper}>
                    <View>
                        <Text style={styles.title}>{detail?.title}</Text>
                        <Text style={styles.value}>{detail?.value}</Text>
                    </View>
                    <FAB color='#fff' style={styles.fab} icon={'pen'} onPress={() => {
                        setShowModal(true)
                        setDetail({ title, value, field })
                    }} />
                </View>
            </View>
            <EditShopField setDetail={setDetail} shopId={shopId} detail={detail} title={title} value={value} field={field} showModal={showModal} setShowModal={setShowModal} />

        </>
    )
}

export default EditShopCard