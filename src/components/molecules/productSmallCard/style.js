import { StyleSheet } from "react-native";
import { HeightDimension, WidthDimension, globalStyles, screenPadding } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        width: WidthDimension / 2.5,
        height: HeightDimension / 4.2,
        borderRadius: 7,
        borderWidth: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: globalStyles.colors.primaryGray,
        padding: screenPadding - 4
    },
    imageWrapper: {
        width: "100%",
        height: 130,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        borderColor: globalStyles.colors.logoColor
    },
    image: {
        width: "100%",
        height: 100,
        resizeMode: "cover",
        borderRadius: 5
    },
    productName: {
        fontSize: 15,
        fontWeight: globalStyles.fontWeights.primary
    },
    qtyHolder: {
        flexDirection: 'row'
    },
    qtyText: {
        opacity: .7
    },
    qtyValue: {
        fontWeight: globalStyles.fontWeights.secondary
    },
    divider: {
        marginVertical: "2%",
        width: 130
    },
    dividerWrapper: {
        alignItems: "center"
    },
    content: {
        flex: 1,
        width: "100%"
    },
    sectionWrapper: {
        flexDirection: "row",
    },
    productName: {
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: 16
    },
    title: {
        color: globalStyles.colors.secondaryGray
    },
    value: {
        fontWeight: globalStyles.fontWeights.secondary
    },
    priceWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    priceText: {
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: 18,
        color: globalStyles.colors.logoColor
    }
})