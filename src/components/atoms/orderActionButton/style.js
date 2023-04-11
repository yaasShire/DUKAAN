import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    button: {
        backgroundColor: "#51b097",
        borderWidth: 1,
        borderColor: "#dedede",
        justifyContent: 'center',
        alignItems: "center",
        width: width / 4,
        height: height / 20,
        borderRadius: 5,
     },
    acceptText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#fff"
    },
})