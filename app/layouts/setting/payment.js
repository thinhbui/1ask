import {
    Actions,
} from 'react-native-router-flux';
import React, { Component, } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView, TouchableOpacity
} from 'react-native';
import Profile from './profile'
import Title from '../../components/main_title'

class PaymentItem extends Component {
    render() {
        return (
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ borderWidth: 1, borderColor: 'gray', width: '95%' }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: 30 }}>
                        <Image style={{ flex: 1, position: 'absolute', zIndex: 1, height: '100%', width: '100%' }} source={require('../../images/bg_payment_header.png')} />
                        <Text style={{ color: 'white', zIndex: 2 }}> Payment History    </Text>
                        <Text style={{ color: '#eddc9e', zIndex: 2 }}>12/1/2017-13-1/2017</Text>
                    </View>
                    <View style={{ width: '95%', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 30 }}>
                            <Text style={{ color: '#a0a0a0' }}> Giảng viên: </Text>
                            <Text style={{ color: 'rgb(23,93,81)' }}> Cường 7 </Text>
                        </View>
                        <View style={{ height: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ color: '#a0a0a0' }}> Số câu trả lời hợp lệ: </Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', }}>
                                <Text style={{ color: 'rgb(23,93,81)' }}> 69</Text>
                            </View>
                        </View>
                        <View style={{ height: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ color: '#a0a0a0' }}> Số câu trả lời sai : </Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', }}>
                                <Text style={{ color: 'rgb(23,93,81)' }}> 04</Text>
                            </View>
                        </View>
                        <View style={{ height: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ color: '#a0a0a0' }}> Số lần hủy câu hỏi: </Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', }}>
                                <Text style={{ color: 'rgb(23,93,81)' }}> 02</Text>
                            </View>
                        </View>
                        <View style={{ height: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ color: '#a0a0a0' }}> Số lần từ chối: </Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', }}>
                                <Text style={{ color: 'rgb(23,93,81)' }}> 01</Text>
                            </View>
                        </View>
                        <View style={{ height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopColor: '#a0a0a0', borderTopWidth: 1 }}>
                            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ color: '#a0a0a0' }}> Tổng số tiền nhận được (vnđ): </Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', }}>
                                <Text style={{ color: 'rgb(23,93,81)' }}> 3.500.000</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default class Payment extends Component {
    render() {
        console.log('payment')
        return (
            <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                <Title textLeft='Back' text='Thông báo' />
                <View style={{ flex: 10 }}>
                    <ScrollView >
                        <Profile text='Cường 7' />
                        <PaymentItem />
                        <View style={{ height: 10 }} />
                        <PaymentItem />
                    </ScrollView>
                </View>
             
            </View>
        )
        // }
    }
}
AppRegistry.registerComponent('OneAskIU', () => Payment);
// export default connect(mapStateToProps)(Notification)