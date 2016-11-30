'use strict'

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Navigator,
  TouchableHighlight,//kalau di android TouchableNativeFeedback
  TouchableOpacity
} from 'react-native'
import BtnCustom from 'react-native-button'

export default class AddNotePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeContent = this.onChangeContent.bind(this)
  }

  render(){
    return(
      <Navigator
      renderScene={this.renderScene.bind(this)}
      navigator={this.props.navigator}
      navigationBar={
        <Navigator.NavigationBar style={{backgroundColor: '#cd853f', alignItems: 'center'}}
        routeMapper={NavigationBarRouteMapper} />
      } />
    )
  }

  onChangeTitle(title){
    this.setState({title})
  }

  onChangeContent(content){
    this.setState({content})
  }

  onAddPress(){
    let title = this.state.title.trim()
    let content = this.state.content.trim()

  }

  renderScene(route, navigator) {
    return(
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#f5f5dc', justifyContent: 'center'}}>
        <Text style={{
          marginBottom: 30,
          textAlign: 'center'
        }}>
          Add New Note
          {this.state.title}
        </Text>

        <TextInput
          style={{
            height: 40,
            width: 300,
            backgroundColor: 'cornsilk',
            borderColor: 'olive',
            borderWidth: 1,
            alignSelf: 'center'
          }}
          placeholder="Add Title"
          onChangeText={this.onChangeTitle}
        />

        <TextInput
          style={{
            height: 100,
            width: 300,
            backgroundColor: 'cornsilk',
            borderColor: 'olive',
            borderWidth: 1,
            paddingTop: 10,
            paddingLeft: 0,
            marginTop: 20,
            alignSelf: 'center'
          }}
          placeholder="Add Note's Content"
          onChangeText={this.onChangeContent}
        />

        <Button
          onPress={this.onAddPress}
          title="Add"
          color="#841584"
          accessibilityLabel="Add"
        />
        <Button
          onPress={() => navigator.parentNavigator.pop()}
          title="Cancel"
          color="#841584"
          accessibilityLabel="Cancel"
        />
      </View>
    )
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <BtnCustom
      onPress={() => navigator.parentNavigator.pop()}
      style={{color: 'white', margin: 10, fontSize: 16}}>
        Back
      </BtnCustom>
    )
  },
  RightButton(route, navigator, index, navState) {
    return null
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
