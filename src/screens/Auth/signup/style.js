import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: '#EDEFF1',
        flex: 1,
        // padding: '10%'
        marginBottom: '3%'
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: "cover"
    },
    titlesHolder: {
        paddingVertical: '8%'
    },
    title1: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500"
    },
    title2: {
        fontSize: 30,
        fontWeight: "700",
        textAlign: "center"
    },
    description: {
        textAlign: 'center',
        opacity: 0.8,
        fontSize: 15
    },
    imageHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fieldsHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    segment: {
        width: 100,
        backgroundColor: 'gray',
        height: 2,
        opacity: 0.5
    },
    segmentHolder: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: '12%'
    },
    optionText: {
        opacity: 0.5
    },
    signupOptionCardsHolder: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    loginHolder: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin1: {
        opacity: 0.5,
        marginRight: 2
    },
    textLogin2: {
        color: 'blue',
        fontWeight: '600'
    }
})