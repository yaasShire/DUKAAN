import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    brandWholeWrapper: {
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: 93,
        backgroundColor: globalStyles.colors.primaryGray,
        borderRadius: 6,
        width: 90,
    },
    brandName: {
        fontWeight: "500",
        fontSize: 14
    },
    brandImage: {
        width: 70,
        height: 70,
        resizeMode: "center",
    },
})