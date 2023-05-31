import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { List } from 'react-native-paper'
import { HeightDimension, WindowDimension } from '../../../utils/utilityFunctions'
import { regions, states } from '../../../dataStore'
const SelectList = ({ label, list, handleChange, errors, name, value, setState, state, setRegion, setFieldTouched, regionsList, statesList }) => {
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(value)
    return (
        <View style={styles.container}>
            <List.Section title={label} style={{ marginTop: -10 }} titleStyle={styles.title} >
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
                    {(label == 'Region' ? regionsList : label == 'State' ? statesList : "").map(item => (
                        <List.Item key={item.id} title={item.name} onPress={() => {
                            setActive(item?.name)
                            setShow(prev => !prev)
                            handleChange(name)((item?.id).toString())
                        }} />
                    ))
                    }

                </List.Accordion>
            </List.Section>
            {
                (errors[name]) && (
                    <View style={styles.mainEroorWrapper}>
                        <Text style={styles.errorText}>{errors[name]}</Text>
                    </View>
                )

            }
        </View>

    )
}

export default SelectList