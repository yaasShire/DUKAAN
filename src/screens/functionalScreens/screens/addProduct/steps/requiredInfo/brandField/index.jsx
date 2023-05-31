import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import styles from './style'
const BrandField = ({ label, list, handleChange, errors, name, value, setState, state, setRegion, setFieldTouched, brandsList }) => {
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(value)
    return (
        <View style={styles.container}>
            <List.Section title={label} style={{ borderRadius: 10 }} titleStyle={styles.title} >
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
            </List.Section>
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