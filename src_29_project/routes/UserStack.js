
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from '../screens/User'


const Stack = createNativeStackNavigator();

export default class UserStack extends Component {
  render() {
    return (
        // <Stack.Navigator >
            <Stack.Screen name="User" component={UserScreen} 
                options={{ 
                    title: '用户'
                }} 
            />
       // </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})


