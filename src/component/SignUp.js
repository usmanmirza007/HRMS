import React from 'react';
import { StyleSheet, Text, View, Image, Alert, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import axios from 'axios';
import SpinnerScreen from './SpinnerScreen';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      password: '',
      errorText: '',
      loading: false
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#000', height: '4%' }}></View>
        <KeyboardAvoidingView behavior="padding">
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
              label='User Name'
              placeholder="Enter your Name"
              placeholderTextColor={'#000'}
              value={this.state.fname}
              onChangeText={fname => this.setState({ fname })}
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
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />

            <Text style={{ color: 'red', alignSelf: 'center', fontSize: 15 }}>{this.state.errorText}</Text>
            <TouchableOpacity style={styles.button}
              onPress={() => this.register()}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.signupView}>
              <Text style={styles.alresdy}>Already have an account?</Text>
              <Text onPress={() => this.props.navigation.navigate('SignIn')}
                style={styles.signupText}>Sign In</Text>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
  buttonText: {

    fontSize: 22,
    color: '#fff',
    marginTop: hp('1.5%')
  },
  signupView: {
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: hp('5%')
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
  },

});