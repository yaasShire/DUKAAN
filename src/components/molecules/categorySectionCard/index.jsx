import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style'
import UpdateProductDetailCard from '../../atoms/updateProductDetailCard';
import UpdateProductCategory from '../../atoms/updateProductCategory';
const CategorySectionCard = ({ navigation, productDetail, brands, productCategories, subCategories, mainCategories }) => {
    console.log(productDetail);
    return (
        <View style={styles.actionCardsHolder}>
            {/* <UpdateProductDetailCard productDetail={productDetail} name="category" title="Category" value="$0" navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="subcategory" title="Subcategory" value="$8.00" navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="productcategory" title="Product category" value="$8.00" navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="brand" title="Brand" value="$8.00" navigation={navigation} /> */}
            <UpdateProductCategory data={mainCategories} productDetail={productDetail} name="category" title="Main category" value={productDetail?.category?.name} />
            <UpdateProductCategory data={subCategories} productDetail={productDetail} name="subcategory" title="Subcategory" value={productDetail?.subcategory?.name} />
            <UpdateProductCategory data={productCategories} productDetail={productDetail} name="productcategory" title="Product category" value={productDetail?.productcategory?.name} />
            <UpdateProductCategory data={brands} productDetail={productDetail} name="brand" title="Brand" value={productDetail?.brand?.name} />
        </View>
    )
}

export default CategorySectionCard