import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, Platform,
    View, Image, TouchableOpacity, AsyncStorage,
} from 'react-native';
// import WebSocket from 'ws';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import { actionCreators } from '../../actions/introAction';
import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
// import FCM,
// {
//     FCMEvent,
//     RemoteNotificationResult,
//     WillPresentNotificationResult,
//     NotificationType
// } from "react-native-fcm";

import init from 'react_native_mqtt';
// import Icon from 'react-native-vector-icons'
const mapStateToProps = (state) => ({
    isPass: state.isPass,
    user: state.user,
    isLogin: state.isLogin
})


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            fcm_id: '',
            mqtt_push_password: '1ask123456',
            isConnected: null,
            isMqttDisconnect: false
        }
        //        this.onLogin = this.props.onLogin.bind(this)

        init({
            size: 10000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
            sync: {
            }
        });
    }

    loginThird(thirdParty, accessToken) {
        console.log('loginThird');
        // this
        //     .loadingDialog
        //     .openDialog();
        // Actions.tabs();
        // console.log(accessToken);
        fetch('https://service.1ask.vn:9669/auth/expert/third-party/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                third_party: thirdParty,
                auth_code: accessToken
            })
        }).then((response) => {
            console.log('loginThird', response);
            return response.json()
        }).then((responseJson) => {
            console.log('loginThird', responseJson);
            this.refreshToken(responseJson.session_alive);
            AsyncStorage
                .setItem('user_login', JSON.stringify(responseJson))
                .then()
                .done();
            //this.setUserLogin(responseJson);
            // this
            //     .loadingDialog
            //     .closeDialog();

            // if (responseJson.state !== 5) {
            //     if (responseJson.test_info.level.required.length === 0 &&
            //         responseJson.test_info.skill.required.length === 0) {
            //         Actions.tabs();
            //     } else {
            //         if (responseJson.test_info.level.required.length !== 0) {
            //             Actions.wellcome();
            //         } else {
            //             Actions.startSkillTest();
            //         }
            //     }
            // } else {
            //     Actions.tabs();
            // }
        }).catch((error) => {
            console.log(error);
            // this
            //     .loadingDialog
            //     .closeDialog();
            alert('Có lỗi trong quá trình đăng nhập');
        });
    }
    onLogin() {
        console.log('onlogin')
    }
    componentWillMount() {
        this.setupGoogleSignin();

        //        console.log(this.props.user)

    }
    componentDidMount() {
        console.log(this.props.isPass, this.props.user)
        if (this.props.user !== {} && this.props.isPass) {
            console.log('user null')
            Actions.main({ type: ActionConst.REFRESH });
        }
    }
    signOutGG = () => {
        GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
            this.props.user = null;
            console.log('signOutGG')
        }).done();
    }
    init() {
        this.getFcmId();
    }

    getFcmId() {
        AsyncStorage
            .getItem('fcm_id')
            .then((fcm_id) => {
                if (fcm_id !== null) {
                    this.setState({ fcm_id: fcm_id });
                    this.mqttSetup('testtopic/1', 'clientId-ES3X3RX87n', 'this.props.user_login.id ' + '##'
                        + 'DeviceInfo.getUniqueID()', '1ask123456');
                } else {
                    this.mqttSetup('testtopic/1', 'clientId-ES3X3RX87n', 'this.props.user_login.id ' + '##'
                        + 'DeviceInfo.getUniqueID()', '1ask123456');
                }
            });
        // this.mqtt();
    }
    putDeviceID() {
        fetch('https://service.1ask.vn:9669/devices', {
            method: 'POST', headers: {
                'Accept':
                'application/json', 'Content-Type': 'application/json',
                'au-token': '1935666013331893',
            },
            body: JSON.stringify({
                'name': 'DeviceInfo.getDeviceName()',
                'client_id': 'DeviceInfo.getUniqueID()',
                'os_id': 'DeviceInfo.getUniqueID()',
                'mac': "",
                'ipv4': "",
                'ipv6': "",
                'model': 'DeviceInfo.getModel()',
                'os_version': ' DeviceInfo.getSystemVersion()',
                'manufacture': 'DeviceInfo.getManufacturer()',
                'push_notification_id': this.state.fcm_id
            })
        }).then((response) => {
            if (response.status == 200) {
                response.json()
            } else {
                let error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        })
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    mqtt_push_password: '1ask123456'
                })
                this.mqttSetup('this.props.user_login.mqtt_topic', ' DeviceInfo.getUniqueID()', 'this.props.user_login.id' + '##'
                    + 'DeviceInfo.getUniqueID()', '1ask123456')
                AsyncStorage
                    .setItem('devices', JSON.stringify(responseJson))
                    .then()
                    .done();
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    mqttSetup(mqtt_topic, client_id, userName, password) {
        console.log(mqtt_topic, client_id, userName, password);
        // init({
        //   size: 10000,
        //   storageBackend: AsyncStorage,
        //   defaultExpires: 1000 * 3600 * 24,
        //   enableCache: true,
        //   sync: {
        //   }
        // });
        var client = new Paho.MQTT.Client('mqtt.1ask.vn', 9884, 'clientId-ES3X3RX87n');
        onConnect = (client) => {
            this.setState({
                isMqttDisconnect: false
            })
            console.log("onConnect");
            client.subscribe(mqtt_topic);
            // var message = new Paho.MQTT.Message("Hello");
            // message.destinationName = mqtt_topic;
            // client.send(message);
        }

        function onFail(responseObject) {
            console.log("onFail", responseObject);
        }

        onConnectionLost = (responseObject) => {
            console.log("onConnectionLost", responseObject);
            if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:" + responseObject.errorMessage);
            }
            this.setState({
                isMqttDisconnect: true
            })
        }

        onMessageArrived = (message) => {
            // FCM.presentLocalNotification({
            //   id: "UNIQ_ID_STRING",                               // (optional for instant notification)
            //   title: "My Notification Title",                     // as FCM payload
            //   body: "My Notification Message",                    // as FCM payload (required)
            //   sound: "default",                                   // as FCM payload
            //   priority: "high",                                   // as FCM payload
            //   click_action: "ACTION",                             // as FCM payload
            //   badge: 10,                                          // as FCM payload IOS only, set 0 to clear badges
            //   icon: "ic_launcher",                                // as FCM payload, you can relace this with custom icon you put in mipmap
            //   my_custom_data: 'my_custom_field_value',             // extra data you want to throw
            //   show_in_foreground: true                                  // notification when app is in foreground (local & remote)
            // });
            //  console.log(message);
            console.log(message.payloadString);
            // try {
            //     var tmp = JSON.parse(message.payloadString);
            //     if (typeof (tmp) !== 'object') {
            //         tmp = JSON.parse(tmp);
            //     }
            //     if (!tmp.data || !tmp.data.type) {
            //         // console.log('refresh');
            //         // Actions.answer({ mesage: tmp.content });
            //         // Actions.refresh({ message: tmp });
            //       //  this.addMsg(tmp);
            //     } else if (tmp.data.type === 14) {
            //         console.log(tmp);
            //       //  Actions.acceptQuestion({ qs: tmp.data });
            //     }
            // } catch (error) {
            //     console.log(error);
            // }
        }

        function onMessageDelivered(mesage) {
            console.log('onMessageDelivered');
        }

        // this.props.client = new Paho.MQTT.Client('service.1ask.asia', 9883, client_id);
        // var client = new Paho.MQTT.Client('iot.eclipse.org', 80, 'javascript-client');
        var option = {
            userName: userName,
            password: password,
            keepAliveInterval: 60,
            cleanSession: true,
            useSSL: true,
            onSuccess: () => onConnect(client),
            onFailure: onFail,
        }
        // var uriParts = wsurl.split(":");
        // uriParts[0] = "wss";
        // wsurl = uriParts.join(":");
        client.onConnectionLost = onConnectionLost;
        client.onMessageArrived = onMessageArrived;
        client.onMessageDelivered = onMessageDelivered;
        client.connect(option);
    }
    async setupGoogleSignin() {
        try {
            await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                webClientId: '32561419752-j2e91iugvba4e77sn5vpu4l8chgu2qpf.apps.googleusercontent.com',
                offlineAccess: true
            }).then(() => {
                // you can now call currentUserAsync()
                GoogleSignin.currentUserAsync().then((user) => {
                    console.log('USER', user);
                }).done();
            });

            const user = await GoogleSignin.currentUserAsync();
            this.login()
        }
        catch (err) {
            console.log("Play services error", err.code, err.message);
        }
    }

    googleLogin = () => {
        GoogleSignin.signIn()
            .then((user) => {
                console.log('googleLogin', user);
                //   this.loginThird('google', user.idToken.toString())
                const { dispatch } = this.props;
                dispatch(actionCreators.loginActions(user));
            })
            .catch((err) => {
                console.log('WRONG SIGNIN', err);
            })
            .done();
    }
    // onLogin() {
    //     //this.login();
    // }
    login = () => {
        const { dispatch } = this.props;
        dispatch(actionCreators.loginActions(this.state.data.credentials));
        console.log(this.state.data);
        if (this.props.isLogin) {
            if (this.props.isPass) {
                Actions.main();
                console.log('Pass')
            }
            else {
                Actions.testSkill()
                console.log('chua Pass')
            }
        }
        // dispatch(actionCreators.setFirst())

    }
    componentDidUpdate() {
        //  console.log('componentDidUpdate', this.props.user)
        // if (this.props.user !== null && this.props.isPass)
        //     Actions.main(ActionConst.REFRESH);
        console.log(this.props.user)
    }

    render() {
        let { user } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: '#1f6040' }}>
                <View style={{ flex: 2, }}>

                </View>

                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 4 }}>
                        <Image />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'white' }}>Instant Question & Answers</Text>
                    </View>
                </View>

                <View style={{ flex: .7, }}>

                </View>

                <View style={{ flex: 2 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <FBLogin
                            ref={(fbLogin) => { this.fbLogin = fbLogin }}
                            permissions={["email", "user_friends"]}
                            loginBehavior={FBLoginManager.LoginBehaviors.Native}
                            onLogin={(data) => {
                                console.log("Logged in!");
                                console.log(data);
                                this.props.user = data.credentials;
                                this.login();
                                //   this.loginThird('facebook', data.credentials.token)
                            }}

                            onLogout={() => {
                                console.log("Logged out.");
                                // this.setState({ user: null });
                            }}
                            onLoginFound={(data) => {
                                console.log("Existing login found.");
                                this.login();
                                this.props.user = data.credentials;
                                console.log('login found', data);
                                console.log('data credentials', data.credentials);
                                // this.loginThird('facebook', data.credentials.token)

                            }}
                            onLoginNotFound={() => {
                                console.log("No user logged in.");
                                this.props.user = null;
                            }}
                            onError={(data) => {
                                console.log("ERROR");
                                console.log(data);
                            }}
                            onCancel={() => {
                                console.log("User cancelled.");
                            }}
                            onPermissionsMissing={(data) => {
                                console.log("Check permissions!");
                                console.log(data);
                            }}
                            buttonView={
                                <View style={{
                                    alignSelf: 'center', width: '90%', height: 40,
                                    backgroundColor: '#365899', borderRadius: 10, justifyContent: 'center',
                                    alignItems: 'center'
                                }}

                                //  onPress={this.login}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Login with facebook</Text>
                                </View>

                            }
                        />

                    </View>

                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                        <TouchableOpacity
                            style={{
                                alignSelf: 'center', width: '80%', height: 40,
                                backgroundColor: '#d14836', borderRadius: 10, justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={this.googleLogin}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Login with Google</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flex: 5, }}>

                </View>
            </View>
        );
    }
}
AppRegistry.registerComponent('OneAskIU', () => Login);
export default connect(mapStateToProps)(Login)