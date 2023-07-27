import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import styles from './style'
import { Picker } from 'react-native-ui-lib/src/components/picker'
const BrandField = ({ label, list = [], handleChange = () => { }, errors, name = "", value, setState, state, setRegion, brandsList, setFieldValue = () => { }, touched, setFieldTouched = () => { } }) => {
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(`Select ${name}`)
    // const [show, setShow] = useState(false)
    // const [active, setActive] = useState(`Select ${label}`)
    return (
        <View style={styles.container}>
            {/* <List.Section title={label} style={{ borderRadius: 10 }} titleStyle={styles.title} >
                <List.Accordion
                    onPress={() => {
                        setShow(prev => !prev)
                        setFieldTouched(name)
                    }
                    }
                    expanded={show}
                    style={styles.subWrapper}
                    title={active}
                >
                    {brandsList.map(item => (
                        <List.Item key={item.id} title={item.name} onPress={() => {
                            setActive(item?.name)
                            setShow(prev => !prev)
                            handleChange(name)((item?.id).toString())
                        }} />
                    ))
                    }

                </List.Accordion>
            </List.Section> */}
            <View>
                {(errors[name] && touched[name]) && (
                    <Text style={styles.errorText}>{errors[name]}*</Text>
                )
                }
            </View>
            <Picker
                style={styles.picker}
                placeholder={active}
                shearchPlaceHolder="Search"
                label={label}
                labelStyle={styles.labelStyle}
                enableModalBlur={false}
                topBarProps={{ title: label }}
            >
                <FlatList
                    data={brandsList}
                    contentContainerStyle={styles.listWrapper}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Picker.Item
                            key={item?.id}
                            label={item.name}
                            onPress={() => {
                                setActive(item?.name)
                                setShow(prev => !prev)
                                handleChange(name)((item?.id).toString())
                                setFieldTouched(name)
                                // }}

                            }}
                        />
                    )}
                />
            </Picker>
            {/* {
                (errors[name]) && (
                    <View style={styles.mainEroorWrapper}>
                        <Text style={styles.errorText}>{errors[name]}</Text>
                    </View>
                )

            } */}
        </View >
    )
}

export default BrandField