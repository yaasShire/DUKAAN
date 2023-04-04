import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        marginTop: "5%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: "2%",
        borderWidth: 1,
        borderColor: "#dedede"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "500"
    },
    fieldsHolder: {
        marginTop: "7%",
        marginBottom: 100,
        alignItems: "center"
        // height: "100%",

    },
    buttonHolder: {
        marginTop: "10%",
        alignItems: "center",
    },
    titleHolder: {
        marginTop: "5%"
    }
})