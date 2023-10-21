import { Dimensions, StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../globalConstants/styles";
const { width, height } = new Dimensions.get("screen")
export default StyleSheet.create({
    fieldHolder: {
        alignItems: "flex-start",
        // justifyContent: "center",
        // zIndex: -10
    },
    inputHolder: {
        height: height / 17,
        width: width / 1.13,
        backgroundColor: globalStyles.colors.primaryColorRGB,
        borderRadius: 10,
        marginTop: "2%",
    },
    input: {
        width: "100%",
        height: 45,
        // borderWidth: 1,
        // borderColor: 'gray',
        borderRadius: 6,
        padding: 6,
        marginVertical: 5,
        fontSize: 15,
        paddingHorizontal: 10
    },
    label: {
        opacity: .4,
        fontSize: 14,
        fontWeight: "500",
    },
    errorHolder: {
        backgroundColor: "#e8c3cd",
        paddingHorizontal: "3%",
        // minWidth: width / 1.8,
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
        backgroundColor: 'green'
        // marginBottom: "3%"
    }

})