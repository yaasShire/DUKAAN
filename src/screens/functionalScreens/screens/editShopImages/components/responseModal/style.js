import { StyleSheet } from "react-native";
import { globalStyles } from "../../../../../../globalConstants/styles";
export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        height: 220,
        paddingVertical: 20
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
        fontSize: 20
    },
    divider: {
        height: 1,
        width: "100%",
        backgroundColor: globalStyles.colors.secondaryGray,
        marginTop: 10,
        opacity: .5,
        marginVertical: 20
    },
    checK_Message: {
        justifyContent: "center",
        alignItems: "center"
    },
    btnWrapper: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    btnOk: {
        borderRadius: 3,
        width: "90%",
        height: 50
    }
});