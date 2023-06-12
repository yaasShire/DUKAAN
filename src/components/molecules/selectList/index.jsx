import { View, Text, ScrollView, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import { List } from 'react-native-paper'
import { HeightDimension, WindowDimension } from '../../../utils/utilityFunctions'
import { regions, states } from '../../../dataStore'
import { globalStyles } from '../../../globalConstants/styles'
import { Picker } from "react-native-ui-lib/src/components/picker";
import { FlatList } from 'react-native-gesture-handler'
const SelectList = ({ label, list, handleChange, errors, name, value, setState, state, setRegion, setFieldTouched, regionsList, statesList }) => {
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(`Select ${label}`)

    return (
        <>
            <Picker
                style={styles.container}
                placeholder={active}
                shearchPlaceHolder="Search"
                label={label}
                labelStyle={styles.labelStyle}
                enableModalBlur={false}
                topBarProps={{ title: label }}
            >
                <FlatList
                    data={label == 'Region' ? regionsList : label == 'State' ? statesList : ""}
                    contentContainerStyle={styles.listWrapper}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Picker.Item
                            key={item?.id}
                            label={item.name}
                            onChange={item => console.warn(item)}
                            onPress={() => {
                                setActive(item?.name)
                                setShow(prev => !prev)
                                handleChange(name)((item?.id).toString())
                                // onBlur={() => {
                                // handleBlur(name)
                                setFieldTouched(name)
                                // }}

                            }}
                        />
                    )}
                />
            </Picker>
            {
                (errors[name]) && (
                    <View style={styles.mainErrorHolder}>
                        <View style={styles.errorHolder}>
                            <Text style={{ color: "red" }}>{errors[name]}</Text>
                        </View>
                    </View>
                )
            }
        </>
    )
}

export default SelectList