import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Login from '../src/Screens/Login/Login';
//import SecondScreen from '../src/Screens/SecondScreen';
import Login from '../Screens/Login/Login'
import SecondScreen from '../Screens/SecondScreen/SecondScreen';
import ThirdScreen from '../ThirdScreen/ThirdScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation