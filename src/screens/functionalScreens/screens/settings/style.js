import { Dimensions, StyleSheet } from "react-native";
import { globalStyles, screenPadding } from "../../../../globalConstants/styles";
const { width, height } = new Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    scrollStyle: {
        paddingHorizontal: screenPadding,
        // flex: 1,
        rowGap: 25,
        paddingVertical: screenPadding,
    },
    header: {
        flexDirection: 'row',
        alignItems: "center",
        margin: 0,
        height: height / 16,
        justifyContent: "center"
    },
    settingText: {
        fontSize: globalStyles.fontSizes.secondary,
        fontWeight: globalStyles.fontWeights.tertiary,
        colors: globalStyles.colors.tertiary
    },
    iconBack: {
        flex: .4
    },
    profileCardWrapper: {
        backgroundColor: globalStyles.colors.white,
        height: 130,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "2%",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#dedede",
        borderRadius: 5,
    },
    imageWrapper: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#dedede",
        width: 110,
        height: 110,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    imageNameNumberWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "space-around",
    },

    nameNumberWrapper: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        marginLeft: "2%"
    },
    name: {
        fontWeight: globalStyles.fontWeights.secondary,
        fontSize: globalStyles.fontSizes.secondary,
        color: globalStyles.colors.black
    },
    phoneNumber: {
        fontSize: 14,
        color: globalStyles.colors.secondaryGray
    },
    actionCardsWrapper: {
        backgroundColor: globalStyles.colors.white,
    },
    singleAction: {
        borderColor: "#dedede",
        borderWidth: 1,
        height: height / 13,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "3%",
        borderRadius: 5,
        paddingHorizontal: "1%"
    },
    nameIconWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        height: "55%"
    },
    actionName: {
        fontWeight: globalStyles.fontWeights.tertiary,
        fontSize: globalStyles.fontSizes.primary3,
        marginLeft: "3%",
        color: globalStyles.colors.black
    },
    modalHolder: {
        alignItems: "center",
        justifyContent: "center",
    },
    logoutButton: {
        backgroundColor: "pink",
        width: width / 5,
        height: height / 19,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    logoutButton: {
        borderRadius: 5,
    },
    cacenlButton: {
        borderRadius: 5,
    },
    buttonsHolder: {
        flexDirection: "row",
        width: "90%",
        height: "30%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "10%"
    },
    logOutModalText: {
        fontSize: 19,
        fontWeight: "500"
    },
    cancelText: {
        color: "green"
    },
    logoutText: {
        color: "red"
    },
    modalContainerStyle: {
        backgroundColor: 'white',
        height: height / 4,
        width: width / 1.2,
        borderRadius: 10,
        justifyContent: "space-around",
        alignItems: "center", alignSelf: "center"
    }

})