import React from 'react';
import { StyleSheet, Text, Switch, View, Image, FlatList, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, SimpleLineIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Collapse, AccordionList, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

export default class myTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <ScrollView>
                    <Collapse style={{ marginHorizontal: 18, marginTop: 20, marginBottom: 3 }}>
                        <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', width: width(90), padding: 10, backgroundColor: '#f0f0f0' }}>
                            <View style={{ marginLeft: 20, alignItems: 'center' }}>
                                <Text>My Team</Text>
                            </View>
                            <View style={{ marginLeft: 200 }}>
                                <Ionicons name='ios-arrow-down' color='#5f97f6' size={26}
                                    onPress={
                                        () => this.props.navigation.navigate('#')
                                    } />
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('./../image/logo1.png')} style={{ width: 70, height: 70, borderRadius: 70 }} />
                                <Image source={require('./../image/logo1.png')} style={{ width: 70, height: 70, borderRadius: 70 }} />
                                <Image source={require('./../image/logo1.png')} style={{ width: 70, height: 70, borderRadius: 70 }} />
                                <Image source={require('./../image/logo1.png')} style={{ width: 70, height: 70, borderRadius: 70 }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('./../image/logo1.png')} style={{ width: 70, height: 70, borderRadius: 70 }} />
                                <Image source={require('./../image/logo1.png')} style={{ width: 70, height: 70, borderRadius: 70 }} />
                                <Image source={require('./../image/logo1.png')} style={{ width: 70, height: 70, borderRadius: 70 }} />
                                <Image source={require('./../image/logo1.png')} style={{ width: 70, height: 70, borderRadius: 70 }} />

                            </View>
                        </CollapseBody>
                    </Collapse>
                    <Collapse style={{ marginHorizontal: 18, marginTop: 10, marginBottom: 3 }}>
                        <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', width: width(90), padding: 10, backgroundColor: '#f0f0f0' }}>
                            <View style={{ marginLeft: 20, alignItems: 'center' }}>
                                <Text>Attendence/Discrepancy</Text>
                            </View>
                            <View style={{ marginLeft: 100 }}>
                                <Ionicons name='ios-arrow-down' color='#5f97f6' size={26}
                                    onPress={
                                        () => this.props.navigation.navigate('#')
                                    } />
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>Employee</Text>
                                <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#5f97f6',
                                        }
                                    }}
                                    label='Employee'
                                    placeholder="Enter Employee Name"
                                    secureTextEntry={true}
                                    placeholderTextColor={'#000'}
                                    value={this.state.text1}
                                    onChangeText={text1 => this.setState({ text1 })}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>Date</Text>
                                <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#5f97f6',
                                        }
                                    }}
                                    label='Date'
                                    placeholder="Enter Date"
                                    secureTextEntry={true}
                                    placeholderTextColor={'#000'}
                                    value={this.state.text1}
                                    onChangeText={text1 => this.setState({ text1 })}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>In-Time</Text>
                                <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#5f97f6',
                                        }
                                    }}
                                    label='In Time'
                                    placeholder="Enter Time"
                                    secureTextEntry={true}
                                    placeholderTextColor={'#000'}
                                    value={this.state.text1}
                                    onChangeText={text1 => this.setState({ text1 })}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>Out-Time</Text>
                                <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#5f97f6',
                                        }
                                    }}
                                    label='Out Time'
                                    placeholder="Enter Time"
                                    secureTextEntry={true}
                                    placeholderTextColor={'#000'}
                                    value={this.state.text1}
                                    onChangeText={text1 => this.setState({ text1 })}
                                />
                            </View>
                        </CollapseBody>
                    </Collapse>
                    <Collapse style={{ marginHorizontal: 18, marginTop: 10, marginBottom: 3 }}>
                        <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', width: width(90), padding: 10, backgroundColor: '#f0f0f0' }}>
                            <View style={{ marginLeft: 20, alignItems: 'center' }}>
                                <Text>Leave</Text>
                            </View>
                            <View style={{ marginLeft: 215 }}>
                                <Ionicons name='ios-arrow-down' color='#5f97f6' size={26}
                                    onPress={
                                        () => this.props.navigation.navigate('#')
                                    } />
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>Employee</Text>
                                <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#5f97f6',
                                        }
                                    }}
                                    label='Employee'
                                    placeholder="Enter Employee Name"
                                    secureTextEntry={true}
                                    placeholderTextColor={'#000'}
                                    value={this.state.text1}
                                    onChangeText={text1 => this.setState({ text1 })}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>Date</Text>
                                <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#5f97f6',
                                        }
                                    }}
                                    label='Date'
                                    placeholder="Enter Date"
                                    secureTextEntry={true}
                                    placeholderTextColor={'#000'}
                                    value={this.state.text1}
                                    onChangeText={text1 => this.setState({ text1 })}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>Leave Type</Text>
                                <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#5f97f6',
                                        }
                                    }}
                                    label='Leave'
                                    placeholder="Enter Leave Type"
                                    secureTextEntry={true}
                                    placeholderTextColor={'#000'}
                                    value={this.state.text1}
                                    onChangeText={text1 => this.setState({ text1 })}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>Balance</Text>
                                <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#5f97f6',
                                        }
                                    }}
                                    label='Balance'
                                    placeholder="Enter Balance"
                                    secureTextEntry={true}
                                    placeholderTextColor={'#000'}
                                    value={this.state.text1}
                                    onChangeText={text1 => this.setState({ text1 })}
                                />
                            </View>
                        </CollapseBody>
                    </Collapse>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('home')}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
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
    OuterInput: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: -5
    },
    input: {
        marginTop: wp('0%'),
        width: wp('65%'),
        backgroundColor: '#fff'
    },
    button: {
        marginTop: hp('5%'),
        alignItems: 'center',
        backgroundColor: '#5f97f6',
        borderRadius: wp('1%'),
        height: 50,
        marginHorizontal: wp('20%'),
        marginBottom: hp('5%')
    },
    buttonText: {
        fontSize: 22,
        color: '#fff',
        marginTop: hp('1.5%')
    },
});