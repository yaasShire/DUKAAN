import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: "#fff"
    },
    contentHolder: {
        // height,
    }
})