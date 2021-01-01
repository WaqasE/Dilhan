import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Tab from './AppNavigator'
import Habit from '../screens/Habit'
import Counter from '../screens/Counter'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Tab" screenOptions={{headerShown:false,...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="Tab" component={Tab} />
            <Stack.Screen name="Habit" component={Habit} />
            <Stack.Screen name="Counter" component={Counter} />
    </Stack.Navigator>
  );
}