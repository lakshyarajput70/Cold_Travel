import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import AppNavigation from './src/navigation/AppNavigation';


export default function App() {
  return (
      <AppNavigation />
  );
}
