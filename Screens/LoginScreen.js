import React from "react";
import {View, Text, TextInput} from "react-native";
import {Button} from "react-native-material-ui";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
        }
    }

    render() {

        return (
            <View>
                <Text style={{paddingBottom: 8}}>Login</Text>
                <TextInput
                    style={{height: 25, borderColor: 'gray', borderWidth: 1, paddingBottom: 5}}
                    onChangeText={text => this.setState({login: text})}
                    value={this.state.login}
                />
                <Button primary text="Confirm" onPress={() => this.props.auth(this.state.login)}/>
            </View>
        )
    }
}

export default LoginScreen;