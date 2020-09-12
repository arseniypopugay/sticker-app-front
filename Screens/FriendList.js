import React from 'react';
import {Image, StyleSheet, View, Text} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 375,
    height: 220,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

class FriendList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};

    }


    render(){
        return (
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: 'https://media.moddb.com/images/games/1/64/63869/work-in-progess.png',
                    }}
              />
              <Text>Our developer tries his best to make all parts of app work:)</Text>
            </View>
        )
    }

}

export default FriendList;