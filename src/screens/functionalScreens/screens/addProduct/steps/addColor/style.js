import { StyleSheet } from "react-native";
import { HeightDimension, WidthDimension, screenPadding } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    pickerStyle: {
        // height: HeightDimension / 22,
        width: "100%",
        justifyContent: "center",
        width: WidthDimension / 1.15,
        borderColor: 'rgba(204, 200, 190, 1)',
        padding: 10
    },
    labelStyle: {
        marginTop: 23,
        color: "gray",
        backgroundColor: "pink"
    },
    pickerButtonWrapper: {
        // flexDirection: "row",
        // alignItems: "center",
        // // justifyContent: "space-between",
        // padding: screenPadding,
        // width: "100%",

        width: WidthDimension / 1.1,
        height: HeightDimension / 16,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: 'rgba(204, 200, 190, 1)',
        borderRadius: 5,
        flexDirection: 'row',


    },
    verticalBar: (bgColor) => ({
        height: "100%",
        backgroundColor: bgColor,
        width: 3,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadiusRadius: 25,
        left: -1
    }),
})