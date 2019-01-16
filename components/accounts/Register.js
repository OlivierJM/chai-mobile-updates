import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  View,
  Button,
  Text,
  Body
} from "native-base";
import { AsyncStorage } from 'react-native'
import Meteor from "react-native-meteor";

export default class Register extends Component {
  static navigationOptions = {
    title: "Register"
  };
  state = {
    name: "",
    phone: "",
    confirmPassword: "",
    password: "",
    error: ""
  };


  // get a promised token
  getToken = async () => {
    let token = '';
    try {
      token = await AsyncStorage.getItem('token') || 'none';
    } catch (error) {
      console.log(error.message);
    }
    return await token;
  }


  handleRegister = async () => {
    const { name, phone, confirmPassword, password } = await this.state;
    const userToken = await this.getToken()
    if (password.trim() !== confirmPassword.trim() || password.length < 6) {
      this.setState({
        error: "double check your password"
      });
      return;
    }
  
    const user = {
      username: phone,
      password,
      profile: {
        name,
        userToken,
      }
    };
    console.log(userToken)
    // register the user and take them to the home page
    await Meteor.call('addUser', user, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
        return;
      }
      return this.props.navigation.navigate("Login");
    });
  };
  render() {
    const { name, phone, confirmPassword, password, error } = this.state;
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input
                value={name}
                onChangeText={text => this.setState({ name: text })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Phone Number</Label>
              <Input
                keyboardType="phone-pad"
                value={phone}
                onChangeText={text => this.setState({ phone: text })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                value={password}
                secureTextEntry={true}
                onChangeText={text => this.setState({ password: text })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={text => this.setState({ confirmPassword: text })}
              />
            </Item>
          </Form>
          <Body style={{ marginTop: 25 }}>
            <Button onPress={this.handleRegister}>
              <Text>Register</Text>
            </Button>
          </Body>
          <Body>
            <Text style={{ color: "red" }}>{error.length ? error : null}</Text>
          </Body>
        </Content>
      </Container>
    );
  }
}