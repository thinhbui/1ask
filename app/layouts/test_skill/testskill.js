import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image,
    TouchableOpacity
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';
// import { actionCreators } from './actions/introAction';
export default class TestSkill extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1.8, }}>

                </View>

                <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 3, backgroundColor: 'steelblue', width: '20%' }}>
                        <Image />
                    </View>

                    <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Test Lever</Text>
                        <Text numberOfLines={2} style={{ textAlign: 'center' }}>Test Lever ajshdkajhfalkj skajhsdfka JHSDLKjhas dJASHDKJDFKHSDFKJH</Text>
                    </View>
                </View>


                <View style={{ flex: 3.5, }}>
                    <View style={{ flex: 1, marginTop: '2%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity  onPress={()=>Actions.modal_test_lever()} style={{ flex: 1, }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: '100%', width: '60%', backgroundColor: '#1f6040' }} ></View>
                            </View>
                            <View style={{ flex: .2, alignItems: 'center' }}>
                                <Text>Math</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>Actions.modal_test_lever()} style={{ flex: 1, }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: '100%', width: '60%', backgroundColor: '#1f6040' }} ></View>
                            </View>
                            <View style={{ flex: .2, alignItems: 'center' }}>
                                <Text>Math</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>Actions.modal_test_lever()} style={{ flex: 1, }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: '100%', width: '60%', backgroundColor: '#1f6040' }} ></View>
                            </View>
                            <View style={{ flex: .2, alignItems: 'center' }}>
                                <Text>Math</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, marginTop: '2%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity  onPress={()=>Actions.modal_test_lever()} style={{ flex: 1, }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: '100%', width: '60%', backgroundColor: '#1f6040' }} ></View>
                            </View>
                            <View style={{ flex: .2, alignItems: 'center' }}>
                                <Text>Math</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>Actions.modal_test_lever()} style={{ flex: 1, }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: '100%', width: '60%', backgroundColor: '#1f6040' }} ></View>
                            </View>
                            <View style={{ flex: .2, alignItems: 'center' }}>
                                <Text>Math</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>Actions.modal_test_lever()} style={{ flex: 1, }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: '100%', width: '60%', backgroundColor: '#1f6040' }} ></View>
                            </View>
                            <View style={{ flex: .2, alignItems: 'center' }}>
                                <Text>Math</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flex: 2.2 }}>

                </View>
            </View>
        );
    }
}
// AppRegistry.registerComponent('OneAskIU', () => TestSkill);
