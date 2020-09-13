import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import PackCell from "../elements/PackCell";

class TopList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        for (let i = 0; i < 21; i++)
            this.setState(state => {
                const list = [...state.list, {
                    "title": "asdfjkdshfjds" + i,
                    "stickers": [
                        {url: "https://www.parazitakusok.ru/images/item/3380/mod.jpg"},
                        {url: "https://images.squarespace-cdn.com/content/v1/582e240b6b8f5b2f729698cb/1582905187306-WFY0Z98824MRFHIG33O1/ke17ZwdGBToddI8pDm48kLFb0BmzbMB_4ekxZCTfIXx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfenCnGTUqHk0sNSlNsBviPkl4FWjHKUq2ze-El2WwN87fCd9p1sN9vDjWfapJK9zg/Rock%2BOn.jpg"},
                        {url: "https://assets.bigcartel.com/product_images/246949307/SurfShark-sticker_display.jpg?auto=format&fit=max&w=1000"},
                        {url: "https://cdn.mec.ca/medias/sys_master/high-res/high-res/9041934745630/6005547-NOC02.jpg" }
                    ]
                }];

                return {list}
            })
    }

    render() {
        return (<ScrollView style={{flex: 0.7}}>
                {this.state.list.length ?
                    this.state.list.map(pack => {
                        return <PackCell title={pack.title} stickers={pack.stickers}/>
                    }) :
                    <Text>Lol</Text>
                }
            </ScrollView>
        )
    }
}

export default TopList;