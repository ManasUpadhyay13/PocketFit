import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import globalStyles from "../../globalStyles";
import Button from "../../components/Button";
import { AntDesign } from '@expo/vector-icons';


const Welcome = () => {
    return (
        <View style={globalStyles.container} >
            <View style={globalStyles.wrapper} >

                <Image
                    source={require("../../assets/images/welcome.png")}
                    style={{
                        width: 400,
                        height: 400
                    }}
                />

                <TouchableOpacity style={globalStyles.touchableOpacity} >
                    <Button text="Get Started" />
                    <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default Welcome