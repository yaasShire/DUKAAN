import { StyleSheet } from "react-native";
import { HeightDimension, WidthDimension, globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        width: WidthDimension / 2.5,
        height: HeightDimension / 4.8,
        borderRadius: 7,
        padding: "1%",
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
        width: "97%",
        height: "97%",
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
    }
})