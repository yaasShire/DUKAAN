import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    rowContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: "2%"
    },
    dotTextValueWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        minWidth: 52,
        flex: 1,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: globalStyles.colors.logoColor,
        marginRight: "2%"
    },
    textTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: globalStyles.colors.tertiary,
        flex: 1

    },
    valueText: {
        fontSize: 15,
        fontWeight: "700",
    },

})