import React from 'react';
import { StyleSheet, Text, Switch, TextInput, View, Image, FlatList, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, SimpleLineIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import axios from 'axios';

export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            switchValue: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <View style={{ backgroundColor: '#5f97f6', height: 50 }}>
                    <View style={{ marginTop: hp('2%'), marginHorizontal: wp('5%'), flexDirection: 'row' }}>
                        <View style={{ marginLeft: wp('0%') }}>
                            <Entypo name='image' color='#fff' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                        <View style={{ marginLeft: wp('68%') }}>
                            <Ionicons name='ios-notifications' color='#fff' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                        <View style={{ marginLeft: wp('5%') }}>
                            <SimpleLineIcons name='options-vertical' color='#fff' size={26}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                        </View>
                    </View>
                </View>
                <View style = {{backgroundColor: '#f4f4f8'}}>
                <View style={{ padding: 10, marginTop: 5, marginHorizontal: 10,  }}>
                    <FontAwesome name='user' color='#5f97f6' size={26}
                        onPress={
                            () => this.props.navigation.navigate('#')
                        } />
                    <View style = {{marginTop: -25}}>
                        <Switch style={styles.switch} value={this.state.switchValue}
                            onTintColor = {'#5f97f6'}
                            thumbTintColor = {'#5f97f6'}
                            onValueChange={(switchValue => this.setState({ switchValue }))} />
                    </View>
                </View>
                </View>
                <ScrollView>
                    <View style = {{flexDirection: 'row', marginHorizontal: 40,  marginTop: 20, justifyContent: 'space-around'}}>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('calender')}
                        style = {{alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'lightgrey', borderWidth: 2, width: 120, height: 120}}>
                            <Image source = {require('./../image/logo1.png')} style = {{width: 50, height: 50}} />
                            <Text style = {{fontSize: 15, color: '#000'}}>Calender</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('myTeam')}
                        style = {{alignItems: 'center', justifyContent: 'center',borderRadius: 10, borderColor: 'lightgrey', borderWidth: 2, width: 120, height: 120}}>
                            <Image source = {require('./../image/logo1.png')} style = {{width: 50, height: 50}} />
                            <Text style = {{fontSize: 15, color: '#000'}}>My Team</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row', marginHorizontal: 40, marginTop: 20, justifyContent: 'space-around'}}>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('conpensation')}
                        style = {{alignItems: 'center', justifyContent: 'center',borderRadius: 10, borderColor: 'lightgrey', borderWidth: 2, width: 120, height: 120}}>
                            <Image source = {require('./../image/logo1.png')} style = {{width: 50, height: 50}} />
                            <Text style = {{fontSize: 15, color: '#000'}}>Compensation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Travel')}
                         style = {{alignItems: 'center', justifyContent: 'center',borderRadius: 10, borderColor: 'lightgrey', borderWidth: 2, width: 120, height: 120}}>
                            <Image source = {require('./../image/logo1.png')} style = {{width: 50, height: 50}} />
                            <Text style = {{fontSize: 14, color: '#000'}}>Travel & Expense</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row', marginHorizontal: 40,  marginTop: 20, justifyContent: 'space-around'}}>
                        <TouchableOpacity  onPress = {() => this.props.navigation.navigate('teamReqest')}
                         style = {{alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderColor: 'lightgrey', borderWidth: 2, width: 120, height: 120}}>
                            <Image source = {require('./../image/logo1.png')} style = {{width: 50, height: 50}} />
                            <Text style = {{fontSize: 15, color: '#000'}}>Team Reqests</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {{alignItems: 'center', justifyContent: 'center',borderRadius: 10, borderColor: 'lightgrey', borderWidth: 2, width: 120, height: 120}}>
                            <Image source = {require('./../image/logo1.png')} style = {{width: 50, height: 50}} />
                            <Text style = {{fontSize: 15, color: '#000'}}>Social Space</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: 'row', marginHorizontal: 40, marginBottom: 30, marginTop: 20, justifyContent: 'space-around'}}>
                        <TouchableOpacity style = {{alignItems: 'center', justifyContent: 'center',borderRadius: 10, borderColor: 'lightgrey', borderWidth: 2, width: 120, height: 120}}>
                            <Image source = {require('./../image/logo1.png')} style = {{width: 50, height: 50}} />
                            <Text style = {{fontSize: 15, color: '#000'}}>My Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {{alignItems: 'center', justifyContent: 'center',borderRadius: 10, borderColor: 'lightgrey', borderWidth: 2, width: 120, height: 120}}>
                            <Image source = {require('./../image/logo1.png')} style = {{width: 50, height: 50}} />
                            <Text style = {{fontSize: 14, color: '#000'}}>Coming Soon</Text>
                        </TouchableOpacity>
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
});