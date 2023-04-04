import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    buttonHolder: {
        backgroundColor: "#ffffff",
        width: width / 3,
        height: height / 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#dedede",
    },
    buttonText: {
        fontWeight: "600",
        fontSize: 13,
        opacity: .6
    }

})