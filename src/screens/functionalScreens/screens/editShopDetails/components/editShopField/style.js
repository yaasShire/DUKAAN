import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";

export default StyleSheet.create({
    centeredView: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        paddingVertical: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        height: 250,
        justifyContent: "space-around",
        marginTop: 300

    },
    button: {
        borderRadius: 5,
        padding: 5,
        elevation: 2,
    },
    updateBtn: {
        backgroundColor: globalStyles.colors.logoColor
    },
    canelButton: {
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    canelText: {
        color: "#000"
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        width: "90%"
    },
    buttonsWrapper: {
        flexDirection: "row",
        marginTop: "5%",
        justifyContent: "space-between",
        width: "90%"
    },
    btnText: {
        color: "#fff"
    }
});
