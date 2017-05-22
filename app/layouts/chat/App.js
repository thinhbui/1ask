import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Image,
    AsyncStorage
} from 'react-native';
// import WebSocket from 'ws';
import { GiftedChat, Actions, Bubble } from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import CustomView from './CustomView';
import init from 'react_native_mqtt';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            loadEarlier: true,
            typingText: null,
            isLoadingEarlier: false,
        };

        init({
            size: 10000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
            sync: {
            }
        });
        this.client = new Paho.MQTT.Client('broker.mqttdashboard.com', 8000, 'clientId-ES3X3RX87n');

        this._isMounted = false;

        this.onSend = this.onSend.bind(this);
        this.onReceive = this.onReceive.bind(this);
        this.renderCustomActions = this.renderCustomActions.bind(this);
        this.renderBubble = this.renderBubble.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        // this.onLoadEarlier = this.onLoadEarlier.bind(this);

        this._isAlright = null;
    }

    mqttSetup(mqtt_topic, client_id, userName, password) {
        console.log(mqtt_topic, client_id, userName, password);

        onConnect = (client) => {
            this.setState({
                isMqttDisconnect: false
            })
            console.log("onConnect");
            client.subscribe(mqtt_topic);
            // var message = new Paho.MQTT.Message("aksgdkád");
            // message.destinationName = mqtt_topic;
            // client.send(message);
            // this.onSend(message);
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
            console.log(message.payloadString);
            try {
                var messi = JSON.parse(message.payloadString);
                if (messi.id !== 1) {
                    // this.onReceive(messi.text);
                }
            }
            catch (error) {
                this.onReceive(message.payloadString);
                console.log(error);
            }
        }

        onMessageDelivered = (message) => {
            // this.onReceive(message.payloadString);
            console.log('onMessageDelivered');

        }

        var option = {
            userName: userName,
            password: password,
            keepAliveInterval: 60,
            cleanSession: true,
            useSSL: false,
            onSuccess: () => onConnect(this.client),
            onFailure: onFail,
            // mqttVersion: 3

        }
        this.client.onConnectionLost = onConnectionLost;
        this.client.onMessageArrived = onMessageArrived;
        this.client.onMessageDelivered = onMessageDelivered;
        this.client.connect(option);
    }
    componentDidMount() {
        this.mqttSetup('testtopic/10', 'clientId-ES3X3RX87n', '', '');
    }
    componentWillMount() {
        this._isMounted = true;
        this.setState(() => {
            return {
                messages: [
                    {
                        _id: 1,
                        text: 'Chào bạn',
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'React Native',
                            avatar: 'http://i3.kym-cdn.com/photos/images/facebook/000/101/771/1879f18e_e542_e1c6.jpg',
                        },
                    },
                ],
            };
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    sendImage(path) {
        console.log('sendImage');
        this.setState({
            messages: [
                {
                    _id: 1,
                    image: path,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'http://i3.kym-cdn.com/photos/images/facebook/000/101/771/1879f18e_e542_e1c6.jpg',
                    },
                },
            ]
        });
        this.onSend(messages)
    }
    onSend(messages = []) {
        for (var i = 0; i < messages.length; i++) {
            let messi = {
                id: 1,
                text: messages[i].text ? messages[i].text : messages[i].image
            }
            // console.log(messages[0]);
            var message = new Paho.MQTT.Message(JSON.stringify(messi));
            message.destinationName = 'testtopic/10';
            this.client.send(message);
            this.setState((previousState) => {
                return {
                    messages: GiftedChat.append(previousState.messages, messages),
                };
            });
        }

        // let output = {
        //     content: this.state.text_input,
        //     owner: { id: this.state.question.expert.id },
        //     post_id: this.state.question.id
        // }

        // for demo purpose
        //  this.answerDemo(messages);
    }

    answerDemo(messages) {
        if (messages.length > 0) {
            if ((messages[0].image || messages[0].location) || !this._isAlright) {
                this.setState((previousState) => {
                    return {
                        typingText: 'User đang nhập...'
                    };
                });
            }
        }
    }

    onReceive(text) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, {
                    _id: Math.round(Math.random() * 1000000),
                    text: text,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'http://i3.kym-cdn.com/photos/images/facebook/000/101/771/1879f18e_e542_e1c6.jpg',
                    },
                }),
            };
        });
    }

    renderCustomActions(props) {
        return (
            <CustomActions
                {...props}
                icon={() => {
                    return (
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            source={require('../../images/icon_camera.png')}
                        />
                    );
                }}
            />
        );

    }

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: '#f0f0f0',
                    }
                }}
            />
        );
    }

    renderCustomView(props) {
        return (
            <CustomView
                {...props}
            />
        );
    }

    renderFooter(props) {
        if (this.state.typingText) {
            return (
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>
                        {this.state.typingText}
                    </Text>
                </View>
            );
        }
        return null;
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                //   loadEarlier={this.state.loadEarlier}
                //   onLoadEarlier={this.onLoadEarlier}
                //    isLoadingEarlier={this.state.isLoadingEarlier}

                user={{
                    _id: 1, // sent messages should have same user._id
                }}

                renderActions={this.renderCustomActions}
                //   renderBubble={this.renderBubble}
                //  renderCustomView={this.renderCustomView}
                renderFooter={this.renderFooter}
            />
        );
    }
}

const styles = StyleSheet.create({
    footerContainer: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#aaa',
    },
});
AppRegistry.registerComponent('OneAskIU', () => Chat)