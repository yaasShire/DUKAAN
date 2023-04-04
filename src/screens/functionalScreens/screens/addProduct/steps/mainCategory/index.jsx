import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
const MainCategory = ({ category, title, setCurrentPosition }) => {
    const mainCategory = useSelector((state) => state.productRegistration.mainCategory)
    const [showError, setShowError] = useState(false)
    const errorHandler = () => {
        if (!mainCategory.id) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 2000)

        } else {
            setCurrentPosition(prev => prev + 1)
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    showError && (
                        <View style={styles.errorHolder}>
                            <Text style={styles.textError}>Please select main category</Text>
                        </View>
                    )
                }
                <Text style={styles.textTitle}>{title}</Text>
                <View style={styles.categoriesHolder}>
                    <View>
                        {/* <ScrollView style={{}}> */}
                        {
                            category.map((category, index) => (
                                <SingleCategoryCard key={category.id} category={category}
                                    cat="mainCategory"
                                    finalObject={mainCategory}
                                />
                            ))
                        }
                        {/* </ScrollView> */}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.actionButtonHolder}>
                <AddProductActionButton label={"Next"} errorHandler={errorHandler} setCurrentPosition={setCurrentPosition} />
            </View>
        </View>
    )
}
export default MainCategory