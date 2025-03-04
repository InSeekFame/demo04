import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Alert } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';

export default class index extends Component {

    getData = () => {
        let key = "f77c08f422a14f2abd93cd2cd41227e4"
        let location = "112.22,39.222"
        const url = `https://api.qweather.com/v7/weather/3d?key=${key}&location=${location}`
        
        fetch(url, {
            method: 'GET'
        })
        .then(res => res.json()) // json转化
        .then((res) => {
            console.log(res)
            Alert.alert('成功', '请求成功')
        }).catch((err) => {
            Alert.alert('报错', JSON.stringify(err))
        })
    }

  render() {
    return (
      <View style={[styles.container]}>
        <Icon name="pluscircleo" size={30} color="#900" />
        <Button title='点击获取数据' onPress={this.getData} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
