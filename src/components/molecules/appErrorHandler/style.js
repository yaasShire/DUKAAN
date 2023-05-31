import { StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: globalStyles.colors.miniPrimary,
        zIndex: 5,
    },
    text: {
        fontSize: 19,
        color: globalStyles.colors.miniPrimary,
        fontWeight: "500"
    }
})