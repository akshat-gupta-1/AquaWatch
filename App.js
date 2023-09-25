import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from './screens/Root';
import AddIssue from './screens/AddIssue';
import IssueUpload from './screens/IssueUpload';
export default function App() {
  const Stack = createNativeStackNavigator();
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Root"
              component={Root}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Camera"
              component={AddIssue}
              options={{ title: 'Add Issue' }}
            />
            <Stack.Screen
              name="IssueUpload"
              component={IssueUpload}
              options={{
                title: 'Upload Issue',
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
