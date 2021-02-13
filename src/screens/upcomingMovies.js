/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text, View, Image} from 'react-native';
import axios from 'axios';

const Movie = (props) => {
  return (
  <View style={{padding: 20}}>
    <Image source={{uri: props.poster_path}} style={{width:50, height:100}} />
    <Text> {props.title}</Text>
    <Text> Popularity: {props.popularity}</Text>
  </View>
  );
};

const UpcomingMovies = () => {
  const [data, setData] = useState([]);

  const BASE_URL = 'https://api.themoviedb.org/3';
  const api = axios.create({baseURL: BASE_URL});
  const api_key = '8b57e4ec0dd386f5530f4e2c6a8e92b9';
  const getUpcoming = api.get('movie/upcoming', {params: {api_key}});
  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  useEffect(() => {
    getUpcoming.then((response) => {
        setData(response.data.results);
    });
  }, []);

  if (data.length <= 0) {return <></>;}

  return (
    <SafeAreaView>
        <Text>Number of Upcoming Movies: {data.length}</Text>
        <FlatList
            data={data}
            renderItem={({item}) => <Movie title={item.title} popularity={item.popularity} poster_path={getImage(item.poster_path)} />}
            keyExtractor={(item) => item.id}
        />
        <Text>Load More</Text>
    </SafeAreaView> );
};

export default UpcomingMovies;
