import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    imageWrapper: {
        paddingHorizontal: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center"
    },
    buttonHolder: {
        marginTop: "10%",
        alignItems: "flex-end",
        padding: 5,
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginVertical: "20%",
        flex: 1
    },
})