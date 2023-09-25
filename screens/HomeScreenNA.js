import { View, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { Text } from 'tamagui';
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <View style={tw`flex flex-row p-2 pt-4`}>
          <Text color={'$blue11Light'} style={tw`font-bold text-2xl`}>
            Aqua
          </Text>
          <Text color={'black'} style={tw`font-bold text-2xl`}>
            Watch
          </Text>
        </View>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
