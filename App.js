import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNav from "./navigator/RootNav"
import Stack from './navigator/Stack';
import Index from "./screens/index"
export default function App() {
  return (
    <Stack/>
    // <RootNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
