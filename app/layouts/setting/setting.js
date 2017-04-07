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
import TextField from 'react-native-md-textinput';
// import {
//     Select,
//     Option,
//     OptionList,
//     updatePosition
// } from 'react-native-dropdown';
export default class Settting extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         canada: ''
    //     };
    // }

    // componentDidMount() {
    //     updatePosition(this.refs['SELECT1']);
    //     updatePosition(this.refs['OPTIONLIST']);
    // }

    // _getOptionList() {
    //     return this.refs['OPTIONLIST'];
    // }


    // _canada(province) {

    //     this.setState({
    //         ...this.state,
    //         canada: province
    //     });
    // }
    render() {
        const { username, icon, placeholder } = this.props
        return (
            <View
                style={{ flex: 1 }}
            >
                <Title text='Cài đặt' />
                <View style={{ flex: 11 }}>
                    <Profile text='Cường 7' />
                    <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <View style={{ flex: 1, width: '90%', justifyContent: 'center', alignItems: 'flex-start', }}>
                            <View style={{ alignItems: 'flex-start' }} >
                                <Text style={{ fontWeight: 'bold', }}>Cài đặt ngôn ngữ</Text>
                            </View>

                            <TextInput
                                defaultValue="Cường 7"
                                style={{ width: '100%', height: 35, borderColor: '#c4c6c6', borderWidth: 1, borderRadius: 5 }}
                                selectionColor='black'
                            />
                        </View>
                        <View style={{ flex: 1, width: '90%', justifyContent: 'center', alignItems: 'flex-start', }}>
                            <View style={{ alignItems: 'flex-start' }} >
                                <Text style={{ fontWeight: 'bold', }}>Cài đặt ngôn ngữ</Text>
                            </View>

                            <TextInput
                                defaultValue="Cường 7"
                                style={{ width: '100%', height: 35, borderColor: '#c4c6c6', borderWidth: 1, borderRadius: 5 }}
                                selectionColor='black'
                            />
                        </View>
                        <View style={{ flex: 1, width: '90%', justifyContent: 'center', alignItems: 'flex-start', }}>
                            <View style={{ alignItems: 'flex-start' }} >
                                <Text style={{ fontWeight: 'bold', }}>Cài đặt ngôn ngữ</Text>
                            </View>

                            <TextInput
                                defaultValue="Cường 7"
                                style={{ width: '100%', height: 35, borderColor: '#c4c6c6', borderWidth: 1, borderRadius: 5 }}
                                selectionColor='black'
                            />
                        </View>
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
                    <View style={{ flex: 2 }}></View>
                </View>

            </View>
        )
    }
}

AppRegistry.registerComponent('OneAskIU', () => Settting);
