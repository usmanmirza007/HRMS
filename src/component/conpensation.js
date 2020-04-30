import React from 'react';
import { StyleSheet, Text, Switch, View, Image, FlatList, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome5, AntDesign, EvilIcons, MaterialIcons, SimpleLineIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Collapse, AccordionList, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

export default class conpensation extends React.Component {
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
                    
                    <View style = {{ borderRadius: 5, borderColor: 'lightgrey', borderWidth: 2, marginLeft: 20, marginTop: 20, marginBottom: 10, width: 250, height: 150}}>
                        <Text style = {{fontSize: 18, fontWeight: 'bold', color: '#000', marginVertical: 10, marginLeft: 20}}>My Conpensation</Text>
                        <View style={{ marginLeft: wp('5%') , flexDirection: 'row'}}>
                            <FontAwesome5 name='hand-holding-usd' color='#000' size={40}
                                onPress={
                                    () => this.props.navigation.navigate('#')
                                } />
                                <Text style = {{marginTop: hp('4%'), marginLeft: wp('5%'), fontSize: 13, color: 'blue', textDecorationLine: 'underline'}}>View Conpensation</Text>
                        </View>
                    </View>
                    <Collapse style={{ marginHorizontal: 18, marginTop: 10, marginBottom: 3 }}>
                        <CollapseHeader style={{ flexDirection: 'row', alignItems: 'center', width: width(90), padding: 10, backgroundColor: '#f0f0f0' }}>
                            <View style={{ marginLeft: 20, alignItems: 'center' }}>
                                <Text>PaySlip</Text>
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
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>Month</Text>
                                <TextInput
                                    style={styles.input}
                                    mode='outlined'
                                    theme={{
                                        colors: {
                                            primary: '#5f97f6',
                                        }
                                    }}
                                    label='Month'
                                    placeholder="Enter Month"
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