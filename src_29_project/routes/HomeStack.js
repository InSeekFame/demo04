
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home'
import TakePictureScreen from '../screens/Home/TakePicture'


const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

function NewScreen() {
    return (
        <View>
            <Text>New Screen</Text>
        </View>
    );
}

export default class HomeStack extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="TackPicture" component={TakePictureScreen} />
          <Stack.Screen name='New' component={ NewScreen } />
          <Stack.Screen name="Home" component={HomeScreen} 
          options={{ 
              title: '首页',
              headerStyle: {
                backgroundColor: '#00b38a',
                elevation: 0, //删除安卓上的阴影
                shadowOpacity: 0 //删除iOS下的阴影
              },
              headerTintColor: '#fff',
              headerRight: () => ( // navigation.navigate('Post', { name:'cqj' }) 
                // <TouchableOpacity onPress={ this.props.navigation.navigate("New") }>
                //   <Text style={{fontSize: 18, color: 'white', marginRight: 10}}>拍照</Text>
                // </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('New')}>
                              <View style={[styles.itemBase]}>
                                {/* <Icon name="scan-outline" size={40} color={'white'} /> */}
                                <Text style={[styles.fontBase]}>扫一扫</Text>
                              </View>
                            </TouchableOpacity>
              )
          }}
          />
        </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})


