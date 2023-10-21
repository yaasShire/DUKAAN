import { StyleSheet } from "react-native";
import { HeightDimension, WindowDimension } from "../../../../utils/utilityFunctions";
import { globalStyles } from "../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: HeightDimension,
        width: WindowDimension
    },
    mapStyle: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0
    },
    fabWrapper: {
        margin: 16,
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyles.colors.logoColor
    },
    fab: {
        margin: 16,
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyles.colors.logoColor
    },
})