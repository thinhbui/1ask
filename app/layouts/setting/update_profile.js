import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Modal
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';
import Title from '../../components/main_title';
import Profile from './profile';
import SettingItem from './setting_item';
// import TextField from 'react-native-md-textinput';
export default class UpdateProfile extends Component {
    renderPage() {
        
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
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={2} style={{ textAlign: 'center' }}> ljdshfha adjfha dfkj kasd fk dfkajhskjh asdkhaskfhasf as faks ka sfks ka sf asf asf as f</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={Actions.pop} style={{ height: '80%', width: '60%', backgroundColor: 'rgb(23,93,81)', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                <Text style={{ color: 'white' }}> Save change</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 7, }}></View>
                </View>

            </View>
        )
    }
}

AppRegistry.registerComponent('OneAskIU', () => UpdateProfile);
