import React from 'react';
import {Text, View} from 'react-native';
import PackCell from "../elements/PackCell";

class TopList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        for (let i = 0; i < 7; i++)
            this.setState(state => {
                const list = [...state.list, {"title": i, "stickers": [{id: 0}, {id: 1}, {id:2}, {id:3}]}];

                return {list}
            })
    }

    render() {
        return (<View >
                {this.state.list.length ?
                    this.state.list.map(pack => {
                        return <PackCell title={pack.title} stickers={pack.stickers}/>
                    }) :
                    <Text>Lol</Text>
                }
            </View>
        )
    }
}

export default TopList;