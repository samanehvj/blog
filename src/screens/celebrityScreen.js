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

const styles = StyleSheet.create({
  sm: {
    width: 400,
    height: 400,
  },
  md: {
    width: 100,
    height: 100,
  },
});

const CelebrityScreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text style={{padding: 40,margin:30,color:'red'}}>This is {route.params.name}'s profile</Text>
      <Image
        style={styles.sm}
        source={{
          uri: `${route.params.img}`,
        }}
      />
    </SafeAreaView>
  );
};

export default CelebrityScreen;
