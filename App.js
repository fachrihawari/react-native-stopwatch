/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';


export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsElapsed: 0,
      isIncrease: false
    }
  }

  getSeconds() {
    return ( '0' + this.state.secondsElapsed % 60 ).slice(-2)
  }

  getMinutes() {
    return ('0' + Math.floor( this.state.secondsElapsed / 60 )).slice(-2)
  }

  onPressStart() {
    var _t = this
    this.incrementer = setInterval(() => {
      _t.setState({
        secondsElapsed: _t.state.secondsElapsed + 1
      })
    }, 1000)
    this.setState({
      isIncrease: true
    })
  }
  onPressStop() {
    clearInterval(this.incrementer)
    this.setState({
      isIncrease: false
    })
  }
  onPressReset() {
    this.setState({
      secondsElapsed: 0
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Stopwatch
        </Text>
        <Text style={styles.secondsElapsed}>
          {this.getMinutes()}:{this.getSeconds()}
        </Text>
        <View  style={styles.actionButton}>
          <Button
            disabled={this.state.isIncrease}
            onPress={this.onPressStart.bind(this)}
            title="Start"
            color="#841584"
            accessibilityLabel="Start the stopwatch"
          />
          <Text>&nbsp;&nbsp;</Text>
          <Button
            disabled={!this.state.isIncrease}
            onPress={this.onPressStop.bind(this)}
            title="Stop"
            color="#841584"
            accessibilityLabel="Stop the stopwatch"
          />
          <Text>&nbsp;&nbsp;</Text>
          <Button
            disabled={!this.state.secondsElapsed || this.state.isIncrease}
            onPress={this.onPressReset.bind(this)}
            title="Reset"
            color="#841584"
            accessibilityLabel="Reset the Stopwatch"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButton: {
    flexDirection:'row', flexWrap:'wrap'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  secondsElapsed: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 40,
    marginBottom: 5,
  },
});
