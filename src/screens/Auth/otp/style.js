import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '10%'
    },
    mainHolder: {
        flex: 1,
    },
    imageHolder: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    otpImage: {
        width: 200,
        height: 200,
        resizeMode: "cover"
    },
    textHolder: {
        padding: '5%',
        margin: '5%'
    },
    otpText: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center"
    },
    otpFieldsHolder: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '10%',
        paddingHorizontal: "3%"

    },
    buttonHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

})