import { StyleSheet } from "react-native";



const globalStyles = StyleSheet.create({



    // styles for containers

    container: {
        flex: 1,
        width: '100%',
        padding : 20
    },
    wrapper: {
        width: '100%',
        height : "100%",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap : "wrap",
        gap : 20,
    },


    // styles for components

    image: {
        width : "100%",
        height : "40%"
    },
    touchableOpacity: {
        height: 50,
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "row",
        gap: 10,
        backgroundColor: "#A076F9",
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 7
    },



    // Styles for text

    textPrimary : {
        color :  "#A076F9"
    },
    textSecondary : {
        color : "#B79CF2"
    }
    

})


export default globalStyles