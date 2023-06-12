import { Dimensions } from "react-native"
export const nameShortner = (name) => {
    return name.length > 16 ? name.slice(0, 15) + '...' : name
}
export const formatedShopFormData = (values, shopImages, shopData) => {
    const data = new FormData()
    const fieldNames = ['photos', 'photo2', 'photo3', 'photo4', 'photo5', 'photo6',]
    const images = Object.keys(shopImages).map((url) => ({
        url: shopImages[url]
    }))
    const shopImagesFull = images.map(item => {
        const imageName = item.url.split('/')
        return {
            name: imageName[imageName.length - 1],
            uri: item.url,
            type: `image/${item.url.slice(-4)}`,
        }
    })

    const shopFullData = shopImagesFull.map((shop, index) => {
        if (shop.name && shop.type && shop.uri) {
            data.append(fieldNames[index], {
                name: shop.name,
                uri: shop.uri,
                type: shop.type
            })
        }

    })
    const keys = Object.keys(values)
    keys.map(key => {
        data.append(key, values[key])
    })
    return data;
}

export const shopDataGenerator = (shopData, locationData, shopImages, coordinates) => {
    return {
        name: shopData?.shopName,
        phone_number: shopData?.shopNumber,
        email: shopData?.shopEmail,
        state: Number(locationData?.state),
        region: Number(locationData?.region),
        landmark: locationData?.nearestLANMark,
        longitude: Number(coordinates?.longitude),
        latitude: Number(coordinates?.longitude),
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
        name: productRequiredInfo.productName,
        subcategory: Number(subCategory.id),
        productcategory: Number(productCategory.id)

    }
}

export const uploadDataGenerator = (values, images) => {
    const data = new FormData()
    const fieldNames = ['product_image_1', 'product_image_2', 'product_image_3', 'product_image_4']
    const imagess = Object.keys(images).map((url) => ({
        url: images[url]
    }))
    const productFullImages = imagess.map(item => {
        const imageName = item.url.split('/')
        return {
            name: imageName[imageName.length - 1],
            uri: item.url,
            type: `image/${item.url.slice(-4)}`,
        }
    })
    const productFullData = productFullImages.map((product, index) => {
        if (product.name && product.type && product.uri) {
            data.append(fieldNames[index], {
                name: product.name,
                uri: product.uri,
                type: product.type
            })
        }
    })
    const keys = Object.keys(values)
    keys.map(key => {
        data.append(key, values[key])
    })
    return data;
}

export const { width: WindowDimension, height: HeightDimension } = new Dimensions.get("screen")

export const formValues = (values, image) => {
    const data = new FormData();

    if (image) {
        const profileImage = image.split('/');
        const imageName = profileImage[profileImage.length - 1];
        data.append('profile_picture', {
            name: imageName,
            uri: image,
            type: `image/${image.slice(-4)}`
        })
    }

    const keys = Object.keys(values).map(key => {
        if (values[key]) {
            data.append(key, values[key])
        }
    })
    return data;
}

export const formdataProducer = (values) => {
    const data = new FormData();
    const keys = Object.keys(values).map(key => {
        data.append(key, values[key])
    })
    return data;
}