import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const MyView = () => {
  return (
    <View>
      <MaterialCommunityIcons name="account-edit" size={24} color="black" />
      <TextInput label="name" right={<TextInput.Icon name='close' />} />
    </View>
  );
  }