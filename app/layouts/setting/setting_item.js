import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class SettingItem extends Component {

    render() {
        const { text, icon, placeholder, isBorderBottom, onPress } = this.props
        return (
            <TouchableOpacity
                onPress={onPress}
                style={{
                    width: '100%', flexDirection: 'row', height: 45,
                    alignItems: 'center', justifyContent: 'center',

                }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('../../images/icon_setting.png')} />

                </View>
                <View style={{
                    flex: 8,
                    width: '100%', flexDirection: 'row', height: '100%',
                    alignItems: 'center', justifyContent: 'center',
                    borderBottomWidth: isBorderBottom == 0 ? 0 : 1, borderBottomColor: '#c0c4c4'
                }}>
                    <View style={{ flex: 7, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'row', }}>
                        <View style={{ flex: 6, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 5 }}>
                            <Text >{text}</Text>
                        </View>
                        <View style={{ flex: 6, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ color: '#c0c4c4' }} >{placeholder}</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#c0c4c4' }}>›</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
AppRegistry.registerComponent('OneAskIU', () => SettingItem);
