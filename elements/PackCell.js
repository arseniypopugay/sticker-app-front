import React from 'react';
import {View, Text, Image} from "react-native";
import {Card, Toolbar, Subheader, Avatar} from 'react-native-material-ui';

class PackCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <View style={{height: 50, width: "80%", borderColor: "gray", padding: 10}}>
                <Card style={{}}>
                    <Toolbar centerElement={<Text>{this.props.title}</Text>}
                             rightElement=
                                 {this.props.stickers ? this.props.stickers.map((sticker, index) => {
                                         if (index < 2)
                                             return <Avatar style={{backgroundColor: "red"}}
                                                            image={<Image
                                                                style={{width: 40, height: 40}}
                                                                source={{
                                                                    uri: 'https://media.moddb.com/images/games/1/64/63869/work-in-progess.png',
                                                                }}
                                                            />}
                                                            // icon="grade"
                                                            size={40}/>
                                     }) :
                                     <Avatar style={{backgroundColor: "red"}} icon={"grade"} size={30}/>}


                    />
                    {/*<Text>{this.props.title}</Text>*/}
                </Card>
            </View>
        )
    }
}

export default PackCell;