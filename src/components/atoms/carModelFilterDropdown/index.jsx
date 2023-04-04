import { View, Text, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
const CarModelFilterDropdown = ({ dropDown, selected, set }) => {
    const [showDropdownParts, setShowDropdownParts] = useState(false)
    return (
        <View style={{ padding: 10, }}>
            <TouchableWithoutFeedback onPress={() => {
                setShowDropdownParts(prev => !prev)
            }}>
                <View style={styles.dropDownInput}>
                    <Text style={styles.name}>{selected.name}</Text>
                    <Feather name={showDropdownParts ? 'chevron-up' : 'chevron-down'} size={23} color="gray" onPress={() => {
                        setShowDropdownParts(prev => !prev)
                    }} />
                </View>
            </TouchableWithoutFeedback>
            {
                showDropdownParts && (
                    <View style={styles.subCategoriesWrapper}>
                        {
                            dropDown.map(item => (
                                <TouchableOpacity key={item.id} style={[styles.subCategoryItem, selected.id == item.id ? styles.selectedSubCategoryItem : styles.subCategoryItem]} onPress={() => {
                                    set(item)
                                }} >
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>

                            ))
                        }
                    </View>
                )
            }
        </View>
    )
}

export default CarModelFilterDropdown