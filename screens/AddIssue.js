import { View, Text } from 'react-native';
import React from 'react';
import CameraComponent from '../components/Camera';
import tw from 'twrnc';
const AddIssue = () => {
  return (
    <View style={tw`h-full`}>
      <CameraComponent></CameraComponent>
    </View>
  );
};

export default AddIssue;
