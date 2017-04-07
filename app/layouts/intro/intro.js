import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image, Modal
} from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import {
    Scene,
    Reducer,
    Router,
    Actions,
    ActionConst,

} from 'react-native-router-flux';
import { actionCreators } from '../../actions/introAction';
import Login from '../login/login'

const mapStateToProps = (state) => ({
    isFirst: state.isFirst,
})
class Intro extends Component {
    changeState = () => {
        const { dispatch } = this.props
        Actions.pop()
        dispatch(actionCreators.rerun())
        console.log('to login')
    }
    render() {
        return (
            /*<Modal
           
                onRequestClose={() => { }}
            >*/
                <Swiper
                    showsButtons={true}
                    loop={false}
                    nextButton={<Text style={{ color: 'white' }}>Tiếp theo</Text >}
                    prevButton={<Text ></Text >}
                    buttonWrapperStyle={
                        {
                            marginTop: '50%', marginRight: '35%',
                            backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute',
                            justifyContent: 'space-between', alignItems: 'center',
                        }
                    }

                    dot={
                        <View style={{
                            backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5,
                            borderRadius: 4, marginLeft: 3,
                            marginRight: 3, marginTop: 3, marginBottom: 3,
                        }} />
                    }
                    activeDot={
                        <View style={{
                            backgroundColor: 'white', width: 5, height: 5,
                            borderRadius: 4, marginLeft: 3,
                            marginRight: 3, marginTop: 3, marginBottom: 3,
                        }} />
                    }
                    paginationStyle={
                        {
                            backgroundColor: 'transparent',
                            paddingBottom: '35%',
                        }
                    }
                >
                    <View style={[styles.slide, styles.container]} level={10}  >
                        <View style={{ flex: 2 }}>

                        </View>

                        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 4 }}>
                                <Image />
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text style={{ color: 'white' }}>Instant Question & Answers</Text>
                            </View>
                        </View>
                        <View style={{ flex: .7, backgroundColor: 'steelblue' }}>

                        </View>
                        <View style={{ flex: 3, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }} >Welcome</Text>
                            </View>
                            <View style={{ flex: 4, alignItems: 'center' }}>
                                <Text numberOfLines={5} style={{ textAlign: 'center' }} >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                                    </Text>
                            </View>

                        </View>
                        <View style={{ flex: 4 }}>

                        </View>
                    </View>
                    <View style={[styles.slide, styles.container]} level={10} >
                        <View style={{ flex: 2, backgroundColor: 'steelblue' }}>

                        </View>

                        <View style={{ flex: 3, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 4 }}>
                                <Image />
                            </View>


                        </View>
                        <View style={{ flex: .7, backgroundColor: 'steelblue' }}>

                        </View>
                        <View style={{ flex: 3, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }} >Welcome</Text>
                            </View>
                            <View style={{ flex: 4, alignItems: 'center' }}>
                                <Text numberOfLines={5} style={{ textAlign: 'center' }} >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                        </Text>
                            </View>
                        </View>
                        <View style={{ flex: 4, backgroundColor: 'steelblue' }}>
                        </View>
                    </View>
                    <View style={[styles.slide, styles.container]} level={10}>
                        <View style={{ flex: 2, backgroundColor: 'steelblue' }}>

                        </View>

                        <View style={{ flex: 3, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 4 }}>
                                <Image />
                            </View>


                        </View>
                        <View style={{ flex: .7, backgroundColor: 'steelblue' }}>

                        </View>
                        <View style={{ flex: 3, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }} >Welcome</Text>
                            </View>
                            <View style={{ flex: 4, alignItems: 'center' }}>
                                <Text numberOfLines={5} style={{ textAlign: 'center' }} >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                        </Text>
                            </View>

                        </View>
                        <View style={{ flex: 4, backgroundColor: 'steelblue' }}>

                        </View>
                    </View>

                    <View style={[styles.slide, styles.container]} level={10}>
                        <View style={{ flex: 2, backgroundColor: 'steelblue' }}>

                        </View>

                        <View style={{ flex: 3, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 4 }}>
                                <Image />
                            </View>


                        </View>
                        <View style={{ flex: .7, backgroundColor: 'steelblue' }}>

                        </View>
                        <View style={{ flex: 3, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }} >Welcome</Text>
                            </View>
                            <View style={{ flex: 4, alignItems: 'center' }}>
                                <Text numberOfLines={5} style={{ textAlign: 'center' }} >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                        </Text>
                            </View>

                        </View>
                        <View style={{ flex: 4 }}>
                            <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                                <Text onPress={this.changeState} style={{ color: 'white', marginLeft: '72%' }}> Đăng nhập</Text>
                            </View>
                            <View style={{ flex: 3.55 }}>

                            </View>
                        </View>
                    </View>
                </Swiper >
            // </Modal>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f6040',

    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        padding: 15,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

});

export default connect(mapStateToProps)(Intro)