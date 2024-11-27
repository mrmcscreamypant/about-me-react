import HomeScreen from './pages/HomePage'
import AboutScreen from './pages/AboutPage'
import ReactScreen from './pages/ReactPage'

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  screens: {
    "Home": HomeScreen,
    "About": AboutScreen,
    "React": ReactScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (<><Navigation /></>);
}