import {
    AppRegistry, StyleSheet, View, Text, ScrollView, TouchableOpacity, Modal, ListView, Image
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopupDialog from 'react-native-popup-dialog';
import Title from '../../components/main_title';
import { GiftedChat } from 'react-native-gifted-chat';
import { actionCreators } from '../../actions/introAction';
import Chat from '../chat/App'
const mapStateToProps = (state) => ({
    timeMilestone: state.timeMilestone,
    isAnswering: state.isAnswering,
    user: state.user
})

// Row comparison function
// const rowHasChanged = (r1, r2) => r1.id !== r2.id

// // DataSource template object
// const ds = new ListView.DataSource({ rowHasChanged })
class WaitQuestion extends Component {
    constructor(props) {
        super(props);
        this.runInterval;
        this.isRunning = false;
        this.state = {
            modalDeclineVisible: false,
            modalAcceptVisible: false,
            isHasNewQuestion: false,
            rehydrated: false,
            hours: 0, minutes: 0, seconds: 0,
            messages: [],
            modalFinishQuestion: false
        };
    }
    componentDidMount() {
        const { timeMilestone, isAnswering } = this.props;
        let today = new Date();
        let milestone = new Date(timeMilestone.toString());
        if (isAnswering && !this.state.modalAcceptVisible) {
            this.setState({
                modalAcceptVisible: true
            })
        }
        console.log(this.props.user);
    }
    componentWillMount() {

    }
    // fetchData() {
    //     fetch('https://service.1ask.vn:8443/expert/jobs', {
    //         method: 'GET', headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'au-token': 'this.props.user_login.token'
    //         }
    //     }).then((response) => {
    //         console.log(response);
    //         if (response.status == 200) {
    //             return response.json();
    //         } else {
    //             let error = new Error(response.statusText);
    //             error.response = response;
    //             throw error;
    //         }
    //     }).then((responseJson) => {
    //         console.log(responseJson);
    //         if (responseJson && responseJson.results[0]) {
    //             let a = this.state.list_history.concat(responseJson.results);
    //             this.setState({
    //                 list_history: a,
    //                 dataSource: ds.cloneWithRows(a),
    //                 offset: a.length
    //             });
    //         }

    //         this.setState({ refreshing: false })
    //     }).catch((error) => {
    //         console.log(error);
    //         this.setState({ refreshing: false })
    //     });
    // }
    run() {
        this.runInterval = setInterval(() => {
            const { timeMilestone } = this.props;
            let today = new Date();
            let milestone = new Date(timeMilestone.toString());
            let gio = milestone.getHours();
            if (today.getFullYear() < milestone.getFullYear()) {
                if (today.getMonth() < milestone.getMonth()) {
                    if (today.getDate() < milestone.getDate())
                        gio = milestone.getHours();
                    else
                        gio = milestone.getHours() + 24;
                }
            }

            let time = gio * 3600 + milestone.getMinutes() * 60 + milestone.getSeconds()
                - (today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds());
            let h = Math.floor(time / 3600)
            let m = this.checkTime(Math.floor((time % 3600) / 60))
            let s = this.checkTime(time - Math.floor(time / 3600) * 3600 - Math.floor((time % 3600) / 60) * 60)
            this.setState({
                hours: h,
                minutes: m,
                seconds: s,
            })
            // console.log(`${time},${this.state.hours},${this.state.minutes},${this.state.seconds}`)
        }, 500);
        this.isRunning = true

    }
    declinePress = () => {
        this.setState({
            modalDeclineVisible: true
        })
    }
    acceptPress = () => {
        this.setState({
            modalAcceptVisible: true
        })
        const { dispatch } = this.props;
        let now = new Date();
        dispatch(actionCreators.setTimeMilestone(new Date(now.getFullYear(), now.getMonth(), now.getDate(),
            now.getHours(), (now.getMinutes() + 10), now.getSeconds())));
        dispatch(actionCreators.answering(true));
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Chào Thịnh',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        });
    }

    onRequestClose = () => {
        const { dispatch } = this.props
        console.log('onRequestClose')
        this.setState({
            modalDeclineVisible: false,
            isHasNewQuestion: false,
        })
        dispatch(actionCreators.setTimeMilestone(this.timeMilestone))
    }
    checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    closeNewQuestion = () => {
        const { dispatch } = this.props;
        dispatch(actionCreators.setTimeMilestone(new Date()));
        dispatch(actionCreators.answering(false))
        this.setState({
            modalAcceptVisible: false,
        })
        this.stop();
        this.isRunning = false;
    }
    onShowNewQuestion = () => {
        this.setState({
            isHasNewQuestion: false
        });

        if (!this.isRunning)
            this.run();
    }
    stop() {
        clearInterval(this.runInterval);
        console.log('stop')
    }
    componentDidUpdate() {
        const { timeMilestone, isAnswering } = this.props;
        let today = new Date();
        let milestone = new Date(timeMilestone.toString());
        if (isAnswering && !this.state.modalAcceptVisible) {
            this.setState({
                modalAcceptVisible: true
            })
        }
        if (milestone <= today) {
            this.stop()
            this.isRunning = false
        }
        else {
            if (!this.isRunning)
                this.run()
        }
        console.log('componentDidUpdate')
    }
    waitView() {
        const { timeMilestone } = this.props;
        const { hours, minutes, seconds } = this.state;
        let today = new Date();
        let milestone = new Date(timeMilestone.toString());
        if (milestone <= today) {
            return (
                <View style={{ flex: 2.1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        ahasdkasdlkhl sa das ds ad asd s
                        </Text>
                    <Text style={{}}>
                        asd asd sa d asd as ds
                        </Text>
                </View>
            )

        }
        else {
            return (
                <View style={{ flex: 2.1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        {hours}:{minutes}:{seconds}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            const { dispatch } = this.props
                            dispatch(actionCreators.setTimeMilestone(new Date()))
                        }}
                        style={{
                            borderRadius: 5, backgroundColor: "#095931", width: '50%',
                            height: '30%', justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}> Continues receive question </Text>
                    </TouchableOpacity>

                </View >
            )
        }
    }
    render() {
        const { modalDeclineVisible, modalFinishQuestion, isHasNewQuestion, modalAcceptVisible } = this.state;
        const { timeMilestone } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Title text="Questions"
                    icon={() => {
                        return (
                            null
                        );
                    }}
                />
                <View style={{ flex: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1.5, }}></View>
                    <View style={{ flex: 2, backgroundColor: 'gray', width: '30%', }}></View>
                    <View style={{ flex: .4, }}></View>
                    {this.waitView()}

                    < View style={{ flex: 3 }}>

                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', width: '100%' }}>
                        <Text onPress={() => { this.setState({ isHasNewQuestion: true }) }}>New Question</Text>
                    </View>
                </View>

                <Modal
                    visible={isHasNewQuestion}
                    onRequestClose={() => { console.log('ahihi') }}
                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 2 }}></View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'gray', width: '30%' }}>

                        </View>
                    </View>
                    <View style={{ flex: .4, }}></View>
                    <View style={{ flex: 2.1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            1ASK
                        </Text>
                        <Text style={{}}>
                            Quickly-Quickly-Quickly
                        </Text>
                        <Text style={{}}>
                            User's Question are waiting your Answer
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity onPress={this.declinePress} style={{
                                justifyContent: 'center', width: '90%', height: '80%', alignItems: 'center'
                                , backgroundColor: '#992510', borderRadius: 5, flexDirection: 'row'
                            }}>
                                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-end', marginRight: '10%' }}>
                                    <Text style={{ color: 'white', fontSize: 16 }}>DECLINE</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{
                                        backgroundColor: 'white', width: 26, height: 26, borderRadius: 13
                                        , justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Text style={{ color: '#992510', fontSize: 16, marginBottom: '10%' }}>x</Text>
                                    </View>
                                </View>


                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity onPress={this.acceptPress} style={{
                                justifyContent: 'center', width: '90%', height: '80%', alignItems: 'center'
                                , backgroundColor: '#095931', borderRadius: 5, flexDirection: 'row'
                            }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{
                                        backgroundColor: 'white', width: 26, height: 26, borderRadius: 13
                                        , justifyContent: 'center', alignItems: 'center',
                                    }}>
                                        <Text style={{ color: '#095931', fontSize: 16, marginBottom: '10%' }}>v</Text>
                                    </View>
                                </View>

                                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start', marginLeft: '10%' }}>
                                    <Text style={{ color: 'white', fontSize: 16 }}>ACCEPT</Text>
                                </View>

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 3.5 }}>

                    </View>

                    <PopupDialog
                        overlayOpacity={.5} show={modalDeclineVisible}
                        onDismissed={this.onRequestClose}
                        width='50%' height='40%'
                        style={{
                            flex: 1, alignItems: 'center',
                            backgroundColor: '#F5F5F5',
                        }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#095931' }}> Are you busy?</Text>
                                <Text>bla blba balbalsdhasdgka </Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                this.setState({ modalDeclineVisible: false });
                                this.timeMilestone = new Date();
                            }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text> Just this question </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ modalDeclineVisible: false });
                                    this.timeMilestone = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),
                                        new Date().getHours(), (new Date().getMinutes() + 30), new Date().getSeconds());
                                }}
                                style={{ flex: 1, borderTopColor: 'gray', borderTopWidth: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Text > After 30 minutes </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ modalDeclineVisible: false });
                                    this.timeMilestone = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),
                                        new Date().getHours() + 1, new Date().getMinutes(), new Date().getSeconds());
                                }}
                                style={{ flex: 1, borderTopColor: 'gray', borderTopWidth: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Text > After 1 hour</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ modalDeclineVisible: false });
                                    this.timeMilestone = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),
                                        new Date().getHours() + 2, new Date().getMinutes(), new Date().getSeconds());


                                }}
                                style={{ flex: 1, borderTopColor: 'gray', borderTopWidth: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Text > After 2 hours</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ modalDeclineVisible: false });
                                    this.timeMilestone = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),
                                        new Date().getHours() + 6, new Date().getMinutes(), new Date().getSeconds());

                                }}
                                style={{ flex: 1, borderTopColor: 'gray', borderTopWidth: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Text > After 6 hours</Text>
                            </TouchableOpacity>
                        </View>
                    </PopupDialog>

                </Modal>

                <Modal
                    visible={modalAcceptVisible}
                    onShow={this.onShowNewQuestion}
                    onRequestClose={() => { console.log('close accept') }}
                    style={{ flex: 1 }}>
                    <Title text="Questions"
                        icon={() => {
                            return (
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Finish</Text>
                            );
                        }}
                        onBackPress={() => {
                            console.log('onBackPress')
                            this.setState({ modalFinishQuestion: true })
                        }} />
                    <View style={{ flex: 3.2, }}>
                        <View style={{}}></View>
                    </View>
                    <View style={{ flex: .3, width: '100%', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>{this.state.minutes}:{this.state.seconds}</Text>
                    </View>
                    <View style={{ flex: 6.5 }}>
                        <Chat />
                    </View>

                    <PopupDialog
                        overlayOpacity={.5}
                        show={modalFinishQuestion}
                        onDismissed={this.closeNewQuestion}
                        width='50%' height='20%'
                        style={{
                            flex: 1, alignItems: 'center',
                            backgroundColor: '#F5F5F5',
                        }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>

                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ modalFinishQuestion: false });
                                }}
                                style={{ flex: 1, borderTopColor: 'gray', borderTopWidth: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Text >  Câu hỏi không hợp lệ </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ modalFinishQuestion: false });
                                }}
                                style={{ flex: 1, borderTopColor: 'gray', borderTopWidth: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Text >Tôi chưa giải được</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({ modalFinishQuestion: false });
                                }}
                                style={{ flex: 1, borderTopColor: 'gray', borderTopWidth: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Text > Câu hỏi bị cấm </Text>
                            </TouchableOpacity>
                        </View>
                    </PopupDialog>
                </Modal>
            </View >
        );
    }
}
export default connect(mapStateToProps)(WaitQuestion)
AppRegistry.registerComponent('OneAskIU', () => WaitQuestion)