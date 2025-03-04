
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScreen from '../screens/News'


const Stack = createNativeStackNavigator();

export default class NewsStack extends Component {
  render() {
    return (
        // <Stack.Navigator > // tab.navigator包过不用再包
            <Stack.Screen name="News" component={NewsScreen} 
                options={{ 
                    title: '新闻' 
                }} 
            />
        // </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})


