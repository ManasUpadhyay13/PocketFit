import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/OnBoardingScreen/Welcome';
import Login from '../screens/OnBoardingScreen/Login';
import SingUp from '../screens/OnBoardingScreen/SignUp';

const Stack = createStackNavigator()


const OnBoardingNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen
                    name='WelcomeScreen'
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                /> */}

                {/* <Stack.Screen
                name='LoginScreen'
                component={Login}
                options={{
                    headerShown : false
                }}
                /> */}

                <Stack.Screen
                    name='SignUpScreen'
                    component={SingUp}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default OnBoardingNavigator