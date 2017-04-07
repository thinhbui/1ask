import React from 'react';
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
    StatusBar,
    Text, Image, CameraRoll
} from 'react-native';
import Camera from 'react-native-camera';


import CameraRollPicker from 'react-native-camera-roll-picker';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';

export default class CustomActions extends React.Component {
    constructor(props) {
        super(props);
        this.camera = null;

        this.state = {
            camera: {
                aspect: Camera.constants.Aspect.fill,
                captureTarget: Camera.constants.CaptureTarget.cameraRoll,
                type: Camera.constants.Type.back,
                orientation: Camera.constants.Orientation.auto,
                flashMode: Camera.constants.FlashMode.auto,
            },
            modalVisible: false,
            modalCamVisible: false
        };
        this._images = [];
        this.onActionsPress = this.onActionsPress.bind(this);
        this.selectImages = this.selectImages.bind(this);
    }
    takePicture = () => {
        console.log('takePicture')
        this.camera.capture()
            .then((data) => {
                console.log(data);
                this.props.onSend([
                    {
                        _id: 2,
                        image: data.path,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'React Native',
                            avatar: 'https://facebook.github.io/react/img/logo_og.png',
                        },
                    },
                ]);
            })
            .catch(err => console.error(err));
        this.setState({
            modalCamVisible: false
        })
    }
    switchType = () => {
        let newType;
        const { back, front } = Camera.constants.Type;

        if (this.state.camera.type === back) {
            newType = front;
        } else if (this.state.camera.type === front) {
            newType = back;
        }

        this.setState({
            camera: {
                ...this.state.camera,
                type: newType,
            },
        });
    }

    switchType = () => {
        let newType;
        const { back, front } = Camera.constants.Type;

        if (this.state.camera.type === back) {
            newType = front;
        } else if (this.state.camera.type === front) {
            newType = back;
        }

        this.setState({
            camera: {
                ...this.state.camera,
                type: newType,
            },
        });
    }


    setImages(images) {
        this._images = images;
        console.log('setImages', images)
    }

    getImages() {
        return this._images;
    }
    setModalCamVisible(visible) {
        this.setState({ modalCamVisible: visible });
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    onActionsPress() {
        const options = ['Choose From Library', 'Take Photo', 'Cancel'];
        const cancelButtonIndex = options.length - 1;
        this.context.actionSheet().showActionSheetWithOptions({
            options,
            cancelButtonIndex,
        },
            (buttonIndex) => {
                switch (buttonIndex) {
                    case 0:
                        this.setModalVisible(true);
                        break;
                    case 1:
                        this.setModalCamVisible(true);
                        break;
                    default:
                }
            });
    }

    selectImages(images) {
        this.setImages(images);
    }

    renderNavBar() {
        return (
            <NavBar style={{
                statusBar: {
                    backgroundColor: '#FFF',
                },
                navBar: {
                    backgroundColor: '#FFF',
                },
            }}>
                <NavButton onPress={() => {
                    this.setModalVisible(false);
                }}>
                    <NavButtonText style={{
                        color: '#000',
                    }}>
                        {'Cancel'}
                    </NavButtonText>
                </NavButton>
                <NavTitle style={{
                    color: '#000',
                }}>
                    {'Camera Roll'}
                </NavTitle>
                <NavButton onPress={() => {
                    this.setModalVisible(false);

                    const images = this.getImages().map((image) => {
                        return {
                            image: image.uri,
                        };
                    });
                    console.log(images)
                    this.props.onSend(images);
                    this.setImages([]);
                }}>
                    <NavButtonText style={{
                        color: '#000',
                    }}>
                        {'Send'}
                    </NavButtonText>
                </NavButton>
            </NavBar >
        );
    }

    renderIcon() {
        if (this.props.icon) {
            return this.props.icon();
        }
        return (
            <View style={[styles.wrapper, this.props.wrapperStyle]} >
                <Text style={[styles.iconText, this.props.iconTextStyle]}>+</Text>

            </View>
        );
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.container, this.props.containerStyle]}
                onPress={this.onActionsPress}
            >
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                >
                    {this.renderNavBar()}
                    <CameraRollPicker
                        maximum={10}
                        imagesPerRow={4}
                        callback={this.selectImages}
                        selected={[]}
                    />
                </Modal>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.modalCamVisible}
                    onRequestClose={() => {
                        this.setModalCamVisible(false);
                    }}

                >
                    <StatusBar
                        animated
                        hidden
                    />
                    <Camera
                        ref={(cam) => {
                            this.camera = cam;
                        }}
                        style={styles.preview}
                        aspect={this.state.camera.aspect}
                        captureTarget={this.state.camera.captureTarget}
                        type={this.state.camera.type}
                        flashMode={this.state.camera.flashMode}
                        defaultTouchToFocus
                        mirrorImage={false}
                    />
                    <View style={[styles.overlay, styles.topOverlay]}>
                        <TouchableOpacity
                            style={styles.typeButton}
                            onPress={this.switchType}
                        >
                            <Image
                                source={this.typeIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.flashButton}
                            onPress={this.switchFlash}
                        >
                            <Image
                                source={this.flashIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.overlay, styles.bottomOverlay]}>
                        {

                            <TouchableOpacity
                                style={styles.captureButton}
                                onPress={this.takePicture}
                            >
                                <Image
                                    source={require('./assets/ic_photo_camera_36pt.png')}
                                />
                            </TouchableOpacity>

                        }
                    </View>
                </Modal>
                {this.renderIcon()}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 26,
        height: 26,
        marginLeft: 10,
        marginBottom: 10,
    },
    wrapper: {
        borderRadius: 13,
        borderColor: '#b2b2b2',
        borderWidth: 2,
        flex: 1,
    },
    iconText: {
        color: '#b2b2b2',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        padding: 16,
        right: 0,
        left: 0,
        alignItems: 'center',
    },
    topOverlay: {
        top: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomOverlay: {
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureButton: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 40,
    },
    typeButton: {
        padding: 5,
    },
    flashButton: {
        padding: 5,
    },
    buttonsSpace: {
        width: 10,
    },
});

CustomActions.contextTypes = {
    actionSheet: React.PropTypes.func,
};

CustomActions.defaultProps = {
    sendImage: () => { },
    onSend: () => { },
    options: {},
    icon: null,
    containerStyle: {},
    wrapperStyle: {},
    iconTextStyle: {},
};

CustomActions.propTypes = {
    sendImage: React.PropTypes.func,
    onSend: React.PropTypes.func,
    options: React.PropTypes.object,
    icon: React.PropTypes.func,
    containerStyle: View.propTypes.style,
    wrapperStyle: View.propTypes.style,
    iconTextStyle: Text.propTypes.style,
};