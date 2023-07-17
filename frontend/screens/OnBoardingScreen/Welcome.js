import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import globalStyles from "../../globalStyles";
import { AntDesign } from '@expo/vector-icons';
import TextComponent from "../../components/TextComponent";

const Welcome = () => {
    return (
        <View style={globalStyles.container} >
            <View style={[globalStyles.wrapper, {
                justifyContent: "flex-end"
            }]} >

                <Image
                    source={require("../../assets/images/welcome.png")}
                    style={globalStyles.image}
                />

                <View
                    style={{
                        alignItems: "center",
                        gap: 10,
                    }}
                >


                    <TextComponent
                        text="Welcome to"
                        color="black"
                    />

                    <TextComponent
                        text="POCKET KIT"
                        color="#A076F9"
                        fontWeight={800}
                        fontSize={30}
                    />

                    <TextComponent
                        text="Your all in one solution for all your budgeting needs"
                        color="black"
                    />

                </View>


                <TouchableOpacity
                    style={globalStyles.touchableOpacity}
                    
                >
                    <TextComponent text="Get started" fontWeight={600} />
                    <AntDesign name="arrowright" size={24} color="white" />
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default Welcome