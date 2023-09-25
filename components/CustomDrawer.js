import { View, SafeAreaView } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import tw from 'twrnc';
import { Text } from 'tamagui';
function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={tw`flex flex-row p-2 pl-4 pt-4 pb-4`}>
        <Text color={'$blue11Light'} style={tw`font-bold text-2xl`}>
          Aqua
        </Text>
        <Text color={'black'} style={tw`font-bold text-2xl`}>
          Watch
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
