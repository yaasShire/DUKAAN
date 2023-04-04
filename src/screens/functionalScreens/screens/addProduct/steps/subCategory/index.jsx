import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
const SubCategory = ({ category, title, index, setCurrentPosition }) => {
    const subCategory = useSelector((state) => state.productRegistration.subCategory)
    const [showError, setShowError] = useState(false)
    const errorHandler = () => {
        if (!subCategory.id) {
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
            <ScrollView>
                {
                    showError && (
                        <View style={styles.errorHolder}>
                            <Text style={styles.textError}>Please select sub category</Text>
                        </View>
                    )
                }
                <Text style={styles.textTitle}>{title}</Text>
                <View style={styles.categoriesHolder}>
                    <View>
                        <ScrollView style={{}}>
                            {
                                category.map((category, index) => (
                                    <SingleCategoryCard key={category.id} category={category}
                                        cat="subCategory"
                                        finalObject={subCategory}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.actionButtonHolder}>
                <AddProductActionButton label={"Next"} errorHandler={errorHandler} setCurrentPosition={setCurrentPosition} />
            </View>
        </View>
    )
}

export default SubCategory