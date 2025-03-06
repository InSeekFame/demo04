import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeStack'
import NewsScreen from './NewsStack'
import UserScreen from './UserStack'

const Tab = createBottomTabNavigator();

export default class Index extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'News') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'User') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false // 隐藏tab的导航，不然会有两个重复的导航 
        })} 
        tabBarOptions={{
          activeTintColor: 'tomato', //当前项目激活后的颜色
          inactiveTintColor: 'gray', //未激活的颜色
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

