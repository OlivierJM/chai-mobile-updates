import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import Meteor, { withTracker } from 'react-native-meteor';
import { Container, ListItem, Content, List, Left, Thumbnail, Body, Button, Right } from 'native-base'
import Home from '../components/HomeContainer' 

 
export default class HomeScreen extends Component {

  render() {
    return (
      <Home/>
    )
  }
}