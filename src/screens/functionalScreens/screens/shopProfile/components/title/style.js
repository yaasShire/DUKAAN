import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";

export default StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: "6%",
        paddingHorizontal: 10
    },
    seeMoreWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 17,
        fontWeight: globalStyles.fontWeights.primary
    },
    seeMoreText: {
        fontSize: 15,
        color: globalStyles.colors.secondaryGray
    }
})