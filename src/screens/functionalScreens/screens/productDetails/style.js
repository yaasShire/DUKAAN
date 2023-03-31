import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: "35%",
        paddingHorizontal: "3%"
    },
    headerText: {
        fontSize: 17,
        fontWeight: "500"
    },
    divider: {
        borderBottomColor: "#f2f0f0",
        opacity: .5,
        borderWidth: .5,
        marginTop: "2%"
    },
    mainImageHolder: {
        alignItems: "center",
        marginTop: "5%",
        height: "25%",
        justifyContent: "center"
    },
    imageHolder: {
        backgroundColor: "#e3e1de",
        borderWidth: .5,
        borderColor: "#adaba8",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",

    },
    backIconHolder: {
        // backgroundColor: "gray",
        padding: "2%"
    },
    image: {
        width: 150,
        height: 150
    },
    mainSubImagesHolder: {
        marginTop: "5%",
        paddingHorizontal: "2%",
        paddingVertical: "3%"

    },
    productSubImage: {
        backgroundColor: "#e3e1de",
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    },
    active: {
        borderColor: "green",
        borderWidth: 1
    },
    subImage: {
        width: 100,
        height: 100
    },
    productScrollHolder: {
        paddingHorizontal: "3%"
    }

})