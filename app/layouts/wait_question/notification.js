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

import Title from '../../components/main_title'
    
class NotiItem extends Component {
    render() {
        const { title, content, time } = this.props
        return (
            <TouchableOpacity onPress={() => { }}>
                <View style={{ height: 10, backgroundColor: '#eff0f2', borderBottomColor: '#d6d8db', borderBottomWidth: 1, width: '100%' }}>

                </View>
                <View style={{ height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#d6d8db', borderBottomWidth: 1 }}>
                    <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#3d5882', width: 40, height: 40, borderRadius: 20 }} />
                    </View>
                    <View style={{ flex: 6.5, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Text style={{ color: 'gray', fontSize: 12 }}>{content}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Text style={{ color: 'gray', fontSize: 12, marginRight: 5 }}>{time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
class Notification extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Title textLeft='Back' text='Thông báo' />
                <View style={{ flex: 10 }}>
                    <ScrollView >
                        <NotiItem title='Giảng viên 1ASK' content='Đã trả lời câu hỏi của bạn' time='20/11/2017' />
                        <NotiItem title='Giảng viên 1ASK' content='Đã trả lời câu hỏi của bạn' time='20/11/2017' />
                        <NotiItem title='Giảng viên 1ASK' content='Đã trả lời câu hỏi của bạn' time='20/11/2017' />
                        <NotiItem title='Giảng viên 1ASK' content='Đã trả lời câu hỏi của bạn' time='20/11/2017' />
                        <NotiItem title='Giảng viên 1ASK' content='Đã trả lời câu hỏi của bạn' time='20/11/2017' />
                    </ScrollView>
                </View>
            </View>
        )
        // }
    }
}
AppRegistry.registerComponent('OneAskIU', () => Notification);
// export default connect(mapStateToProps)(Notification)