import { StyleSheet } from "react-native";
import { HeightDimension, WidthDimension, globalStyles, screenPadding } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    card: {
        width: WidthDimension / 1.1,
        height: HeightDimension / 15,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: 'rgba(204, 200, 190, 1)',
        borderRadius: 5,
        flexDirection: 'row',
    },
    pickerButtonWrapper: {
        flexDirection: "row",
        // flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: screenPadding,
        width: "100%"
    },
    pickerStyle: {
        height: HeightDimension / 20,
        justifyContent: "center",
        width: WidthDimension / 1.15,


    },
    labelStyle: {
        marginTop: 23,
        color: "gray"
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
    contentWrapper: {
        padding: screenPadding,
        justifyContent: "space-between",
        flexDirection: 'row',
        width: "100%",
        alignItems: "center"
    },
    fab: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: globalStyles.colors.logoColor
    },
    title: {
        color: globalStyles.colors.secondaryGray
    },
    value: {
        fontWeight: globalStyles.fontWeights.secondary
    }
})