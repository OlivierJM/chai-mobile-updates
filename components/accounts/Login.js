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
    state = {
        phone: '',
        password: ''
    }
  render() {
      const { phone, password } = this.state
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Phone Number</Label>
              <Input value={phone} onChangeText={text => this.setState({phone: text})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input value={password} onChangeText={text => this.setState({password: text})}/>
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
