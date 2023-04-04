import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: "5%",
        paddingHorizontal: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        backgroundColor: "pink",
        height: "100%",
        alignItems: "center"

    }
})