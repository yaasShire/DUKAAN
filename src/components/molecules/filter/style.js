import { StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: globalStyles.colors.primaryGray,
        justifyContent: "flex-end"
    },
    filterWrapper: {
        backgroundColor: "#053b35",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 5
    }
})