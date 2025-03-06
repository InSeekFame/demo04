import React, { Component } from 'react'
import { Text, Button, Image , StyleSheet, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'


function NewScreen() {
    return (
        <View>
            <Text>New Screen</Text>
        </View>
    );
}

export default class index extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={[styles.container]}>
            <TouchableOpacity onPress={() => alert('扫一扫')}>
              <View style={[styles.itemBase]}>
                <Icon name="scan-outline" size={40} color={'white'} />
                <Text style={[styles.fontBase]}>扫一扫</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.itemBase]}>
                <Icon name="qr-code-outline" size={40} color={'white'} />
                <Text style={[styles.fontBase]}>付款码</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.itemBase]}>
                <Icon name="airplane-outline" size={40} color={'white'} />
                <Text style={[styles.fontBase]}>出行</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.itemBase]}>
                <Icon name="card-outline" size={40} color={'white'} />
                <Text style={[styles.fontBase]}>卡包</Text>
              </View>
            </TouchableOpacity>
          </View>

{/* // 轮播图 */}
<Swiper style={styles.wrapper} showsButtons={true} autoplay={true} >
              <Image 
                style = {[styles.slideImage]}
                source={require('../../images/1.jpg')}
              />
              <Image 
                style = {[styles.slideImage]}
                source={require('../../images/2.jpg')}
              />
              <Image 
                style = {[styles.slideImage]}
                source={require('../../images/3.jpg')}
              />
            </Swiper>
            
            <View>
              {/* <Button onPressIn={ () => navigation.navigate('News') }>
                go to news
            </Button> */}
            <Text>1234</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('New')}>
              <View style={[styles.itemBase]}>
                <Icon name="scan-outline" size={40} color={'white'} />
                <Text style={[styles.fontBase]}>扫一扫</Text>
              </View>
            </TouchableOpacity>
            </View>
            
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  itemBase: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b38a',
    height: 90,
    width: Dimensions.get('window').width / 4
  },
  fontBase: {
    color: '#fff',
    fontSize: 14
  },
  wrapper: {
    height: 200
  },
  slideImage: {
    height: 200,
    width: Dimensions.get('window').width
  }
})
