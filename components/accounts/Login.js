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

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Body>
              <Button transparent>
                  <Text>Login</Text>
              </Button>    
          </Body>
          <Body>
              <Button transparent onPress={() => this.props.navigation.navigate('Register')}>
                  <Text>Register</Text>
              </Button>    
          </Body>
        </Content>
      </Container>
    );
  }
}
