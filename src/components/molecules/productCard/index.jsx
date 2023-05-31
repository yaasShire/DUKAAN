import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
import product1 from '../../../assets/product3.jpg'
import Entypo from 'react-native-vector-icons/Entypo';
import { FAB } from 'react-native-paper';
import productImagePlaceHolder from '../../../assets/images/productImagePlaceHolder.jpg'
const ProductCard = ({ item, navigation }) => {
    const nameShortener = (name) => {
        return name.length >= 28 ? name.slice(0, 30) + "..." : name
    }
    return (
        <View style={styles.mainHolder}>
            <View style={styles.contentHolder}>
                <Image source={item?.photo ? { uri: "https://sweyn.co.uk/storage/images/" + item?.photo } : productImagePlaceHolder} style={styles.image} />
                <View>
                    <Text style={styles.productName}>{item.name}</Text>
                    <View style={styles.salesHolder}>
                        <Text style={styles.numberOfSales}>Sales for the last 30 days:</Text>
                        <Text style={styles.salesQuantity}>18</Text>
                    </View>
                    <View style={styles.availabelHolder}>
                        <Text style={styles.availableText}>Price:</Text>
                        <Text style={styles.availableQunatity}>${item?.price}</Text>
                    </View>
                    <View style={styles.availabelHolder}>
                        <Text style={styles.availableText}>Available:</Text>
                        <Text style={styles.availableQunatity}>{item?.quantity_avaliable}</Text>
                    </View>
                </View>

            </View>
            <View style={styles.actionsHolder}>
                <FAB
                    icon="delete"
                    size='small'
                    style={styles.fab}
                    onPress={() => console.warn('Pressed')}
                />

                <FAB
                    size='small'
                    icon="pen"
                    style={styles.fab}
                    onPress={() => navigation.navigate("updateProduct", { data: item })}
                />
                <FAB
                    icon="database"
                    size='small'
                    style={styles.fab}
                    onPress={() => navigation.navigate("productDetails", { data: item })}
                />
                {/* <TouchableWithoutFeedback>
                    <View style={styles.deleteTextHolder}>
                        <View style={styles.updateIcon}>
                            <Entypo name='trash' color={"#ff1900"} />
                        </View>
                        <Text style={styles.textAction}>Delete</Text>
                    </View>
                </TouchableWithoutFeedback> */}
                {/* <TouchableWithoutFeedback onPress={() => navigation.navigate("updateProduct", { data: item })}>
                    <View style={styles.buttonIconTextHolder}>
                        <View style={styles.updateIcon}>
                            <Entypo name='edit' color={"#569615"} />
                        </View>
                        <Text style={styles.textAction}>Update</Text>
                    </View>

                </TouchableWithoutFeedback> */}
                {/* <TouchableWithoutFeedback onPress={() => navigation.navigate("productDetails", { data: item })}>
                    <View style={styles.buttonIconTextHolder}>
                        <View style={styles.updateIcon}>
                            <Entypo name='database' color={"#8c8a1f"} />
                        </View>
                        <Text style={styles.textAction}>Details</Text>
                    </View>

                </TouchableWithoutFeedback> */}

            </View>

        </View>
    )
}
export default ProductCard



 // <TouchableWithoutFeedback>
        //     <View style={styles.card}>
        //         <View style={{}}>
        //             <View>
        //                 <Image source={item.image} style={styles.image} />
        //             </View>
        //             <View style={styles.divider} />
        //             <Text style={styles.productName}>{nameShortener(item.productName)}</Text>
        //             <Text style={styles.price}>$9.99</Text>
        //             <View style={styles.avaiblableTextHolder}>
        //                 <Text style={styles.availableText}>Available:</Text>
        //                 <Text style={styles.availableQuantity}>400</Text>
        //             </View>
        //         </View>
        //         <View style={styles.editButtonHolder}>
        //             <View style={styles.editButton}>
        //                 <Entypo name='edit' size={12} color="#05e4fc" />
        //             </View>
        //             <Text style={styles.updateText}>Update</Text>
        //         </View>
        //     </View>
        // </TouchableWithoutFeedback>