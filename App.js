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
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './components/HomeStack';
import AddIssue from './screens/AddIssue';
import CustomDrawer from './components/CustomDrawer';
import Icon from 'react-native-vector-icons/Entypo';
import tw from 'twrnc';
export default function App() {
  const Drawer = createDrawerNavigator();
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
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
          >
            <Drawer.Screen
              name="HomeStack"
              component={HomeStack}
              options={{
                title: 'Home',
                drawerIcon: ({ focused, size }) => (
                  <Icon
                    name="home"
                    size={25}
                    style={tw` text-blue-900 my-1`}
                  ></Icon>
                ),
              }}
            />
            <Drawer.Screen
              name="Add Issue"
              component={AddIssue}
              options={{
                drawerIcon: ({ focused, size }) => (
                  <Icon
                    name="camera"
                    size={25}
                    style={tw`text-center text-blue-900 my-1`}
                  ></Icon>
                ),
              }}
            />
          </Drawer.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
