import React from 'react';
import Button from '../components/Button';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
  },
  button: {
    backgroundColor: 'beige',
  }
});

const MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[
          {
            page: 'Celebrity',
            name: 'Golshifte Farahani',
            img:
              'http://www.boxnewsbox.com/wp-content/uploads/2020/01/Snap160.jpg',
          },
          {
            page: 'Celebrity',
            name: 'Dara Hayayi',
            img: 'https://files.asemooni.com/storage/cdn/2019/06/dara-hayai16.jpg',
          },
          {
            page: 'Celebrity',
            name: 'Elnaz Shakerdost',
            img: 'https://baharfal.com/wp-content/uploads/2019/12/Elnaz-Shakerdoost-Motreb-2.jpg',
          },
          {
            page: 'Celebrity',
            name: 'Reza Golzar',
            img: 'https://i.pinimg.com/originals/c0/6d/73/c06d73eea6bb76804005a5bdd7305b6a.jpg',
          },
          {
            page: 'Celebrity',
            name: 'Mahlagha Jabari',
            img: 'https://u6c3f6j7.rocketcdn.me/wp-content/uploads/2017/10/Mahlagha-Jaberi-Height-Age-Weight-Measurement-Biography-Net-Worth.jpg',
          },
        ]}
        renderItem={({item}) => (
          <View style={styles.button}>
          <Button
              title={'Go to ' + item.name}
              onPress={() =>
                navigation.navigate('Celebrity', {
                  name: item.name,
                  img: item.img,
              })
            }
          />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
