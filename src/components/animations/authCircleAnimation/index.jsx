import { View } from 'react-native'
import React from 'react'
import { MotiView, Text } from '@motify/components'
import { globalStyles } from '../../../globalConstants/styles'


const SpreadingCircles = ({ bgColor = "", bottom }) => {
    return (
        <>
            {
                [...Array(3).keys()].map(index => (
                    <MotiView
                        from={{ opacity: .4, scale: 1, translateY: 10, translateX: index * 30 }}
                        animate={{ opacity: 0, scale: 3, translateY: 300 }}
                        transition={{
                            type: "timing",
                            duration: 5000,
                            delay: 400 * index,
                            loop: true,

                            // repeatReverse: false
                        }}
                        key={index}
                        style={{
                            width: 200,
                            height: 200,
                            borderRadius: 100,
                            backgroundColor: bgColor,
                            position: "absolute",
                            zIndex: -10,
                            justifyContent: "center",
                            alignItems: 'center'
                        }}
                    >

                    </MotiView>
                ))
            }
        </>
    )
}

export default SpreadingCircles