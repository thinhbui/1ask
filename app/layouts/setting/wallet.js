import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView, Modal, TextInput
} from 'react-native';
import {
    Actions, ActionConst
} from 'react-native-router-flux';
import Title from '../../components/main_title';
import Profile from './profile';
import SettingItem from './setting_item';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/introAction';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
})
class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateVisible: false
        }
        this.onLogout = this.props.onLogout.bin(this);
    }
    saveChange = () => {

    }
    onPressUpdate = () => {
        console.log('update_profile');
        Actions.update_profile();

    }

    logOut = () => {
        // GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
        //     // this.setState({ user: null });
        //     console.log('signOutGG')
        // }).done();
        const { dispatch } = this.props;
        dispatch(actionCreators.logout());
        Actions.login({ type: ActionConst.RESET });

    }
    render() {
        const { icon, placeholder } = this.props
        return (
            <View style={{ flex: 1 }}>
                <Title text='My Wallet' icon={() => { return (null); }} />
                <View style={{ flex: 10 }}>

                    <ScrollView >
                        <Profile text='Cường 7' />
                        <View style={{ borderTopWidth: 1, borderTopColor: '#c0c4c4', borderBottomWidth: 1, borderBottomColor: '#c0c4c4' }}>
                            <SettingItem onPress={() => Actions.update_profile()} text='Username' placeholder='Cuong 7' icon='../../images/icon_setting.png' />
                            <SettingItem onPress={this.onPressUpdate} text='Phone' placeholder='123123' />
                            <SettingItem onPress={this.onPressUpdate} text='Email' placeholder='Cuong 7' isBorderBottom='0' />
                        </View>
                        <View style={{ height: 20 }}></View>
                        <View style={{ borderTopWidth: 1, borderTopColor: '#c0c4c4', borderBottomWidth: 1, borderBottomColor: '#c0c4c4' }}>
                            <SettingItem onPress={() => Actions.testSkill()} text='Test lever other Subject' isBorderBottom='0' />
                        </View>
                        <View style={{ height: 20 }}></View>
                        <View style={{ borderTopWidth: 1, borderTopColor: '#c0c4c4', borderBottomWidth: 1, borderBottomColor: '#c0c4c4' }}>
                            <SettingItem onPress={this.onPressUpdate} text='Account Payment' />
                            <SettingItem onPress={() => Actions.payment()} text='Payment History' isBorderBottom='0' />
                        </View>
                        <View style={{ height: 20 }}></View>
                        <View style={{ borderTopWidth: 1, borderTopColor: '#c0c4c4', borderBottomWidth: 1, borderBottomColor: '#c0c4c4' }}>
                            <SettingItem onPress={this.onPressUpdate} text='Setting' isBorderBottom='0' />
                        </View>

                        <View style={{ height: 20 }}></View>
                        <View style={{ borderTopWidth: 1, borderTopColor: '#c0c4c4', borderBottomWidth: 1, borderBottomColor: '#c0c4c4' }}>
                            <SettingItem onPress={this.onPressUpdate} text='About 1ASK' />
                            <SettingItem onPress={this.onPressUpdate} text='Privacy and Terms' isBorderBottom='0' />
                        </View>
                        <View style={{ height: 20 }}></View>

                        <View style={{ borderTopWidth: 1, borderTopColor: '#c0c4c4', borderBottomWidth: 1, borderBottomColor: '#c0c4c4' }}>
                            <SettingItem onPress={this.logOut} text='Logout' />
                        </View>
                    </ScrollView>

                </View>
            </View>
        )
    }
}

// AppRegistry.registerComponent('OneAskIU', () => Wallet);
export default connect(mapStateToProps)(Wallet)
