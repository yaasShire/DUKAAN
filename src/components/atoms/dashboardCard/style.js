import { StyleSheet } from "react-native";
export default StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        width: 180,
        height: 100,
        borderRadius: 5,
        paddingHorizontal: '3%',
        marginRight: 10
    },
    dollarNumberHolder: {
        flexDirection: 'row'
    },
    dollarSign: {
        opacity: 0.5,

    },
    dollarNumber: {
        fontSize: 25,
        fontWeight: "800"
    },
    description: {
        opacity: 0.6
    },
    contentHolder: {
        justifyContent: 'space-between',
        flex: 1,
        paddingVertical: '10%'
    },
})