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

  handleRegister = () => {
    const { name, phone, confirmPassword, password } = this.state;
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
        name
      }
    };
    // register the user and take them to the home page
    Meteor.call('addUser', user, err => {
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

// export default withTracker(() => {
//   Meteor.subscribe('numbers')
//   return {
//     numbers: Meteor.Collection('numbers').find()
//   }
// })(Register)