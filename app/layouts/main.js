import { AppRegistry, StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
import {
    PagerTabIndicator,
    IndicatorViewPager,
    PagerTitleIndicator,
    PagerDotIndicator
}
    from 'rn-viewpager';
import Title from '../components/main_title';
import WaitQuestion from './wait_question/index';
import Wallet from './setting/wallet';
export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <IndicatorViewPager
                    style={{ flex: 1, backgroundColor: 'white' }}
                    indicator={this._renderTabIndicator()}

                >
                    <View style={{ flex: 1 }}>
                        <WaitQuestion />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Title text="History"
                            icon={() => { return (null) }} />
                        <View style={{ flex: 10 }}></View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Wallet />
                    </View>
                </IndicatorViewPager>
            </View>
        );
    }



    _renderTabIndicator() {
        let tabs = [{
            text: 'Questions',
            iconSource: require('../images/ic_myQuestion.png'),
            selectedIconSource: require('../images/ic_myQuestion_active.png')
        }, {
            text: 'History',
            iconSource: require('../images/ic_Question.png'),
            selectedIconSource: require('../images/ic_Question_Active.png')
        }, {
            text: 'Wallet',
            iconSource: require('../images/ic_myWallet_active.png'),
            selectedIconSource: require('../images/ic_myWallet_active.png')
        }];
        return <PagerTabIndicator selectedTextStyle={{ color: 'rgb(23, 93, 81)' }} style={{ flex: .08 }} tabs={tabs} />;
    }

}
AppRegistry.registerComponent('OneAskIU', () => Main)