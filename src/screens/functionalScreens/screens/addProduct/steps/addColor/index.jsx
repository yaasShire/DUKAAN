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
                <View style={{
                    width: "100%",
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    borderColor: "gray",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Picker
                        style={{
                            // backgroundColor: "pink",
                            width: 330,
                            alignItems: "center"
                        }}
                        placeholder={selectedColor?.color || 'Pick color'}
                        placeholderTextColor={globalStyles.colors.tertiary}
                        // shearchPlaceHolder="Search"
                        // label={'Pick color'}
                        // labelStyle={{ fontWeight: "600", fontSize: 15, }}
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
                    <Feather name='chevron-down' size={30} color={globalStyles.colors.tertiary} style={{}} />
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