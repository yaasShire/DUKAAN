import { Dimensions } from "react-native"
export const nameShortner = (name) => {
    return name.length > 16 ? name.slice(0, 15) + '...' : name
}
export const formDataGenerator = (values, shopImages, shopData) => {
    const imageData1 = shopImages.url1.split('/');
    const image1 = imageData1[imageData1.length - 1];
    // end
    const imageData2 = shopImages.url2.split('/');
    const image2 = imageData2[imageData2.length - 1];
    // end
    const imageData3 = shopImages.url3.split('/');
    const image3 = imageData3[imageData3.length - 1];
    // end
    const imageData4 = shopImages.url4.split('/');
    const image4 = imageData4[imageData4.length - 1];
    // end
    const imageData5 = shopImages.url5.split('/');
    const image5 = imageData5[imageData5.length - 1];
    // end
    const imageData6 = shopImages.url6.split('/');
    const image6 = imageData6[imageData6.length - 1];
    // end

    const data = new FormData()
    data.append('photos', {
        name: image1,
        uri: shopImages.url1,
        type: `image/${shopImages.url1.slice(-4)}`
    })
    if (image2) {
        data.append('photo2', {
            name: image2,
            uri: shopImages.url2,
            type: `image/${shopImages.url2.slice(-4)}`
        })
    }
    if (image3) {
        data.append('photo3', {
            name: image3,
            uri: shopImages.url3,
            type: `image/${shopImages.url3.slice(-4)}`
        })
    }
    if (image4) {
        data.append('photo4', {
            name: image4,
            uri: shopImages.url4,
            type: `image/${shopImages.url4.slice(-4)}`
        })
    }
    if (image5) {
        data.append('photo5', {
            name: image5,
            uri: shopImages.url5,
            type: `image/${shopImages.url5.slice(-4)}`
        })
    }
    if (image6) {
        data.append('photo6', {
            name: image6,
            uri: shopImages.url6,
            type: `image/${shopImages.url6.slice(-4)}`
        })
    }
    const keys = Object.keys(values)
    keys.map(key => {
        data.append(key, values[key])
    })
    return data;
}

export const shopDataGenerator = (shopData, locationData, shopImages) => {
    return {
        name: shopData?.shopName,
        phone_number: shopData?.shopNumber,
        email: shopData?.shopEmail,
        state: Number(locationData?.state),
        region: Number(locationData?.region),
        landmark: locationData?.nearestLANMark,
        longitude: 28.98,
        latitude: 29.376,
        // photos: shopImages?.url1,
        // photo2: shopImages?.url2,
        // photo3: shopImages?.url3,
        // photo4: shopImages?.url4,
        // photo5: shopImages?.url5,
        // photo6: shopImages?.url6,
    }
}

export const productDataGenerator = (subCategory, productCategory, shopsList, productRequiredInfo, productOffers, mainCategory, images) => {
    return {
        shop_id: shopsList.USID,
        category: Number(mainCategory.id),
        brand: Number(productRequiredInfo.productBrand),
        description: productOffers?.description,
        rating: Number(5),
        quantity_avaliable: Number(500),
        price: Number(productOffers.price),
        name: productRequiredInfo.productName
    }
}

export const uploadDataGenerator = (values, images) => {

    const imageData1 = images.url1.split('/');
    const image1 = imageData1[imageData1.length - 1];
    // end
    const imageData2 = images.url2.split('/');
    const image2 = imageData2[imageData2.length - 1];
    // end
    const imageData3 = images.url3.split('/');
    const image3 = imageData3[imageData3.length - 1];
    // end
    const imageData4 = images.url4.split('/');
    const image4 = imageData4[imageData4.length - 1];
    const data = new FormData()
    data.append('product_image_1', {
        name: image1,
        uri: images.url1,
        type: `image/${images.url1.slice(-4)}`
    })
    if (image2) {
        data.append('product_image_2', {
            name: image2,
            uri: images.url2,
            type: `image/${images.url2.slice(-4)}`
        })
    }
    if (image3) {
        data.append('product_image_3', {
            name: image3,
            uri: images.url3,
            type: `image/${images.url3.slice(-4)}`
        })
    }
    if (image4) {
        data.append('product_image_4', {
            name: image4,
            uri: images.url4,
            type: `image/${images.url4.slice(-4)}`
        })
    }
    const keys = Object.keys(values)
    keys.map(key => {
        data.append(key, values[key])
    })
    return data;
}

export const { width: WindowDimension, height: HeightDimension } = new Dimensions.get("screen")




export const authFormData = (values) => {
    const data = new FormData();
    const keys = Object.keys(values).map(key => {
        data.append(key, values[key])
    })
    return data;
}