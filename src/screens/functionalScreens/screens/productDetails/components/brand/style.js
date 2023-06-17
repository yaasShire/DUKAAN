import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    brandWholeWrapper: {
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: 93,
        borderRadius: 6,
        minWidth: 80,
        borderWidth: 1,
        padding: 5,
        borderColor: globalStyles.colors.primaryGray,
        backgroundColor: 'rgba(230, 227, 220, 0.5)'
    },
    brandName: {
        fontWeight: "500",
        fontSize: 14
    },
    brandImage: {
        width: 70,
        height: 70,
        resizeMode: "center",
        borderRadius: 10
    },
})