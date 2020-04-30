import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')

export default class splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {

        setTimeout(() => { this.props.navigation.navigate('getStarted1') }, 2000);

    }

    render() {
        return (
            <ImageBackground source={require('./../image/splash.jpg')} style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});