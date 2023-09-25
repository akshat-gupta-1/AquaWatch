import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import useImageStore from '../stores/imageStore';
import { Stack, Card, Text, ToggleGroup, XStack, Button, Theme } from 'tamagui';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/AntDesign';
const IssueUpload = ({ navigation }) => {
  const image = useImageStore((state) => state.image);
  return (
    <Stack backgroundColor={'$blue3Dark'} flex={1} style={tw`items-center`}>
      <Card
        width={300}
        height={300}
        backgroundColor={'white'}
        style={tw`mt-10`}
      >
        <Image
          source={{ uri: image }}
          style={tw`h-[300px] w-[300px] rounded-md`}
        />
      </Card>
      <View style={tw`flex-row items-center mt-6 justify-start w-full ml-16`}>
        <Icon name="tags" size={28} style={tw`text-white`} />
        <Text style={tw`font-medium text-base`}>Tags</Text>
      </View>
      <XStack
        flexDirection="row"
        alignItems="center"
        justifyContent="start"
        space={'$10'}
        style={tw`w-full pl-10 pr-10 pt-4`}
        theme="dark_blue"
      >
        <ToggleGroup type="multiple" unstyled>
          <ToggleGroup.Item
            value="Water Logging"
            style={tw`flex rounded-l-md rounded-r-md pt-2 pb-2 w-auto mr-2`}
          >
            <Text style={tw`w-full`}>Water Logging</Text>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="Sewage"
            style={tw`flex rounded-l-md rounded-r-md pt-2 pb-2 w-auto mr-2`}
          >
            <Text style={tw`w-full`}>Sewage</Text>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="Drainage"
            style={tw`flex rounded-l-md rounded-r-md pt-2 pb-2 w-auto`}
          >
            <Text style={tw`w-full`}>Drainage</Text>
          </ToggleGroup.Item>
        </ToggleGroup>
      </XStack>
      <XStack
        flexDirection="row"
        alignItems="center"
        justifyContent="start"
        space={'$10'}
        style={tw`w-full pl-10 pr-10 pt-4`}
        theme="dark_blue"
      >
        <ToggleGroup type="multiple" unstyled>
          <ToggleGroup.Item
            value="Water Quality"
            style={tw`flex rounded-r-md pt-2 pb-2 w-auto mr-2`}
          >
            <Text style={tw`w-full`}>Water Quality</Text>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="Water Pipe"
            style={tw`flex rounded-l-md rounded-r-md pt-2 pb-2 w-auto mr-2`}
          >
            <Text style={tw`w-full`}>Water Pipe</Text>
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="Flood"
            style={tw`flex rounded-l-md  pt-2 pb-2 w-auto`}
          >
            <Text style={tw`w-full`}>Flood</Text>
          </ToggleGroup.Item>
        </ToggleGroup>
      </XStack>
      <XStack
        flexDirection="row"
        alignItems="center"
        justifyContent="start"
        space={'$10'}
        style={tw`w-full pl-10 pr-10 pt-4`}
        theme="dark_blue"
      >
        <ToggleGroup type="multiple" unstyled>
          <ToggleGroup.Item
            value="Pot Hole"
            style={tw`flex rounded-r-md pt-2 pb-2 w-auto mr-2`}
          >
            <Text style={tw`w-full`}>Pot Hole</Text>
          </ToggleGroup.Item>
        </ToggleGroup>
      </XStack>
      <TouchableOpacity style={tw`w-full pl-8 pr-8 mt-10`}>
        <Theme name="light_blue">
          <Button
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            Upload Image
          </Button>
        </Theme>
      </TouchableOpacity>
    </Stack>
  );
};

export default IssueUpload;
