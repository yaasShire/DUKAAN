import { StyleSheet } from "react-native";
import { HeightDimension } from "../../../../../../utils/utilityFunctions";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    singleAction: {
        borderColor: "#dedede",
        borderWidth: 1,
        height: HeightDimension / 13,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "3%",
        borderRadius: 5,
        paddingHorizontal: "1%"
    },
    nameIconWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        height: "55%"
    },
    actionName: {
        fontWeight: globalStyles.fontWeights.tertiary,
        fontSize: globalStyles.fontSizes.primary3,
        marginLeft: "3%",
        color: globalStyles.colors.black
    },
    modalHolder: {
        alignItems: "center",
        justifyContent: "center",
    },
})