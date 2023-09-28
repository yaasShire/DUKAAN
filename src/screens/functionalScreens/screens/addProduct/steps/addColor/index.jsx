import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import RegistrationHeader from '../../components/registrationHeader'
import { Picker } from "react-native-ui-lib/src/components/picker";
import { globalStyles } from '../../../../../../globalConstants/styles';
import { Feather } from '@expo/vector-icons';
import { fetchData } from '../../../../../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { setProductColor } from '../../../../../../redux/products';
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
import ProductRegistrationError from '../../../../../../components/atoms/productRegistrationError';
import styles from './style'
const AddColor = ({ setCurrentPosition }) => {
    const currentColor = useSelector(state => state.productRegistration.productColor)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [colors, setColors] = useState([])
    const [selectedColor, setSelectedColor] = useState(currentColor || 'Pick Color from the list')
    const [showError, setShowError] = useState(false)
    const dispatch = useDispatch()
    const fetchColors = async () => {
        const { data } = await fetchData('seller/color/view', setError, setIsLoading)
        setColors(data?.data)
    }
    useEffect(() => {
        fetchColors()
    }, [])

    const errorHandler = (action) => {
        if (action == 'Prev') {
            setCurrentPosition(prev => prev - 1)
        }
        if (!currentColor) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 2000)

        } else if (action == 'Next') {
            setCurrentPosition(prev => prev + 1)
        }
    }


    return (
        <View style={{ flex: 1, }}>
            <RegistrationHeader title="Pick Color" />
            {
                showError && (
                    <ProductRegistrationError label='Please pick color' />
                )
            }
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={styles.pickerButtonWrapper}>
                    <View style={styles.verticalBar("green")} />
                    <Picker
                        containerStyle={styles.pickerStyle}
                        placeholder={selectedColor?.color || 'Pick color'}
                        placeholderTextColor={globalStyles.colors.tertiary}
                        shearchPlaceHolder={"Search"}
                        // label={"label"}
                        labelStyle={styles.labelStyle}
                        enableModalBlur={false}
                        topBarProps={{ title: 'Pick color' }}
                    >
                        <FlatList
                            data={colors}
                            // contentContainerStyle={styles.listWrapper}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <Picker.Item
                                    key={item?.id}
                                    label={item.color}
                                    onPress={() => {
                                        setSelectedColor(item)
                                        dispatch(setProductColor(item))
                                    }}
                                />
                            )}
                        />

                    </Picker>
                    <Feather name='chevron-down' size={25} color={"gray"} style={{ position: "absolute", right: 14, zIndex: -10, top: 15 }} />
                </View>
                <View style={{ alignItems: 'center', marginTop: "2%", flexDirection: "row", justifyContent: "space-between" }}>
                    <AddProductActionButton errorHandler={errorHandler} action="Prev" label={"Prev"} />
                    <AddProductActionButton errorHandler={errorHandler} action="Next" label={"Next"} setCurrentPosition={setCurrentPosition} />
                </View>
            </View>
        </View>
    )
}

export default AddColor