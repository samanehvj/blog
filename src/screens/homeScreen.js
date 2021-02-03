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

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {
            name: 'Jane',
          })
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
