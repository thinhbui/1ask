import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Rating from 'react-native-easy-rating';
// import StarRating from 'react-native-star-rating';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // starCount: 3.5
        };
        this.text
        this.image
    }
    render() {
        const { text, image } = this.props
        return (
            <View style={{
                height: 180,
                alignItems: 'center', justifyContent: 'center'
            }}>
                <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center', }}>
                    <Image style={{ position: 'absolute', zIndex: 2, width: 80, height: 80 }} source={require('../../images/ic_Avatar.png')} />
                    <Image style={{ zIndex: 1, width: 60, height: 60, borderRadius: 30 }} source={require('../../images/ic_plusLogin.png')} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 'bold', }}> {text}</Text>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Rating
                        rating={4}
                        max={5}
                        iconWidth={24}
                        iconHeight={24}
                        iconSelected={require('../../images/ic_rating_active.png')}
                        iconUnselected={require('../../images/ic_rating_none.png')}
                        onRate={(rating) => this.setState({ rating: rating })}
                        editable={true}
                    />
                </View>
            </View>
        )
    }
}
AppRegistry.registerComponent('OneAskIU', () => Profile);
