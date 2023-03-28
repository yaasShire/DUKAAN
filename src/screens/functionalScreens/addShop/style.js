import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        height: height,
        paddingTop: "10%",
        // marginBottom,
    }
})