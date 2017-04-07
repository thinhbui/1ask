import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AppRegistry
} from 'react-native';
import FCM,
{
    FCMEvent,
    RemoteNotificationResult,
    WillPresentNotificationResult,
    NotificationType
} from "react-native-fcm";
import PushController from "./PushController";
import firebaseClient from "./FirebaseClient";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: ""
        }
    }
   

    render() {
        let { token } = this.state;
        console.log(this.state.token);
        return (
            <View style={styles.container}>
                <PushController
                    onChangeToken={token => this.setState({ token: token || "" })}
                />
                <Text style={styles.welcome}>
                    Welcome to Simple Fcm Client!
        </Text>

                <Text style={styles.instructions}>
                    Token: {this.state.token}
                </Text>

                <TouchableOpacity onPress={() => firebaseClient.sendNotification(token)} style={styles.button}>
                    <Text style={styles.buttonText}>Send Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => firebaseClient.sendData(token)} style={styles.button}>
                    <Text style={styles.buttonText}>Send Data</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => firebaseClient.sendNotificationWithData(token)} style={styles.button}>
                    <Text style={styles.buttonText}>Send Notification With Data</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        backgroundColor: "teal",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        color: "white",
        backgroundColor: "transparent"
    },
});
AppRegistry.registerComponent('OneAskIU', () => App);