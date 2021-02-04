import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MyView } from '@mylib'

export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="heading" style={styles.marginBottom}>
        Welcome! Open up App.tsx to start working on your app!
      </Text>
      <MyView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 40,
  }
});
