import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrowsePodcastView from '../screens/app/BrowsePodcastView';
import PodcastView from '../screens/app/PodcastView';
const Stack = createNativeStackNavigator();

const AppStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BrowsePodcastView" component={BrowsePodcastView} />
      <Stack.Screen name="PodcastView" component={PodcastView} />
    </Stack.Navigator>
  );
};

export default AppStack;
