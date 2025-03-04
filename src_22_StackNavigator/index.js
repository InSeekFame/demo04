// In App.js in a new project

import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
  import { Button } from '@react-navigation/elements';


function HomeScreen(route) {
    const navigation = useNavigation();

    React.useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            alert('New post: ' + route.params?.post);
        }
    }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here ',
          });
        }}
      >
        Go to Details
      </Button>

      <Button onPress={() => navigation.navigate('Post', { name:'cqj' })}>
        Create post
      </Button>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button onPress={() => navigation.navigate('UseNavBtn', { name:'cqj' })}>
        go Use Btn
      </Button>
    </View>
  );
}

function DetailsScreen( {route} ) {
    const navigation = useNavigation();
    /* 2. Get the param */
    const { itemId, otherParam } = route.params;
    // navigation.setParams({
    //     itemId: Math.floor(Math.random() * 100),
    // })
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
            onPress={
            () =>
                navigation.push('Details', {
                itemId: Math.floor(Math.random() * 100),
                })
            }
        >
            Go to Details... again
        </Button>
        <Button onPress={() => navigation.goBack()}>Go back</Button>
        <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>
        <Button onPress={() => navigation.popToTop()}>
            Go back to first screen in stack
        </Button>
      </View>
    );
  }

  function CreatePostScreen({ route }) {
    const navigation = useNavigation();
    const [postText, setPostText] = React.useState(''); // 传值没有安装
  
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          onPress={() => {
            // Pass params back to home screen
            navigation.popTo('Home', { post: postText });
          }}
        >
          Done
        </Button>
      </>
    );
  }


  function UseNavBtnScreen() {
    const navigation = useNavigation();
    const [count, setCount] = React.useState(0);
  
    React.useEffect(() => {
      // Use `setOptions` to update the button that we previously specified
      // Now the button includes an `onPress` handler to update the count
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={() => setCount((c) => c + 1)}>Update count</Button>
        ),
      });
    }, [navigation]);
  
    return <Text>Count: {count}</Text>;
  }

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerRight: () => (
            <Button onPress={() => alert('This is a button!')}>Info</Button>
          ),
        }}
    >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
        <Stack.Screen 
            name="Details" 
            component={DetailsScreen} 
            options={{ title: '详情' }} 
            initialParams={{itemId:42} } 
        />
        <Stack.Screen name="Post" 
        component={CreatePostScreen} 
        initialParams={{name:'cl9421'} } 
        options={({route }) => ({
            title: route.params.name
        }) } />
        <Stack.Screen
        name="UseNavBtn"
        component={UseNavBtnScreen}
        options={{
          // Add a placeholder button without the `onPress` to avoid flicker
          headerRight: () => <Button>Update count</Button>,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
      <RootStack />
    // {/* </NavigationContainer> */}
  );
}