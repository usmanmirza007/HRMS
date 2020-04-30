import React from 'react';
import { StyleSheet, Text, Switch, View, Image, FlatList, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TouchableRipple } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, SimpleLineIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Collapse, AccordionList, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";

export default class Travel extends React.Component {
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
                    <View style = {{flexDirection: 'row', justifyContent: 'space-around', marginVertical: hp('3%')}}>
                        <Text style = {{fontSize: 15, fontWeight: 'bold', }} >Username</Text>
                        <Text style = {{fontSize: 15, fontWeight: 'bold', }}>Travel</Text>
                        <Text style = {{fontSize: 15, fontWeight: 'bold', }}>Expense</Text>
                    </View>
                    <View style = {{flexDirection: 'row', marginBottom: hp('3%')}}>
                        <Text style = {{fontSize: 15, fontWeight: 'bold', marginLeft: wp('9.5%') }} >bilal</Text>
                        <Text style = {{fontSize: 15, fontWeight: 'bold', marginLeft: wp('29%')}}>lahore</Text>
                        <Text style = {{fontSize: 15, fontWeight: 'bold', marginLeft: wp('17%')}}>1000</Text>
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