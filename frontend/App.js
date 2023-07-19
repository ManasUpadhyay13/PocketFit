import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MyContext } from './context/MyContext';
import Demo from './Demo';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="auto" />

      <MyContext>
        <Demo />
      </MyContext>

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
