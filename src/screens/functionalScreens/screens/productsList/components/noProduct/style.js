import { Dimensions, StyleSheet } from "react-native";
import { HeightDimension, globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: globalStyles.colors.miniPrimary,
        height: Dimensions.get('window').height,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0

    },
    image: {
        width: "50%",
        height: 200,
        resizeMode: "cover"
    },
    textButtonWrapper: {
        padding: 10,
        alignItems: "center",
        height: 170,
        justifyContent: "space-around"
    },
    descriptinText: {
        textAlign: "center",
        opacity: .6
    },
    button: {
        backgroundColor: globalStyles.colors.logoColor,
        width: 110, height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    buttonText: {
        color: "#fff"
    }
})