import { StyleSheet } from "react-native";
import { HeightDimension, WindowDimension } from "../../../../utils/utilityFunctions";
import { globalStyles, screenPadding } from "../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    image: {
        height: HeightDimension / 2,
        width: WindowDimension,
        resizeMode: "center"
    },
    successLabel: {
        fontSize: 17,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "AstroSpace-0Wl3o"
    },
    backButton: {
        width: "90%",
        height: 70,
        borderRadius: 10,
        backgroundColor: globalStyles.colors.logoColor,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%"
    },
    buttonText: {
        fontWeight: "600",
        fontSize: 16,
        color: globalStyles.colors.miniPrimary,
    },
    bottomContent: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        padding: screenPadding
    }

})