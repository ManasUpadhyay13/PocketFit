import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MyProvider } from './context/context'
import { NavigationContainer } from '@react-navigation/native';
import MenuNavigator from './MenuNavigator';


export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="auto" />

      <MyProvider>

        <NavigationContainer>

          <MenuNavigator/>

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
    paddingTop: 50,
  },
});
