import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MyProvider } from './context/context'
import { NavigationContainer } from '@react-navigation/native';
import MenuNavigator from './MenuNavigator';
import AddScreen from './screens/AddScreen';


export default function App() {

  const [showMenuNavigator, setShowMenuNavigator] = useState(false)

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar hidden={true} />

      <MyProvider>

        <NavigationContainer>

          {
            showMenuNavigator ? (

              <MenuNavigator setShowMenuNavigator={setShowMenuNavigator} />
            ) : (
              <AddScreen setShowMenuNavigator={setShowMenuNavigator} />
            )
          }


        </NavigationContainer>

      </MyProvider>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
