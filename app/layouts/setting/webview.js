import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Modal, WebView
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';
import Title from '../../components/main_title';
import Profile from './profile';
import SettingItem from './setting_item';
import TextField from 'react-native-md-textinput';
export default class WebView extends Component {
    constructor(props) {
        super(props)
        if (this.props.value === '0') {
            this.state = {
                title: 'About 1ASK',
                url: 'http://1ask.vn/'
            };
        } else if (this.props.value === '1') {
            this.state = {
                title: 'privacy and term',
                url: 'http://expert.1ask.vn/dieu-khoan'
            };
        } else {
            this.state = {
                title: 'Notification',
                url: this.props.value
            };
        }
    }
    render() {
        const { username, icon, placeholder } = this.props
        return (
            <View
                style={{ flex: 1 }}
            >
                <Title text='Cường 7' />
                <View style={{ flex: 11 }}>
                    <Profile text='Cường 7' />
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput
                            defaultValue="Cường 7"
                            style={{ width: '85%', height: 35, borderColor: '#c4c6c6', borderWidth: 1, borderRadius: 5 }}
                            selectionColor='black'
                        />
                    </View>
                    <WebView />
                </View>

            </View>
        )
    }
}

AppRegistry.registerComponent('OneAskIU', () => WebView);
