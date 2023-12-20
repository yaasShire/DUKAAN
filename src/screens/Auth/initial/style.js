import { StyleSheet } from "react-native";
import { WidthDimension, HeightDimension, screenPadding, globalStyles } from "../../../globalConstants/styles";
export default StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        backgroundColor: "rgba(255, 252, 252, .8)"

    },
    wrapper: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: screenPadding,
        rowGap: 20,
        marginBottom: "10%"
    },
    buttonsHolder: {
        width: "100%",
        rowGap: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    txtsWrapper: {
        rowGap: 15
    },
    title: {
        fontSize: 25,
        fontWeight: globalStyles.fontWeights.primary,
        color: globalStyles.colors.tertiary,
        fontFamily: "AstroSpace-0Wl3o",
    },
    description: {
        fontSize: 17,
        color: globalStyles.colors.tertiary,
        opacity: .7
    },
    logoWrapper: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    logoImage: {
        width: 200,
        height: 150,
    },
    appName: {
        fontWeight: globalStyles.fontWeights.tertiary,
        fontSize: 30,
        color: globalStyles.colors.tertiary,
    }
})