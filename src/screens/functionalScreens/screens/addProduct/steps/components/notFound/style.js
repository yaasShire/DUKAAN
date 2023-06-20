import { StyleSheet } from "react-native";
import { HeightDimension } from "../../../../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        backgroundColor: "pink"
    },
    image: {
        width: 200,
        height: 200
    },
    notFoundText: {
        fontSize: 15,
        fontWeight: "400"
    },
    noCategory: {
        flex: 1,
        height: HeightDimension / 2,
        justifyContent: "center",
        alignItems: "center"
    },
})