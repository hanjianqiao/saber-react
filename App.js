/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native';

const data = {
  count: 0
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
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

export default class App extends Component {

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
        <WebView
        source={{uri: 'https://hanjianqiao.github.io/'}}
        style={{marginTop: 20}}
      />
      </View>
    );
  }
}
