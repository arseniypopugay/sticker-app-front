import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BottomNavigation } from 'react-native-material-ui';
import Container from "react-native-material-ui/src/Container";
import FriendList from "./Screens/FriendList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false, active: "friends"};

}
    screenSwitcher(activeState)
    {
        switch (activeState) {
            case "top":
                return <Text>Settings</Text>
            case "friends":
                return <FriendList/>
            default:
                return <Text>Smthing Else</Text>

        }
    }

    render() {
        return (
            <Container>
    <View style={styles.container}>
        {this.screenSwitcher(this.state.active)}
    </View>
            
         <BottomNavigation active={this.state.active} hidden={false} >
                <BottomNavigation.Action
                    key="build"
                    icon="build"
                    label="Create"
                    onPress={() => this.setState({ active: 'build' })}
                />
                <BottomNavigation.Action
                    key="home"
                    icon="home"
                    label="Your"
                    onPress={() => this.setState({ active: 'home' })}
                />
                <BottomNavigation.Action
                    key="friends"
                    icon="people"
                    label="Friends"
                    onPress={() => this.setState({ active: 'friends' })}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="equalizer"
                    label="Top"
                    onPress={() => this.setState({ active: 'top' })}
                />
            </BottomNavigation>
        </Container>

  );
    }

}

export default App;