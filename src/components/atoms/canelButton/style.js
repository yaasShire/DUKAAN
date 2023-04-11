import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    buttonHolder: {

    },
    buttonView: {
        backgroundColor: "#fff",
        borderColor: "#dedede",
        borderWidth: 1,
        width: 140,
        justifyContent: "center",
        alignItems: "center",
        height: height / 15,
        borderRadius: 15,
        marginVertical: "2%"

    },
    text: {
        color: "#000",
        fontSize: 17
    }
})