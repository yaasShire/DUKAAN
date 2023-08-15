import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
import { WindowDimension } from "../../../../../../utils/utilityFunctions";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        backgroundColor: globalStyles.colors.miniPrimary,
        flex: 1,
        marginTop: "2%"
    },
    header: {
        alignItems: "center",
        padding: "2%",
    },
    headerText: {
        fontSize: globalStyles.fontSizes.secondary,
        fontWeight: "600",
        color: globalStyles.colors.tertiary,
    },
    image: {
        width: 170,
        height: 170
    },
    imageWrapper: {
        // backgroundColor: globalStyles.colors.primaryGray,
        width: WindowDimension / 1.1,
        height: height / 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: "center"
    },
    mainImageWrapper: {
        alignItems: "center",
        marginTop: "5%"
    },
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
    buttonWrapper: {
        alignItems: 'center',
        marginTop: "2%",
        flexDirection: "row",
        justifyContent: "space-between",
    }
})