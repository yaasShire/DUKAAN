import { StyleSheet } from "react-native";
import { HeightDimension } from "../../../utils/utilityFunctions";
import { globalStyles, screenPadding } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 170,
        height: 150,
        resizeMode: "cover"
    },
    titlesHolder: {
        height: 150,
        paddingTop: "4%",
        justifyContent: "space-around"
    },
    title1: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
        fontFamily: "AstroSpace-0Wl3o",
        color: globalStyles.colors.tertiary
    },
    title2: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "AstroSpace-0Wl3o",
        marginVertical: "2%",
        color: globalStyles.colors.tertiary
    },
    description: {
        textAlign: 'center',
        opacity: 0.8,
        fontSize: 15,
        fontFamily: "AstroSpace-0Wl3o",
        marginVertical: "1%",
        color: globalStyles.colors.tertiary
    },
    imageHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fieldsHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: screenPadding,
        width: "100%"
    },
    buttonHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgetPasswordHolder: {
        alignItems: "flex-end",
        justifyContent: 'center',
        marginRight: '6%'
    },
    newAccount: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: 'center',
        marginRight: '6%'
    },
    forgetPasswordText: {
        opacity: 0.4,
        fontSize: 16
    },
    accountCreation: {
        fontSize: 16,
        marginRight: "1%",
        color: globalStyles.colors.secondaryGray
    },
    signUpLink: {
        fontSize: 16,
        color: "blue",
        fontWeight: "500"
    },
    signupLinkWrapper: {
        marginVertical: "2%"
    },
    messageTextHolder: {
        alignItems: "center",
        marginVertical: "3%"

    },
    messageText: {
        color: "red",
        fontSize: 16,
        fontWeight: "500"
    },
    subMessageWrapper: {
        alignItems: "center",
        padding: "3%",
        backgroundColor: "#f7d6d5",
        width: "90%",
        borderRadius: 6
    },
    title: {
        textAlign: 'center',
    },
})