/* Business Case Nobo
React Native + json
Solène Clénet 12/12/2020 */

import * as React from 'react';
import { Button, Text, View, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LogoTitle from './components/LogoTitle';
import AppButton from './components/AppButton';
import ListPresta from './components/ListPresta';
import DetailPresta from './components/DetailPresta';
import { useFonts, GothanLigth } from '@expo-google-fonts/inter';

import prestation from './assets/prestation.json';

global.isFromManageUserAccount=false;
global.id=null;

function HomeScreen({ navigation }) {
  return (
    <View style={styles.view}>  
      <Text style={styles.head}>Bienvenue !</Text>
      <Text style={styles.text}>Sur cette application vous pouvez voir le détail de chaque prestation. Pour cela, allez d'abord dans l'onglet liste, sélectionnez la prestation choisie, puis les détails voulus s'afficheront dans l'onglet Détails.</Text>
      <Text style={styles.text}>Attention, pour changer de prestation sélectionnée, il faut recharger l'application.</Text>
    </View>
  );
}
function ListScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Text style={styles.head}>Liste des prestations</Text>
      <View style={styles.container}>
        <ListPresta data={prestation} />
      </View>
    </View>
  );
}
function PrestationScreen({ navigation }) {
  return (
    <View style={styles.view}>  
      <Text style={styles.head}>Détail des prestations</Text>
      <DetailPresta data={prestation}/>
    </View>
  );
}
const HomeStack = createStackNavigator();
function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#ffa8a8',
              },
            headerTitle: (props) => <LogoTitle {...props} /> 
            }}
        />
   </HomeStack.Navigator>
  );
}
const ListStack = createStackNavigator();
function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen
          name="Home"
          component={ListScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#ffa8a8',
              },
            headerTitle: (props) => <LogoTitle {...props} /> 
            }}
        />
        <Tab.Screen name="Détails" component={PrestationStackScreen} />
    </ListStack.Navigator>
  );
}
const PrestationStack = createStackNavigator();
function PrestationStackScreen() {
  return (
    <PrestationStack.Navigator>
      <PrestationStack.Screen
          name="Prestation"
          component={PrestationScreen}
          options={{ 
            headerStyle: {
              backgroundColor: '#ffa8a8',
              },
            headerTitle: (props) => <LogoTitle {...props} /> 
            }}
        />
    </PrestationStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({ GothanLigth: require('./assets/Gotham-Light.ttf') });
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              } else if (route.name === 'Liste') {
                iconName = focused
                ? 'ios-list-box'
                : 'ios-list';
              } else if (route.name === 'Détails') {
                iconName = focused
                ? 'ios-more'
                : 'ios-more';
              } return <Ionicons name={iconName} size={size} color={color}/>;
            },
          })}
          
          tabBarOptions={{
            activeTintColor: '#ffa8a8',
            inactiveTintColor: 'black',
        }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Liste" component={ListStackScreen} />
          <Tab.Screen name="Détails" component={PrestationStackScreen} />

        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = {
  view: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontFamily: 'Gotham-Light',
    fontSize: 15,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    margin: 10,
  },
  head: {
    fontFamily: 'Gotham-Light',
    fontSize: 30,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    textAlign: 'center',
    margin: 20,
  },
  container: {
    flex: 1,
    paddingTop: 20
  }
};