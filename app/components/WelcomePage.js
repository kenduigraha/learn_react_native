'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,//kalau di android TouchableNativeFeedback
  TouchableOpacity
} from 'react-native';

import BtnCustom from 'react-native-button'

export default class LoginPage extends Component {
  render() {
    return (
      <Navigator
      renderScene={this.renderScene.bind(this)}
      navigator={this.props.navigator}
      navigationBar={
        <Navigator.NavigationBar style={{backgroundColor: '#cd853f', alignItems: 'center'}}
        routeMapper={NavigationBarRouteMapper} />
      } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#f5f5dc', justifyContent: 'center'}}>
        <Text style={{color: '#708090', fontSize: 24, fontWeight: "bold", marginBottom: 200}}>Welcome</Text>
        <BtnCustom
        style={{borderWidth: 1, borderColor: 'grey', backgroundColor: '#a52a2a', color: '#f0fff0', width: 200, marginBottom: 25}}>
          Login
        </BtnCustom>
        <BtnCustom
        style={{borderWidth: 1, borderColor: 'grey', backgroundColor: '#a52a2a', color: '#f0fff0', width: 200, marginBottom: 25}}>
          Register
        </BtnCustom>

        <BtnCustom
        onPress={this.gotoNext.bind(this)}
        style={{backgroundColor: '#800000', borderColor: 'grey', borderWidth: 1, borderRadius: 10, color: '#f0fff0', width: 200}}>
          Note List
        </BtnCustom>
      </View>
    );
  }
  gotoNext() {
    this.props.navigator.push({
      id: 'NoteListPage',
      name: 'Note List',
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Personal Note
        </Text>
      </TouchableOpacity>
    );
  }
};
