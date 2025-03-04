import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-vector-icons/Ionicons';


function HomeScreen(prop) {
  // 跳转方法prop.navigation.navigate参数是路由名称也就是Stack.Screen name
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>HomeScreen</Text>
    </View>
  );
}

function ProfileScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>NewsScreen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            if (route.name === 'Home') {
              iconName = focused ? 'pluscircleo' : 'pluscircle';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'infocirlceo' : 'infocirlce';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato', //当前项目激活后的颜色
          inactiveTintColor: 'gray', //未激活的颜色
        }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}


export default class index extends Component {

  render() {
    return (
        MyTabs()
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})
