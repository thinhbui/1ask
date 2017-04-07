import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Title extends Component {
    constructor(props) {
        super(props)
        this.text
        this.current
    }

    render() {
        const { text, current } = this.props
        return (
            <View style={{
                flex: 1, backgroundColor: '#2f5947', flexDirection: 'row',
                alignItems: 'center', justifyContent: 'center'
            }}>
                <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 50, }}>‹</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: '4%', marginTop: '5%' }}>
                        <Text style={{ fontSize: 17, color: 'white' }}>Back</Text>
                    </View>

                </View>
                <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{text}</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'flex-end', marginRight: '3%' }}>
                    <Text style={{ color: 'white' }}>{current}/15</Text>
                </View>
            </View>
        )
    }
}
AppRegistry.registerComponent('OneAskIU', () => Title);
