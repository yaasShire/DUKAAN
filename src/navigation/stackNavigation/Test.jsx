import { View, Text, Image } from 'react-native'
import React from 'react'
import { Carousel } from "react-native-ui-lib/src/components/carousel";
import { SafeAreaView } from 'react-native-safe-area-context';

const Test = () => {
    const IMAGES = [
        require('../../assets/product1.jpg'),
        require('../../assets/product2.jpg'),
        require('../../assets/product3.jpg'),
        require('../../assets/product4.jpg'),
    ]
    return (
        <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={{ height: 200 }}>
                <Carousel

                    showCounter={true}
                    pageControlPosition='over'
                    style={{ backgroundColor: "pink", height: 200, width: 300 }}>
                    {
                        IMAGES.map(image => (
                            <Image source={image} />
                        ))
                    }
                </Carousel>
            </View>
        </SafeAreaView>
    )
}

export default Test