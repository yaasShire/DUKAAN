import { StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    pickerContainer: {
        borderBottomColor: "#b6baba",
        borderBottomWidth: .5,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "3%",
        paddingVertical: "3%"
    },
    labelStyle: {
        fontSize: 14,
        fontWeight: globalStyles.fontWeights.secondary
    }
})