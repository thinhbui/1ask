import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    Actions, ActionConst
} from 'react-native-router-flux';
export default class Title extends Component {
    renderIcon() {
        if (this.props.icon) {
            return this.props.icon();
        }
        return (
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../images/ic_backTop.png')} />
                <Text style={{ color: 'white', marginLeft: 5 }}>Back</Text>
            </View>
        );
    }
    render() {
        const { text, textLeft, onBackPress } = this.props
        return (
            <View style={{
                flex: 1, backgroundColor: 'rgb(23,93,81)', flexDirection: 'row',
                alignItems: 'center', justifyContent: 'center'
            }}>
                <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={onBackPress}>
                        {this.renderIcon()}
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{text}</Text>
                </View>
                <View style={{
                    flex: 1.5, alignItems: 'flex-end',
                    marginRight: '2%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => { console.log('notification') }}>
                        <Image source={require('../images/ic_notification.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => { console.log('list topic') }}>
                        <Image source={require('../images/ic_ListTopic.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

AppRegistry.registerComponent('OneAskIU', () => Title);
Title.defaultProps = {
    onBackPress: () => {
        Actions.pop()
    },
    onNotiPress: () => { },
    icon: null,
};

Title.propTypes = {
    onBackPress: React.PropTypes.func,
    onNotiPress: React.PropTypes.func,
    icon: React.PropTypes.func,

};