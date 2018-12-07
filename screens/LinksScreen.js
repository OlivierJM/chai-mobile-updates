import React from "react";
import { StyleSheet, Text, ActivityIndicator, Image } from "react-native";
import { resourceContext } from "../App";
import {
  Container,
  ListItem,
  Content,
  List,
  Left,
  Body,
  Right,
  Card,
  CardItem,
} from "native-base";

const baseUrl = 'http://localhost:3000'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Leaders",
    headerStyle: {
      backgroundColor: '#428cf4',
    },
  };

  render() {
    return (
      <resourceContext.Consumer>
        {({ leaders }) => (
          <Container>
            {!leaders.length ? (
              <ActivityIndicator />
            ) : (
              <Content>
                <List
                  dataArray={leaders}
                  renderRow={leader => (
                    <ListItem>
                      <Card>
                        <CardItem>
                          <Left>
                            <Body>
                              <Text>{leader.name}</Text>
                              <Text note>{leader.ext}</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image
                            source={{ uri: `${baseUrl}/cdn/storage/leaders/${leader._id}/original/${leader._id}.${leader.ext}` }}
                            style={{ width: 400, height: 400 }}
                          />
                        </CardItem>
                        <CardItem>
                          <Right>
                            <Text>{leader.path}</Text>
                          </Right>
                        </CardItem>
                        <CardItem>
                          <Text>{leader.userId}</Text>
                        </CardItem>
                      </Card>
                    </ListItem>
                  )}
                />
              </Content>
            )}
          </Container>
        )}
      </resourceContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
