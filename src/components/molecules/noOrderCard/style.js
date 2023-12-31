import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        // width: width / 1.1,
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 8,
    },
    image: {
        width: 140,
        height: 140,
        // resizeMode: "center"
    },
    text1: {
        fontWeight: "500",
        opacity: 0.5
    },
    text2: {
        fontWeight: "500",
        opacity: 0.7
    },
})