import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { HomeScreen } from './Screens/Home.js'
import { styles } from './Styles/Styles.js'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
import { BuildingScreen } from './Screens/Building.js';

const Stack = createStackNavigator();

export default function App({ navigation }) {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName>
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        headerStyle: {backgroundColor: '#003B71'}, 
                        headerTintColor: 'white',
                        header: HomeHeader
                    }}
                />
                <Stack.Screen
                    name="Building"
                    component={BuildingScreen}
                    options={{
                        headerStyle: {backgroundColor: '#003B71'}, 
                        headerTintColor: 'white',
                        header: BuildingHeader,
                    }}
                />
            </Stack.Navigator>      
        </NavigationContainer>
    );
}

function HomeHeader ( {route, navigation } ) {
    return (
        <SafeAreaView style={styles.logoHeader}>
            <Image source={require('./assets/ic-logo-white.png')} style={{ width: 170, height: 26 }}></Image>
            <Text style={styles.logoHeaderText}>DiscoverIC</Text>
            <StatusBar style="light"/>
        </SafeAreaView>
    );
}
function BuildingHeader ( {route, navigation } ) {
    return (
        <SafeAreaView style={styles.logoHeader}>
            <Image source={require('./assets/ic-logo-white.png')} style={{ width: 170, height: 26 }}></Image>
            <Text style={styles.logoHeaderText}>DiscoverIC</Text>
            <StatusBar style="light"/>
            <View style={{position: 'absolute', left: 10, bottom: 5}}>
                <Button
                    title={"Back"}
                    onPress={() => {const popAction = StackActions.pop(1); navigation.dispatch(popAction)}}
                    color={'white'}
                />
            </View>
        </SafeAreaView>
    );
}
