import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    buttonHolder: {
        backgroundColor: "#23baab",
        width: width / 2,
        height: height / 13,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "400"
    }
})