import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import ProductInformationRow from '../productInfoRaw'
const ProductDetailsCard = ({ productDetail }) => {
    return (
        <View style={styles.infoCard}>
            <ProductInformationRow text={"Stock"} value={productDetail?.quantity_avaliable} />
            <ProductInformationRow text={"Sales"} value={0} />
        </View>
    )
}

export default ProductDetailsCard