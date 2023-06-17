import { Dimensions, StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../../globalConstants/styles";
const { width, height } = Dimensions.get('screen')
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    contentScrollWrapper: {
        flex: 1
    },

    image: {
        width: "100%",
        height: 300,
        resizeMode: "cover"
    },
    bottomContent: {
        backgroundColor: "#fff",
        zIndex: 10,
        minHeight: height / 1.19,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: screenPadding
    },
    productInfoWrapper: {
        marginTop: "4%"
    },
    barWrapper: {
        alignItems: "center"
    },
    bar: {
        backgroundColor: "gray",
        width: 58,
        height: 5,
        borderRadius: 30,
        opacity: .5
    },

    title: {
        fontSize: 17,
        fontWeight: globalStyles.fontWeights.primary
    },
    productsScrollWrapper: {
        columnGap: 10,
        paddingHorizontal: screenPadding
    },
    shopInfoCardWrapper: {
        padding: screenPadding
    },
    shopEditButtonWrapper: {
        alignItems: "flex-end",
        padding: screenPadding
    }

})