import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './../components/CustomDrawer';
import Icon from 'react-native-vector-icons/Entypo';
import HomeScreen from './HomeScreen';
import AddIssue from './AddIssue';
import tw from 'twrnc';
const Root = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <Icon name="home" size={25} style={tw` text-blue-900 my-1`}></Icon>
          ),
        }}
      />
      <Drawer.Screen
        name="AddIssue"
        component={AddIssue}
        options={{
          title: 'Add Issue',
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
  );
};

export default Root;
