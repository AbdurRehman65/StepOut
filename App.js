import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaViewComponent } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
        <SafeAreaView>
        <Text>hello mensssssssssssssssssssssssssss</Text>
        <StatusBar style="auto" />
        </SafeAreaView>
      
   </TailwindProvider>
  );
}

