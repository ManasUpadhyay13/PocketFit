import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import globalStyles from '../../globalStyles'
import Credentials from '../../components/Credentials'
import { Touchable } from 'react-native'
import TextComponent from "../../components/TextComponent";


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={globalStyles.container} >
            <View style={[globalStyles.wrapper, {
                justifyContent: "flex-end"
            }]} >

                <Image
                    source={require("../../assets/images/login.png")}
                    style={globalStyles.image}
                />

                <View
                    style={{
                        width: "100%",
                        gap: 30,
                        alignItems: "center"
                    }}
                >

                    <Credentials
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Enter the email'
                    />

                    <Credentials
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Enter the password'
                        secureTextEntry={true}
                    />
                </View>

                <TextComponent
                text="Don't have an account? Sign UP"
                color="black"
                fontSize={ 12}
                />

                <TouchableOpacity style={globalStyles.touchableOpacity}>
                    <TextComponent
                        text="Login"
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Login