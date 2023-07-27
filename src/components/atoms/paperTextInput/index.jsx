import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { globalStyles } from '../../../globalConstants/styles'

const TextInputPaper = (props) => {
    return (
        <TextInput
            style={{ backgroundColor: globalStyles.colors.miniPrimary, width: "100%", color: "#000" }}
            {...props}
            mode="outlined"
            outlineColor={globalStyles.colors.tertiary}
            selectionColor='blue'
            activeOutlineColor={globalStyles.colors.logoColor}
        />
    )
}

export default TextInputPaper