import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings64578Navigator from '../features/Settings64578/navigator';
import NotificationList64577Navigator from '../features/NotificationList64577/navigator';
import Maps64576Navigator from '../features/Maps64576/navigator';
import UserProfile64575Navigator from '../features/UserProfile64575/navigator';
import Maps64556Navigator from '../features/Maps64556/navigator';
import Settings64534Navigator from '../features/Settings64534/navigator';
import Settings64519Navigator from '../features/Settings64519/navigator';
import NotificationList64518Navigator from '../features/NotificationList64518/navigator';
import Maps64517Navigator from '../features/Maps64517/navigator';
import UserProfile64192Navigator from '../features/UserProfile64192/navigator';
import Maps64173Navigator from '../features/Maps64173/navigator';
import Settings64151Navigator from '../features/Settings64151/navigator';
import Settings64136Navigator from '../features/Settings64136/navigator';
import NotificationList64135Navigator from '../features/NotificationList64135/navigator';
import Maps64134Navigator from '../features/Maps64134/navigator';
import UserProfile64103Navigator from '../features/UserProfile64103/navigator';
import Maps64084Navigator from '../features/Maps64084/navigator';
import Settings64062Navigator from '../features/Settings64062/navigator';
import Settings64047Navigator from '../features/Settings64047/navigator';
import NotificationList64046Navigator from '../features/NotificationList64046/navigator';
import Maps64045Navigator from '../features/Maps64045/navigator';
import UserProfile64035Navigator from '../features/UserProfile64035/navigator';
import Tutorial64034Navigator from '../features/Tutorial64034/navigator';
import NotificationList64006Navigator from '../features/NotificationList64006/navigator';
import Settings64005Navigator from '../features/Settings64005/navigator';
import Settings63997Navigator from '../features/Settings63997/navigator';
import UserProfile63995Navigator from '../features/UserProfile63995/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings64578: { screen: Settings64578Navigator },
NotificationList64577: { screen: NotificationList64577Navigator },
Maps64576: { screen: Maps64576Navigator },
UserProfile64575: { screen: UserProfile64575Navigator },
Maps64556: { screen: Maps64556Navigator },
Settings64534: { screen: Settings64534Navigator },
Settings64519: { screen: Settings64519Navigator },
NotificationList64518: { screen: NotificationList64518Navigator },
Maps64517: { screen: Maps64517Navigator },
UserProfile64192: { screen: UserProfile64192Navigator },
Maps64173: { screen: Maps64173Navigator },
Settings64151: { screen: Settings64151Navigator },
Settings64136: { screen: Settings64136Navigator },
NotificationList64135: { screen: NotificationList64135Navigator },
Maps64134: { screen: Maps64134Navigator },
UserProfile64103: { screen: UserProfile64103Navigator },
Maps64084: { screen: Maps64084Navigator },
Settings64062: { screen: Settings64062Navigator },
Settings64047: { screen: Settings64047Navigator },
NotificationList64046: { screen: NotificationList64046Navigator },
Maps64045: { screen: Maps64045Navigator },
UserProfile64035: { screen: UserProfile64035Navigator },
Tutorial64034: { screen: Tutorial64034Navigator },
NotificationList64006: { screen: NotificationList64006Navigator },
Settings64005: { screen: Settings64005Navigator },
Settings63997: { screen: Settings63997Navigator },
UserProfile63995: { screen: UserProfile63995Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
