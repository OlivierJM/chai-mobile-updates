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
  Text, Body
} from "native-base";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Body>
              <Button transparent>
                  <Text>Login</Text>
              </Button>    
          </Body>
        </Content>
      </Container>
    );
  }
}
