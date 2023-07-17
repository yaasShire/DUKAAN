import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5
    },
    imaegNameWrapper: {
        flexDirection: "row",
        alignItems: "center",
        minWidth: 120,
        justifyContent: "space-between"
    },
    field: {
        alignItems: "center"
    },
    fieldTitle: {
        color: globalStyles.colors.secondaryGray
    },
    fieldValue: {
        color: globalStyles.colors.tertiary,
        fontWeight: "500",
        fontSize: 16
    }
})