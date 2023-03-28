import { StyleSheet } from "react-native";
export default StyleSheet.create({
    orderCard: {
        backgroundColor: '#FFFFFF',
        height: 200,
        // shadowOffset: {
        //     width: 5,
        //     height: 5
        // },
        // shadowColor: "#000000",
        // shadowRadius: 6,
        // shadowOpacity: 1,
        borderRadius: 6,
        // elevation: 2,
        marginBottom: '5%'

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
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingTop: '5%'
    },
    ammount: {
        fontSize: 18,
        fontWeight: "600",
        color: "orange",

    },
    imageOrderIdHolder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    orderStageHolder: {
        marginTop: '2%'
    },
    orderInfo: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: '5%',
        paddingVertical: '2%',
        marginBottom: '2%'
    },
    divider: {
        borderBottomWidth: 0.5,
        borderColor: "#c2c1bc"
    },
    actionButtonsHolder: {
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    nameHolder: {
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'gray'
    },
    minutesPassedHolder: {
        fontSize: 10,
        color: "gray"
    },
    nameMinutesHolder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: "3%",
        alignItems: 'center'
    },
    textName: {
        fontSize: 11,
        opacity: 0.7
    },
    statusHolder: {
        paddingHorizontal: '5%',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: 'pink',
        borderWidth: 1,
        borderColor: 'pink',
        // paddingVertical: '0.5%'

    },
    statusText: {
        fontSize: 11,
        opacity: 0.7,
    },
    viewButtonHolder: {
        width: '30%',
        height: '48%',

    }

})