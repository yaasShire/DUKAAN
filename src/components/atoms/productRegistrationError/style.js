import { StyleSheet } from "react-native";
import { HeightDimension } from "../../../utils/utilityFunctions";
export default StyleSheet.create({
    errorHolder: {
        backgroundColor: "#f25555",
        alignItems: "center",
        justifyContent: "center",
        height: HeightDimension / 17,
        borderRadius: 5,
        marginVertical: "5%"
    },
    textError: {
        fontWeight: "500",
        fontSize: 14,
        color: "#fff"
    }
})