import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: '10%',
        paddingVertical: "10%"
    },
    textHolder: {
        padding: '10%'
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: "center"
    },
    imageHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 180,
        resizeMode: 'contain'
    },
    textInputHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    buttonHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    }
})