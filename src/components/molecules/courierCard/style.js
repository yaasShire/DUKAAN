import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: height / 6,
        borderWidth: 1,
        borderColor: "#dedede",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "2%",
        flexDirection: "row",
        borderRadius: 15,

    },
    image: {
        width: 100,
        height: "97%",
        resizeMode: "cover",
        borderRadius: 5,
        marginTop: "1.5%"
    },
    imageContentWrapper: {
        flexDirection: "row",
        flex: 2.5
    },
    courierName: {
        fontSize: 17,
        fontWeight: "600"
    },
    distanceAnIconWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: "2%"
    },
    distanceAmmount: {
        fontWeight: "500",
        color: "#2d7562",
        fontSize: 13
    },
    stausWrapper: {
        flexDirection: "row",
        marginBottom: "2%"
    },
    statusTitle: {
        opacity: .5
    },
    statusText: {
        color: "green",
        fontWeight: "600"
    },
    contentWrapper: {
        alignItems: "flex-start",
        marginLeft: 4
    },
    buttonWrapper: {
        flex: 1,
        height: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    assignButton: {
        backgroundColor: "#51b097",
        width: "85%",
        height: "35%",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 15
    },
    assignText: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 16
    },
    startIcon: {
        width: 20,
        height: 20
    },
    raingWraper: {
        flexDirection: "row",
        alignItems: "center"
    },
    ratingValues: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "2%"
    },
    ratingNumber: {
        fontSize: 12,
        fontWeight: "500",
        marginRight: "4%"
    },
    numberOfPeopleRated: {
        fontSize: 12,
        opacity: .6,
    }
})