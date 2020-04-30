import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import Forget from '../component/Forget';
import splash from './../component/splash';
import home from './../component/home';
import calender from './../component/calender';
import myTeam from './../component/myTeam';
import Travel from './../component/Travel';
import teamReqest from './../component/teamReqest';
import conpensation from './../component/conpensation';
import {createStackNavigator} from 'react-navigation-stack';
//import SafeAreaView from 'react-native-safe-area-view';
import SafeAreaView from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route =  createStackNavigator({
    splash: {
        screen: splash,
        navigationOptions: {
            headerShown: false
        },
    },
    teamReqest: {
        screen: teamReqest,
        navigationOptions: {
            headerShown: false
        },
    },
    Travel: {
        screen: Travel,
        navigationOptions: {
            headerShown: false
        },
    },
    conpensation: {
        screen: conpensation,
        navigationOptions: {
            headerShown: false
        },
    },
    myTeam: {
        screen: myTeam,
        navigationOptions: {
            headerShown: false
        },
    },
    calender: {
        screen: calender,
        navigationOptions: {
            headerShown: false
        },
    },
    home: {
        screen: home,
        navigationOptions: {
            headerShown: false
        },
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            headerShown: false
        },
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            headerShown: false

        },
    },
    Forget: {
        screen: Forget,
        navigationOptions: {
            headerShown: false

        },
    },
    
  },{
      initialRouteName: 'SignIn'
  })

export default createAppContainer(Route);

