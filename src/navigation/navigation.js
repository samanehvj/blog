import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import UpcomingMovies from '../screens/upcomingMovies';
// import MainScreen from '../screens/mainScreen';
// import CelebrityScreen from '../screens/celebrityScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={UpcomingMovies} />
        {/* <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'Celebrities List'}}
        />
        <Stack.Screen name="Celebrity" component={CelebrityScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
