import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import noRecordImage from '../../../../../../assets/images/notFound.png'
import RegistrationHeader from '../../components/registrationHeader'
import RecordCard from './components/recordCard'
import AddRecordButton from './components/addRecordBtn'
import RegisterRecordModal from './components/registerRecordModal'
import { useSelector } from 'react-redux'
import ProductRegistrationError from '../../../../../../components/atoms/productRegistrationError'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton'
const AddRecord = ({ setCurrentPosition }) => {
    const [show, setShow] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)
    const records = useSelector(state => state.productRegistration.productRecord)
    const [showError, setShowError] = useState(false)
    const errorHandler = (action) => {
        if (action == 'Prev') {
            setCurrentPosition(prev => prev - 1)
        }
        if (records?.length <= 0) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 2000)

        } else if (action == 'Next') {
            setCurrentPosition(prev => prev + 1)
        }
    }

    return (
        <View style={styles.container}>
            <RegistrationHeader title={"Add Product Record"} />
            {
                showError &&
                <ProductRegistrationError label='Please add record' />
            }
            {
                records?.length > 0 ? (
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollList} contentContainerStyle={{ alignItems: "center", rowGap: 10 }}>
                        {
                            records?.map((item, index) => (
                                <RecordCard index={index} key={new Date().toISOString() + Math.random() * 100} data={item} />
                            ))
                        }
                        <View style={{ width: "100%", alignItems: "flex-end" }}>
                            <AddRecordButton setShow={setShow} onPress={() => setShow(true)} />
                        </View>
                    </ScrollView>

                ) : <View style={{ flex: 1, justifyContent: "center", alignItems: "center", rowGap: 10 }}>
                    <Image source={noRecordImage} style={{ width: 200, height: 140 }} />
                    <Text>No record found add one.</Text>
                    <AddRecordButton setShow={setShow} onPress={() => setShow(true)} />
                </View>
            }
            <View style={{ alignItems: 'center', marginTop: "2%", flexDirection: "row", justifyContent: "space-between" }}>
                <AddProductActionButton errorHandler={errorHandler} action="Prev" label={"Prev"} />
                <AddProductActionButton errorHandler={errorHandler} action="Next" label={"Next"} setCurrentPosition={setCurrentPosition} />
            </View>
            <RegisterRecordModal setIsEmpty={setIsEmpty} show={show} setShow={setShow} />
        </View>
    )
}

export default AddRecord

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollList: {
        marginTop: 10
        // backgroundColor: "purple",
    },
    subListContainer: {
        alignItems: "center",
        borderRadius: 10
    }
})