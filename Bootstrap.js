import { AppRegistry } from 'react-native'
import { App } from './App'

export default class {
  static run () {
    AppRegistry.registerComponent('Stopwatch', () => App);
  }
}