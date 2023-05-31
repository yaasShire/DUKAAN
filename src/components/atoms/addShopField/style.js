import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    fieldHolder: {
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: -10
    },
    inputHolder: {
        height: height / 14,
        width: width / 1.13,
        backgroundColor: "#e9f8ee",
        borderRadius: 10,
        marginTop: "2%",
        zIndex: -10
    },
    input: {
        height: "100%",
        width: "100%",
        paddingHorizontal: 20,
        fontSize: 16
    },
    label: {
        opacity: .4,
        fontSize: 14,
        fontWeight: "500",
    },
    errorHolder: {
        backgroundColor: "#e8c3cd",
        paddingHorizontal: "5%",
        paddingVertical: "3%",
        width: width / 1.5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    errorText: {
        color: "red"
    },
    mainErrorHolder: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5%"
    }

})