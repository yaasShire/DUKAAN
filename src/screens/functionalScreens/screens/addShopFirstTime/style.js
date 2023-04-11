import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    upperContent: {
        backgroundColor: "#57c9c9",
        height: height / 2,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        justifyContent: "center"
    },
    logo: {
        width: 200,
        height: 200
    },
    logoWrapper: {
        backgroundColor: "#fff",
        width: width / 2.5,
        height: height / 6,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10

    },
    logoBrandNameWrapper: {
        alignItems: "center"
    },
    companyNameWrapper: {
        marginTop: 10
    },
    companyName: {
        fontWeight: "700",
        fontSize: 19,
        color: "#fff"
    },
    cardWrapper: {
        alignItems: "center"
    },
    card: {
        backgroundColor: "#fff",
        height: height / 2,
        width: width - 40,
        borderRadius: 20,
        marginTop: -70,
        alignItems: "center",
        paddingTop: "5%"
    },
    welcomeText: {
        fontWeight: "700",
        fontSize: 20
    },
    imageDescriptionWrapper: {
        alignItems: "center",
        marginBottom: "5%"
    },
    descriptionText: {
        textAlign: "center",
        opacity: .5,
        width: 300,
        fontWeight: "500"
    },
    accountCreationImage: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    addShopButton: {
        backgroundColor: "#149999",
        width: "90%",
        height: height / 13,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    buttonText: {
        fontWeight: "500",
        fontSize: 19,
        color: "#fff"
    }
})