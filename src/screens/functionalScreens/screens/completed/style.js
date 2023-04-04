import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    cardHolder: {
        padding: 15,
        flex: 1,
        height: height,
        marginBottom: 15,
    }
})