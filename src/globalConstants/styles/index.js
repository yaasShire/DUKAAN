import { Dimensions } from "react-native";
const { height, width } = new Dimensions.get('screen')

const fontSizes = {
    primary1: 10,
    primary2: 13,
    primary3: 14,
    secondary: 18,
    tertiary: 20
};

const fontWeights = {
    primary: 500,
    secondary: 600,
    tertiary: 700
};
const colors = {
    primaryGray: "#e1e1e3",
    secondaryGray: "#8d8f8e",
    tertiary: "#000",
    miniPrimary: "#fff",
    orange: "#FFA500",
    green: "#51b097",
    blue: "#0ca0f5",
    logoColor: "#23baab",
    bgColor: "#01061c",
    primaryColorRGB: "rgba(35, 186, 171,.5)"
}

const style = {
    whiteMode: {
        primarybgColor: "#fefefe",
        secondaryColor: "#ffffff",
    },
    darkMode: {

    }

}

export const screenPadding = 10
export const HeightDimension = height
export const WidthDimension = width

export const globalStyles = {
    fontSizes, fontWeights, colors, style
}