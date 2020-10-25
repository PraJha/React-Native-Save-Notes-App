import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen, RegistrationScreen, SaveNotesScreen, ViewNotesScreen } from './src/screens'

import { firebase } from './src/firebase/config'
import { statusBarBackgroundColor } from './src/Utils/ScreenUtils'

import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    //Persist user login.
    useEffect(() => {
        const usersRef = firebase.firestore().collection('users');
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                usersRef
                    .doc(user.uid)
                    .get()
                    .then((document) => {
                        const userData = document.data()
                        setLoading(false)
                        setUser(userData)
                    })
                    .catch((error) => {
                        setLoading(false)
                    });
            } else {
                setLoading(false)
            }
        });
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: statusBarBackgroundColor } }}>
                {user ? (
                    <>
                        <Stack.Screen name="Save Notes">
                            {props => <SaveNotesScreen {...props} user={user} />}
                        </Stack.Screen>
                        <Stack.Screen name="View Notes">
                            {props => <ViewNotesScreen {...props} user={user} />}
                        </Stack.Screen>
                        <Stack.Screen name="Registration" component={RegistrationScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </>
                ) : (
                        <>
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen name="Registration" component={RegistrationScreen} />
                            <Stack.Screen name="Save Notes" component={SaveNotesScreen} />
                            <Stack.Screen name="View Notes" component={ViewNotesScreen} />
                        </>
                    )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}