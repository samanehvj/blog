import React from 'react';
import Text from '../components/Text';
import Button from '../components/Button';

import {
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  sm: {
    width: 450,
    height: 400,
    padding: 60, 
    marginBottom: 15, 
  },
  md: {
    width: 100,
    height: 100,
  },
  container: {
    backgroundColor: 'lightpink',
  },
});


const CelebrityScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.sm}
        source={{
          uri: `${route.params.img}`,
        }}
      />
     <Text>This is {route.params.name}'s profile</Text>
     </View>
  );
};


export default CelebrityScreen;
