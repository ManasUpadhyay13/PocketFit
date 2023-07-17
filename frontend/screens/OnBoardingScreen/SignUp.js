import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity , ScrollView } from 'react-native'
import globalStyles from '../../globalStyles'
import Credentials from '../../components/Credentials'
import { Touchable } from 'react-native'
import TextComponent from "../../components/TextComponent";

const SingUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [ name , setName ] = useState("")
    const [ confirmPassword , setConfirmPassword ] = useState("")

    return (
        <ScrollView contentContainerStyle ={globalStyles.container} >
            <View style={[globalStyles.wrapper, {
                justifyContent: "flex-end"
            }]} >

                <Image
                    source={require("../../assets/images/signup.png")}
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
                        value={name}
                        onChangeText={setName}
                        placeholder='Enter your name'
                    />

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

                    <Credentials
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder='Enter the password again'
                        secureTextEntry={true}
                    />
                </View>

                <TextComponent
                    text="Sign up to keep your data backed up"
                    color="#B79CF2"
                    fontSize={12}
                />
                <TextComponent
                    text="Already have an account ? Login"
                    color="black"
                    fontSize={12}
                />
                <TextComponent
                    text="Already have an account ? Login"
                    color="black"
                    fontSize={12}
                />
                <TextComponent
                    text="Already have an account ? Login"
                    color="black"
                    fontSize={12}
                />
                <TextComponent
                    text="Already have an account ? Login"
                    color="black"
                    fontSize={12}
                />

                <TouchableOpacity style={globalStyles.touchableOpacity}>
                    <TextComponent
                        text="Sign Up"
                    />
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default SingUp