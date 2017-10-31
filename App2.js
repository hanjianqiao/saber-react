/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Alert, StyleSheet, Text, View, Button, WebView, BackHandler, NativeModules } from 'react-native';
import { StackNavigator } from 'react-navigation';


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
        <Button
          onPress={() => NativeModules.BackManager.popLastViewController()}
          title="Exit chat"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Show App!</Text>
        <Button
          onPress={() => navigate('Show')}
          title="Show with Lucy"
        />
      </View>
    );
  }
}



const data = {
  count: 0
}


class ShowScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
    constructor() {
      super()
      this.state = {
         count: 0,
         running: 0
      }
   }

   updateText = () => {
      this.setState({count: this.state.count+1})
   }

   startLoop = () => {
      if(this.state.timer == null){
        this.state.timer = setInterval(this.updateText, 1000);
      }else{
        clearInterval(this.state.timer);
        this.state.timer = null;
      }
   }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <WebView
        source={{uri: 'https://hanjianqiao.github.io/'}}
        style={{marginTop: 20}}
      />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this.startLoop}
            title={""+this.state.count}
            color="#841584"
          />
        </View>
      </View>
    );
  }
}
import { HeaderBackButton } from 'react-navigation';

export const SimpleApp = StackNavigator(
{
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Show: { screen: ShowScreen },
},
{
  headerMode: 'screen',
  mode: 'modal',
  navigationOptions: ({navigation}) => ({
    gesturesEnabled: false,
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack()} />,
  }),
}
);

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
