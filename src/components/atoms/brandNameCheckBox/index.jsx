import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Feather from 'react-native-vector-icons/Feather';
const BrandNameCheckBox = ({ brand }) => {
    const [selected, setSelected] = useState(false)
    return (
        <View style={styles.wholeWrapper}>
            <TouchableWithoutFeedback onPress={() => setSelected(prev => !prev)}>
                <View style={styles.nameCheckboxWrapper}>
                    <View style={styles.checkBox}>
                        {selected && <Feather name='check' size={15} color="green" />}
                    </View>
                    <Text style={styles.brandNameWrapper}>{brand.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default BrandNameCheckBox