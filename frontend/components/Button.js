import React from "react"
import { View, Text } from "react-native"
import globalStyles from "../globalStyles"

const Button = ({ text }) => {
    return (
        <View
            style={{
                width: "70%",
                height: 50,
                borderRadius: 30,
                backgroundColor: '#F8AD9D',
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }}
        >
            <Text style={{ color: "white", fontSize: 20 }} >{text}</Text>
        </View>
    )
}

export default Button