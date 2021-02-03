import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>This is {route.params.name}'s profile</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
