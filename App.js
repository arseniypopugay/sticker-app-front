import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {BottomNavigation, Toolbar} from 'react-native-material-ui';
import Container from "react-native-material-ui/src/Container";
import FriendList from "./Screens/FriendList";
import LoginScreen from "./Screens/LoginScreen";
import TopList from "./Screens/TopList";

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
        this.state = {
            show: false,
            active: "home",
            title: "Login",
            token: 0,
        };
        this.authorize = this.authorize.bind(this)

    }

    screenSwitcher(activeState) {
        switch (activeState) {
            case "top":
                return <TopList/>
            case "friends":
                return <FriendList/>
            case "home":
                return <Text>Home</Text>
            case "create":
                return <Text>Create</Text>
            default:
                return <Text>Smthing Else</Text>

        }
    }

    authorize(login) {
        this.setState({token: 1, title: "Your packs"})
    }

    render() {
        return (<Container>
                <Toolbar centerElement={this.state.title} style={{}}/>
                <View style={styles.container}>
                    {this.state.token ? this.screenSwitcher(this.state.active) : <LoginScreen auth={this.authorize}/>}
                </View>
                {this.state.token ? <BottomNavigation active={this.state.active} hidden={false}>
                    <BottomNavigation.Action
                        key="build"
                        icon="build"
                        label="Create"
                        onPress={() => this.setState({active: 'create', title: "Create pack"})}
                    />
                    <BottomNavigation.Action
                        key="home"
                        icon="home"
                        label="Your"
                        onPress={() => this.setState({active: 'home', title: "Your packs"})}
                    />
                    <BottomNavigation.Action
                        key="friends"
                        icon="people"
                        label="Friends"
                        onPress={() => this.setState({active: 'friends', title: "Friends packs"})}
                    />
                    <BottomNavigation.Action
                        key="settings"
                        icon="equalizer"
                        label="Top"
                        onPress={() => this.setState({active: 'top', title: "Top packs"})}
                    />
                </BottomNavigation>:
               null}
            </Container>

        );
    }

}

export default App;