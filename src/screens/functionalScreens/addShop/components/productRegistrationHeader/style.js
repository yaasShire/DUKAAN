import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../globalConstants/styles";
export default StyleSheet.create({
    titleHolder: {
        alignItems: "center",
        marginBottom: "5%",
        borderBottomWidth: 2,
        borderColor: globalStyles.colors.logoColor,
        borderRadius: 50,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "500"
    }
})