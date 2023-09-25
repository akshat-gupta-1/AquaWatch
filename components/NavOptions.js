import { View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { XStack, Card, Theme, Text } from 'tamagui';
import tw from 'twrnc';
const data = [
  {
    id: 1,
    title: 'Add Issue',
    icon: 'camera',
    screen: 'AddIssueScreen',
  },
  {
    id: 2,
    title: 'View Map',
    icon: 'map',
    screen: 'MapScreen',
  },
];
const NavOptions = () => {
  return (
    <View>
      <XStack space={'$-3'}>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={tw`p-2 pb-8 pt-4`}>
              <Theme name="light_blue">
                <Card
                  width={120}
                  height={120}
                  theme="Card"
                  style={tw`flex justify-center `}
                >
                  <Icon
                    name={item.icon}
                    size={40}
                    style={tw`text-center text-blue-900 my-1`}
                  ></Icon>
                  <Text
                    style={tw`font-semibold text-center text-base`}
                    color={'$blue10Light'}
                  >
                    {item.title}
                  </Text>
                </Card>
              </Theme>
            </TouchableOpacity>
          )}
        />
      </XStack>
    </View>
  );
};

export default NavOptions;
