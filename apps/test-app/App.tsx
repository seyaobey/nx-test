import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// making sure exists in the application
console.log('MaterialCommunityIcons', MaterialCommunityIcons);

export default function App() {
  return (
    <View style={styles.container}>
      <Text testID="heading" style={styles.marginBottom}>
        Welcome! Open up App.tsx to start working on your app!
      </Text>
      <MaterialCommunityIcons style={styles.marginBottom} name="account-edit" size={24} color="black" />
      <TextInput label="name" right={<TextInput.Icon name='close' />} />
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
