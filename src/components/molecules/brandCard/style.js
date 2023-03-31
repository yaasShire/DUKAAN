import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    cardHolder: {
        backgroundColor: "#fff",
        width: width / 6,
        height: height / 13,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "7%",
        padding: "1%"
    },
    image: {
        width: "90%",
        height: "80%",

    },
    wholeButtonHolder: {
        marginBottom: "5%",
        alignItems: "center",
        justifyContent: "center"
    },
    brandName: {
        fontWeight: "500",
        fontSize: 13
    }
})