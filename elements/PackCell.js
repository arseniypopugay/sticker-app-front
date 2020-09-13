import React from 'react';
import {View, Text, Image} from "react-native";
import {Card, Toolbar, Subheader, Avatar, Button} from 'react-native-material-ui';
import Container from "react-native-material-ui/src/Container";

class PackCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <Container style={{height: 40}}>
            <View style={{height: 40, width: "100%", borderColor: "gray", flexDirection: "row"}}>
                <Card style={{height: 40}}>
                    <Button disabled text={this.props.title} style={{height: 40}}/>
                </Card>
                {
                    this.props.stickers ? this.props.stickers.map(
                        (sticker, index) => {
                            if (index < 3)
                                return <Avatar
                                    size={40}
                                    image={<Image
                                        style={{width: 40, height:40}}
                                        source={{
                                            uri: sticker.url
                                        }}
                                    />}
                                />
                        }
                        ) :
                        <Text>Loading....</Text>
                }
            </View>
                </Container>
        )
    }
}

export default PackCell;