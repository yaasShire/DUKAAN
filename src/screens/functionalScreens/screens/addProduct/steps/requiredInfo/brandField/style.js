import { StyleSheet } from "react-native";
import { HeightDimension, WindowDimension } from "../../../../../../../utils/utilityFunctions";
import { WidthDimension, globalStyles } from "../../../../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        alignItems: "flex-start",
    },
    subWrapper: {
        height: HeightDimension / 14,
        width: WindowDimension / 1.13,
        borderRadius: 10,
        zIndex: -10,
        borderWidth: 1
    },
    label: {
        fontSize: 14,
        fontWeight: "500"
    },
    picker: {
        borderWidth: 1,
        paddingHorizontal: "3%",
        paddingVertical: "1%",
        width: WidthDimension / 1.12,
        height: HeightDimension / 13,
        borderRadius: 4,
        fontSize: 15,
        fontWeight: "400",
        borderColor: "gray",
        backgroundColor: globalStyles.colors.miniPrimary

    },
    labelStyle: {
        fontWeight: "600",
        fontSize: 15,
        marginBottom: '4%'
    },
    listWrapper: {
        position: "absolute",
        top: 100,
        zIndex: 100,
        // backgroundColor: "#fff",
        width: "100%",
        borderWidth: .3,
        paddingVertical: "3%"
    },
    mainEroorWrapper: {
        backgroundColor: "#e8c3cd",
        paddingHorizontal: "5%",
        paddingVertical: "3%",
        width: WindowDimension / 1.5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    errorText: {
        color: 'red'
    },
    title: {
        fontWeight: "700",
        fontSize: 15,
        marginBottom: '2%',
        marginLeft: -10
    }
})