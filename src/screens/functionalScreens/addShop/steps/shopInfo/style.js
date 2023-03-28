import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        marginTop: "10%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: "5%",
    },
    titleText: {
        fontSize: 20,
        fontWeight: "500"
    },
    fieldsHolder: {
        marginTop: "7%",
        marginBottom: 100,
        alignItems: "center"

    },
    buttonHolder: {
        marginTop: "10%",
        alignItems: "center",
    },
    titleHolder: {
        marginTop: "5%"
    }
})