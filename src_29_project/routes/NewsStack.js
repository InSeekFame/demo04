
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScreen from '../screens/News'


const Stack = createNativeStackNavigator();

export default class NewsStack extends Component {
  render() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="News" component={NewsScreen} 
                options={{ 
                  title: '新闻',
                  headerStyle: {
                    backgroundColor: '#00b38a',
                    elevation: 0, //删除安卓上的阴影
                    shadowOpacity: 0 //删除iOS下的阴影
                  },
                  headerTintColor: '#fff'
              }}
            />
        </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})


