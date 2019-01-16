import React from "react";
import { Text, ActivityIndicator, Image } from "react-native";
import { resourceContext } from "../App";
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  List
} from "native-base";
import format from 'date-fns/format'
import  { styles } from './DetailsScreen'
import SERVER_URL from '../config'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Leaders",
    headerStyle: {
      backgroundColor: '#428cf4',
    },
    headerTintColor: '#fff',
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
                    <Card>
                    <CardItem>
                      <Left>
                        <Body>
                          <Text>{leader.meta.name}</Text>
                          <Text note>{leader.meta.position}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem>
                       <Image
                        source={{ uri: `http://${SERVER_URL}/cdn/storage/leaders/${leader._id}/original/${leader._id}.${leader.ext}` }}
                        style={styles.image}
                        esizeMode={'contain'}
                      /> 
                    </CardItem>
                      <CardItem>
                        <Text>{leader.meta.department}</Text>
                    </CardItem>
                  </Card>
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
