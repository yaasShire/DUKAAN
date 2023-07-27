import { StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../globalConstants/styles";
export default StyleSheet.create({
    container: {
        flex: 1,
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
        alignItems: 'center',
        width: "100%",
        padding: screenPadding,
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
        marginBottom: "10%"
    },
    textLogin1: {
        // opacity: 0.5,
        marginRight: 2,
        color: globalStyles.colors.secondaryGray
    },
    textLogin2: {
        color: 'blue',
        fontWeight: '600'
    },
    errorWrapper: {
        alignItems: 'center',
        marginVertical: "2%"
    },
    errorText: {
        color: "red",
        fontSize: 17
    }
})