import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginView from '../screens/auth/LoginView';
const Stack = createNativeStackNavigator();

const AuthStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginView" component={LoginView} />
    </Stack.Navigator>
  );
};

export default AuthStack;
