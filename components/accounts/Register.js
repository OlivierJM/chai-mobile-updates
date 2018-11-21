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
  Text, Body
} from "native-base";
import { Accounts } from 'react-native-meteor'

export default class Register extends Component {
    static navigationOptions = {
        title: 'Register'
    }
    state = {
        name: '',
        phone : '',
        confirmPassword: '',
        password: '',
        error: ''
    }

    handleRegister = () => {
        const { name, phone, confirmPassword, password } = this.state
        if (password.trim() !== confirmPassword.trim() || password.length < 6) {
            this.setState({
                error: 'double check your password'
            })
            return
        }
        const user = {
            username: phone,
            password,
            profile: {
                name
            }
        }
        // register the user and take them to the home page
        Accounts.createUser(user, err => {
            if (err) {
                this.setState({
                    error: err.reason
                })
                return
            }
            return this.props.navigation.navigate('Home')
        })

    }
  render() {
      const { name, phone, confirmPassword, password, error } = this.state
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
                onChangeText={text => this.setState({ password: text })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input 
                value={confirmPassword}
                onChangeText={text => this.setState({ confirmPassword: text })}
              />
            </Item>
          </Form>
          <Body style={{marginTop: 25}}>
            <Button onPress={this.handleRegister}>
                <Text>Register</Text>
            </Button>    
          </Body>
          <Body>
          <Text style={{color: 'red'}}>
                {error.length ? error : null}
            </Text>
          </Body>
        </Content>
      </Container>
    );
  }
}
