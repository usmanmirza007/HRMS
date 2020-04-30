import React from 'react';
import { StyleSheet, Text, View, Image, CheckBox, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialIcons } from '@expo/vector-icons';

export default class SignInRetailer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            text1: '',
            check1: false,

        };
    }
    CheckBox1() {
        this.setState({ check1: !this.state.check1 })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <ScrollView>
                    <Text style={styles.headerText}>HRMS Mobile App</Text>
                    <TextInput
                        style={styles.input}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#5f97f6',
                            }
                        }}
                        label='User ID'
                        placeholder="Enter User ID"
                        placeholderTextColor={'#000'}
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                    <TextInput
                        style={styles.input1}
                        mode='outlined'
                        theme={{
                            colors: {
                                primary: '#5f97f6',
                            }
                        }}
                        label='Password'
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        placeholderTextColor={'#000'}
                        value={this.state.text1}
                        onChangeText={text1 => this.setState({ text1 })}
                    />
                    <View style={styles.location}>
                        <MaterialIcons
                            // reverse
                            name='visibility'
                            type='font-awesome'
                            color='#5f97f6'
                            size={24}
                        />
                    </View>
                    <View style={{ flexDirection: 'row',  marginHorizontal: 15, marginTop: 10 }}>
                        <CheckBox
                            value={this.state.check1}
                            onChange={() => this.CheckBox1()}
                            
                        />
                        <Text style={{ marginTop: 5, color: '#000' }}>Remember Me</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('home')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signupView}>
                        <Text style={styles.alresdy}>Dont have an account?</Text>
                        <Text onPress={() => this.props.navigation.navigate('SignUp')}
                            style={styles.signupText}>Sign Up</Text>
                    </View>
                </ScrollView>
            </View >
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
    headerText: {
        marginTop: wp('10%'),
        fontSize: hp('4%'),
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#5f97f6'
    },
    input: {
        marginTop: wp('12%'),
        marginHorizontal: wp('5%'),
        backgroundColor: '#fff'
    },
    input1: {
        marginTop: wp('4%'),
        marginHorizontal: wp('5%'),
        backgroundColor: '#fff'
    },
    button: {
        marginTop: hp('5%'),
        alignItems: 'center',
        backgroundColor: '#5f97f6',
        borderRadius: wp('1%'),
        height: 50,
        marginHorizontal: wp('20%')
    },
    location: {
        position: 'absolute',
        marginLeft: wp('80%'),
        marginTop: hp('34%')
    },
    buttonText: {

        fontSize: 22,
        color: '#fff',
        marginTop: hp('1.5%')
    },
    signupView: {
        alignItems: 'center',
        marginTop: hp('5%')
    },
    alresdy: {
        fontSize: hp('2.5%'),
        color: '#000'
    },
    signupText: {
        fontSize: hp('2.5%'),
        marginTop: hp('1%'),
        color: '#5f97f6',
        fontWeight: 'bold'
    }
});