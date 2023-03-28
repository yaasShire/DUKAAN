
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import product1 from '../../../assets/product1.jpg'
import product2 from '../../../assets/product2.jpg'
import product3 from '../../../assets/product3.jpg'
import product4 from '../../../assets/product4.jpg'
import product5 from '../../../assets/product7.jpg'
const ImageSlider = () => {
    const { width, height } = new Dimensions.get('screen')
    return (
        <View style={styles.container}>
            <Swiper
                // showsButtons={true}
                style={styles.wrapper}
                height={280}

                // onMomentumScrollEnd={(e, state, context) =>
                //     console.log('index:', state.index)

                // }
                dot={
                    <View
                        style={{
                            backgroundColor: '#FFFFFF',
                            width: 12,
                            height: 12,
                            borderRadius: 10,
                            marginLeft: 3,
                            marginRight: 10,
                            marginTop: 3,
                            marginBottom: 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#000000'
                        }}
                    />
                }
                activeDot={
                    <View
                        style={{
                            backgroundColor: '#000',
                            width: 12,
                            height: 12,
                            borderRadius: 10,
                            marginLeft: 3,
                            marginRight: 10,
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />
                }

                paginationStyle={{
                    bottom: 5,
                    left: '55%',
                    right: '45%',

                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: 'green',
                    flex: 1
                }}
                loop
            >

                <ProductImage image={product1} />
                <ProductImage image={product2} />
                <ProductImage image={product3} />


            </Swiper>
        </View>
    )
}

const ProductImage = ({ image }) => {
    return <View
        style={styles.slide}

    >
        <Image
            style={styles.image}
            source={image}
        />
    </View>
}

export default ImageSlider
const { width, height } = new Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 310,

    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center',
        paddingVertical: 10

    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        // width,
        width: "100%",
        resizeMode: 'stretch',
        width: "100%",
        height: "100%",


    }
})