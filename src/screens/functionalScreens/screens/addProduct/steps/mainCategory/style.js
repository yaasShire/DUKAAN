import { Dimensions, StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    textTitle: {
        textAlign: "center",
        color: globalStyles.colors.primaryGray,
        marginVertical: "2%",
        fontSize: globalStyles.fontSizes.primary3
    },
    categoriesHolder: {
        borderWidth: 1,
        borderColor: "#A49D9D",
        borderRadius: 4,
        backgroundColor: globalStyles.colors.miniPrimary,
    },
    actionButtonHolder: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: "2%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    errorHolder: {
        backgroundColor: globalStyles.colors.orange,
        alignItems: "center",
        justifyContent: "center",
        height: height / 17,
        borderRadius: 5,
        marginVertical: "5%"

    },
    textError: {
        fontWeight: "500",
        fontSize: 14,
        color: globalStyles.colors.miniPrimary
    }


})