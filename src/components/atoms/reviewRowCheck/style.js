import { StyleSheet } from "react-native";
import { globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    completedSectionsWrapper: {
        marginTop: "8%"
    },
    validationWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2%",
        borderBottomWidth: 1,
        borderBottomColor: globalStyles.colors.primaryGray,
        marginVertical: "3%"
    },
    completedSectionText: {
        fontSize: globalStyles.fontSizes.secondary,
        color: globalStyles.colors.tertiary,
        fontWeight: globalStyles.fontWeights.secondary
    },
})