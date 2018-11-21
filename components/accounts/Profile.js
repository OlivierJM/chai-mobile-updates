import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body } from "native-base";

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  This is just a Profile card with some text to boot.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}