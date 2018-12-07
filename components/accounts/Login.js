import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Row,
  Button,
  Text,
  Body
} from "native-base";
import { View } from 'react-native'
import Meteor from "react-native-meteor"

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login'
    }
  state = {
    username: "",
    password: "",
    error: ""
  }

  handleLogin = () => {
    const { username, password } = this.state
    const user = {
      username
    }
    Meteor.loginWithPassword(user, password, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
        return;
      }
      return this.props.navigation.navigate("Home");
    })
  }
  render() {
    const { username, password, error } = this.state;
    return (
      <Container style={{ backgroundColor: '#42b6f4' }}>
        <Content >
          <Form>
            <Item floatingLabel>
              <Label style={{ color: "white" }}>Phone Number</Label>
              <Input
                keyboardType="phone-pad"
                value={username}
                onChangeText={text => this.setState({ username: text })}
              />
            </Item>
            <Item floatingLabel last>
              <Label style={{ color: "white" }}>Password</Label>
              <Input
                secureTextEntry={true}
                value={password}
                onChangeText={text => this.setState({ password: text })}
              />
            </Item>
          </Form>
          <Body style={{ marginTop: 25 }}>
            <Button onPress={this.handleLogin}>
              <Text>Login</Text>
            </Button>
          </Body>
          <Body>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Text>Register</Text>
            </Button>
            <Text style={{ color: "red" }}>{error.length ? error : null}</Text>
          </Body>
        </Content>
      </Container>
    )
  }
}
