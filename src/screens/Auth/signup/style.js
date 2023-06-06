import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        backgroundColor: '#EDEFF1',
        flex: 1,
        // padding: '10%'
    },
    image: {
        width: 170,
        height: 170,
        resizeMode: "cover"
    },
    titlesHolder: {
        height: 150,
        paddingTop: "4%",
        justifyContent: "space-around"
    },
    uperText: {
    },
    title1: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500",
        fontFamily: "AstroSpace-0Wl3o",
        marginVertical: "2%"
    },
    title2: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "AstroSpace-0Wl3o"
    },
    description: {
        textAlign: 'center',
        opacity: 0.8,
        fontSize: 15,
        fontFamily: "AstroSpace-0Wl3o",
        marginVertical: "1%"

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
        alignItems: 'center',
        marginBottom: "3%"
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