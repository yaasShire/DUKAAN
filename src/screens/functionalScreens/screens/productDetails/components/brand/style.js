import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    brandWholeWrapper: {
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 10,
        minHeight: 53,
        borderRadius: 6,
        minWidth: 80,
        borderWidth: 1,
        padding: 5,
        borderColor: globalStyles.colors.logoColor,
        backgroundColor: globalStyles.colors.blue
    },
    brandName: {
        fontWeight: "500",
        fontSize: 16,
        color: globalStyles.colors.miniPrimary,
        textAlign: "left"
    },
    brandImage: {
        width: 70,
        height: 70,
        resizeMode: "center",
        borderRadius: 10
    },
})