import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    fab: {
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyles.colors.logoColor,
        borderRadius: 10,
        elevation: 1,
        color: "#fff"
    }
})