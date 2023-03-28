import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    buttonHolder: {

    },
    buttonView: {
        backgroundColor: "#212121",
        width: 340,
        justifyContent: "center",
        alignItems: "center",
        height: height / 15,
        borderRadius: 15

    },
    text: {
        color: "#FFF",
        fontSize: 17
    }
})