import {
    Scene,
    Reducer,
    Router,
    Actions,
    ActionConst,
    Modal
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { actionCreators } from './actions/introAction';
import React, { Component, } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    NetInfo,
    AsyncStorage
} from 'react-native';

import Intro from './layouts/intro/intro';
import Login from './layouts/login/login';
import TestSkill from './layouts/test_skill/testskill';
import LeverTest from './layouts/lever_test/test_lever';
import UpdateProfile from './layouts/setting/update_profile';
import TestLever from './layouts/lever_test/modal_test_lever';
import Main from './layouts/main';
import Payment from './layouts/setting/payment';
import Notification from './layouts/wait_question/notification';
// import init from 'react_native_mqtt';



const mapStateToProps = (state) => ({
    isFirst: state.isFirst,
    isLogin: state.isLogin,
    user: state.user
})
class App extends Component {
    /*  constructor(props) {
          super(props);
          // fetch('settings/constants?lang=vi', {
          //     method: 'GET',
          //     headers: {
          //         'Accept': 'application/json',
          //         'Content-Type': 'application/json'
          //     }
          // }).then((response) => {
          //     if (response.status >= 200 && response.status < 300) {
          //         return response.json();
          //     } else {
          //         let error = new Error(response.statusText);
          //         error.response = response;
          //         throw error;
          //     }
          // }).then((responseJson) => {
          //     console.log(responseJson);
          //     AsyncStorage
          //         .setItem('setting_system', JSON.stringify(responseJson))
          //         .then()
          //         .done();
          // }).catch((error) => {
          //     alert(error);
          // });
  
          init({
              size: 10000,
              storageBackend: AsyncStorage,
              defaultExpires: 1000 * 3600 * 24,
              enableCache: true,
              sync: {
              }
          });
          client = new Paho.MQTT.Client('service.1ask.asia', 9883, 'u12312485723698rhsudyg9woshgkvfpsotjgbkvdruh');
      }*/

    componentDidMount() {
        // const { isFirst } = this.props
        // if (isFirst) {
        //     Actions.intro()
        // }
        // const { isFirst, user } = this.props;
        // console.log('componentDidUpdate', `is first:${isFirst}`)
        // if (isFirst)
        //     Actions.intro()
        // if (user !== null)
        //     Actions.main()
    }
    checkNetWork = () => {
        console.log('checkNetWork')
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log(isConnected ? 'online' : 'offline');
        });
    }


    componentWillMount() {
        this.checkNetWork();
        console.log('componentWillMount', `is first: ${this.props.isFirst}`)
    }

    componentDidUpdate(props, state) {
        // const { isFirst, user } = this.props;
        // console.log('componentDidUpdate', `is first:${isFirst}`)
        // if (isFirst)
        //     Actions.intro()
        // if (user !== null)
        //     Actions.main()
    }
    render() {
        const { isFirst, isLogin } = this.props
        console.log('isLogin', isLogin)
        if (isLogin)
            return (
                <Router>
                    <Scene key="modal" component={Modal} >
                        <Scene key="root" hideNavBar >
                            <Scene key="intro" component={Intro} />
                            <Scene key="login" component={Login} />
                            <Scene key="testSkill" hideNavBar component={TestSkill} />
                            <Scene key="modal_test_lever" hideNavBar component={TestLever} />
                            <Scene key="main" component={Main} initial/>
                            <Scene key="update_profile" hideNavBar component={UpdateProfile}></Scene>
                            <Scene key="payment" hideNavBar component={Payment}></Scene>
                            <Scene key="notification" hideNavBar component={UpdateProfile}></Scene>
                        </Scene>
                    </Scene>
                </Router>
            )
        else
            return (
                <Router>
                    <Scene key="modal" component={Modal} >
                        <Scene key="root" hideNavBar >
                            <Scene key="intro" component={Intro} />
                            <Scene key="login" component={Login} initial />
                            <Scene key="testSkill" hideNavBar component={TestSkill} />
                            <Scene key="modal_test_lever" hideNavBar component={TestLever} />
                            <Scene key="main" component={Main} ></Scene>
                            <Scene key="update_profile" hideNavBar component={UpdateProfile}></Scene>
                            <Scene key="payment" hideNavBar component={Payment}></Scene>
                            <Scene key="notification" hideNavBar component={UpdateProfile}></Scene>
                        </Scene>
                    </Scene>
                </Router>
            )

    }
}
AppRegistry.registerComponent('OneAskIU', () => App);
export default connect(mapStateToProps)(App)

   /*<Router>
                <Scene key="modal" component={Modal} >
                    <Scene key="root" hideNavBar>
                        <Scene key="intro" component={Intro} />
                        <Scene key="login" component={Login} initial />
                        <Scene key="testSkill" hideNavBar component={TestSkill} />
                        <Scene key="modal_test_lever" hideNavBar component={TestLever} />
                        <Scene key="main" component={Main} ></Scene>
                        <Scene key="update_profile" hideNavBar component={UpdateProfile}></Scene>
                        <Scene key="payment" hideNavBar component={Payment}></Scene>
                        <Scene key="notification" hideNavBar component={UpdateProfile}></Scene>
                    </Scene>
                </Scene>
            </Router>*/