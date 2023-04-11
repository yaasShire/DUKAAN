import { Dimensions, StyleSheet } from "react-native";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    orderCard: {
        backgroundColor: '#FFFFFF',
        height: height / 4.2,
        width: "100%",
        borderRadius: 6,
        borderColor: "#c2c1bc",
        borderWidth: .5,

    },
    orderNumber: {
        fontSize: 18,
        fontWeight: "500"
    },
    orderStage: {
        color: "orange",
        fontSize: 14,
        fontWeight: "500"
    },
    orderInfo1Holder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    ammount: {
        fontSize: 18,
        fontWeight: "600",
        color: "orange",
        width: "30%",
        textAlign: "right"

    },
    imageOrderIdHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    orderStageHolder: {
        marginTop: '2%',
    },
    orderInfo: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        marginBottom: '2%'
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#dee0e3",
    },
    actionButtonsHolder: {
        paddingHorizontal: '6%',
        justifyContent: 'space-between',
        alignItems: "center",
        flex: 1,
        flexDirection: "row",

    },

    nameHolder: {
        paddingHorizontal: '3%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: "#dee0e3",
        paddingVertical: ".5%"
    },
    timePassedWrapper: {
        fontSize: 10,
        color: "gray",
        borderColor: "#dee0e3",
        borderWidth: 1,
        paddingHorizontal: "3%",
        borderRadius: 5,
        paddingVertical: ".5%"
    },
    timePassedText: {
        fontSize: 10,
        color: "gray",
        borderColor: "#dee0e3",
    },
    nameMinutesHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: "6%",
        alignItems: 'center',
        paddingVertical: "3%"
    },
    textName: {
        fontSize: 11,
        opacity: 0.7
    },
    statusHolder: {
        paddingHorizontal: '3%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'pink',
        borderColor: "#dee0e3",


    },
    statusText: {
        fontSize: 11,
        opacity: 0.7,
    },
    // viewButtonHolder: {
    //     width: '30%',
    //     height: '48%',

    // }

})