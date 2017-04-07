import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image, TouchableOpacity
} from 'react-native';
import {
    Actions
} from 'react-native-router-flux';
// import { actionCreators } from './actions/introAction';
export default class TestSkill extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1.6, }}>

                </View>

                <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 2.8, backgroundColor: 'steelblue', width: '20%' }}>
                        <Image />
                    </View>
                    <View style={{ flex: .2 }}>

                    </View>

                    <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Test Skill</Text>
                        <Text numberOfLines={2} style={{ textAlign: 'center' }}>Test Lever ajshdkajhfalkj skajhsdfka JHSDLKjhas dJASHDKJDFKHSDFKJH</Text>
                    </View>
                </View>


                <View style={{ flex: 3.5, }}>
                    <View style={{ flex: 4, justifyContent: 'flex-end', marginLeft: '3%' }}>
                        <View style={[styles.line, { flex: 1 }]}>
                            <View style={[styles.ul, { justifyContent: 'center', alignItems: 'center' }]}>
                                <Text style={{ color: 'white' }}>1</Text>
                            </View>
                            <Text style={{ flex: 1 }}>You bla bla bla bla bla</Text>
                        </View>
                       
                        <View style={[styles.line, { flex: 1 }]}>
                            <View style={[styles.ul, { justifyContent: 'center', alignItems: 'center' }]}>
                                <Text numberOfLines={2} style={{ color: 'white' }}>2</Text>
                            </View>
                            <Text style={{ flex: 1 }}>You bla bla bla bla bla</Text>
                        </View>
                        <View style={[styles.line, { flex: 1 }]}>
                            <View style={[styles.ul, { justifyContent: 'center', alignItems: 'center' }]}>
                                <Text style={{ color: 'white' }}>3</Text>
                            </View>
                            <Text style={{ flex: 1 }}>You bla bla bla bla bla</Text>
                        </View>

                    </View>
                    <View style={{ flex: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>

                        </View>
                        <View style={{ flex: .2 }}></View>
                        <TouchableOpacity style={{ flex: .8, backgroundColor: '#2f5947', width: '80%', justifyContent: 'center', borderRadius: 5, }}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Start Test Lever</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 2.4 }}>

                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    ul: {
        backgroundColor: '#2f5947',
        width: 18,
        height: 18,
        borderRadius: 9,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    ul1: {
        backgroundColor: '#2f5947',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    line: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'

    }

});
AppRegistry.registerComponent('OneAskIU', () => TestSkill);
