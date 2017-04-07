import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity, Modal

} from 'react-native';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/introAction';
import Swiper from 'react-native-swiper';
import Title from '../../components/title';
import { Actions } from "react-native-router-flux";
// import Modal from 'react-native-simple-modal';
import PopupDialog from 'react-native-popup-dialog';
const mapStateToProps = (state) => ({

})
class AnswersItem extends Component {
    renderItem = (option, i) => {
        const { onPressItem } = this.props

        return (
            <TouchableOpacity
                key={i}
                style={[styles.answersItem, {}]}
                onPress={() => onPressItem(i)}
            >
                <View style={styles.option}>
                    <Text style={{ color: 'white', fontSize: 14 }}>{option}</Text>
                </View>
                <Text style={{ color: 'gray', fontSize: 12 }}>Option {option}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const list = ['A', 'B', 'C', 'D']
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderTopColor: 'gray', borderBottomWidth: 5 }}>
                {list.map(this.renderItem)}
            </View>
        )
    }

}
class TestLever extends Component {
    constructor(props) {
        super(props)
        this.state = {
            m: 9,
            s: 59,
            indexQuestion: 15,
            modalVisible: false
        };

        this.runInterval;
        this.isRunning = false;
    }
    run() {
        if (!this.isRunning) {
            this.runInterval = setInterval(() => {

                this.setState({
                    s: this.state.s == 0 ? 59 : this.state.s - 1,
                    m: this.state.s > 0 ? this.state.m : this.state.m - 1,
                });
            }, 1000);
            this.isRunning = true;
        }

    }
    stop() {
        clearInterval(this.runInterval);
    }
    componentDidUpdate(props, state) {
        if (this.state.m == 0 && this.state.s == 0) {
            this.stop();
        }

    }
    onPressItem = () => {
        if (this.state.indexQuestion < 15)
            this.setState({ indexQuestion: this.state.indexQuestion + 1 })
        else {
            this.setState({ modalVisible: true })
        }
        console.log('onPressItem', this.state.indexQuestion)
    }
    componentDidMount() {
        if (!this.isRunning) { this.run(); }
    }
    onPressModal() {
        this.setState({ modalVisible: false })
    }
    onRequestClose() {
        this.setState({ modalVisible: false })
        this.stop();
        Actions.popTo("root");
        Actions.main();
    }
    submit = () => {
        this.setState({
            modalVisible: false
        })
        const { dispatch } = this.props;
        dispatch(actionCreators.pass());

    }
    render() {
        // const list = ['A', 'B', 'C', 'D']
        const { m, s, indexQuestion, modalVisible } = this.state
        const { title } = this.props
        let giay = s < 10 ? `0${s}` : s
        return (
            <View style={{ flex: 1 }}>
                <Title text='Test Math Lever' current={indexQuestion} />

                <View style={{ flex: 9.9 }} >
                    <View style={{ flex: .35, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>0{m}:{giay}</Text>
                    </View>
                    <View style={{ flex: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>asdasfgdhfgjkjl;'

                        </Text>
                    </View>
                </View>
                <View style={{ flex: .1, borderTopColor: '#c0c1c4', borderTopWidth: 1 }} >

                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <AnswersItem onPressItem={this.onPressItem} />
                </View>

                <PopupDialog
                    overlayOpacity={.5} show={modalVisible} onDismissed={() => this.onRequestClose()}
                    width='50%' height='30%'
                    style={{
                        flex: 1, alignItems: 'center',
                        backgroundColor: '#F5F5F5',

                    }}>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 26, height: 26, borderRadius: 13, backgroundColor: '#2f5947', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', }}>√</Text>
                            </View>
                            <Text style={{ color: '#2f5947', fontStyle: 'italic', fontSize: 16 }}> Congratulations!</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text> You pass the Test Lever</Text>
                            <Text> Your results: 15/15</Text>
                        </View>
                        <View style={{ flex: .5, width: '100%', borderTopColor: 'gray', borderTopWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text onPress={this.submit} style={{ color: '#2f5947', fontWeight: 'bold' }}>Next Step</Text>
                        </View>
                    </View>
                </PopupDialog>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    answersItem: {
        flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'

    },
    option: {
        // flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        width: 26,
        height: 26,
        borderRadius: 13,
    }
}

)

export default connect(mapStateToProps)(TestLever)