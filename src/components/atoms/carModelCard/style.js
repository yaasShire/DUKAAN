import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    cardWrapper: {
        width: width / 4,
        borderRadius: 5,
        borderColor: "#d4d5d6",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: "5%",
        height: height / 7,


    },
    selectedCar: {
        width: width / 4,
        borderRadius: 5,
        borderColor: "green",
        borderWidth: 1.5,
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: "5%",
        height: height / 7,


    },
    image: {
        width: "95%",
        height: 60,
        resizeMode: "contain",
    }
})