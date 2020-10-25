import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import moment from 'moment';

import { firebase } from '../../firebase/config'
import { statusBarBackgroundColor } from '../../Utils/ScreenUtils'
import { Ionicons, AntDesign } from '@expo/vector-icons';

import styles from './styles';

const handleTitle = (title, setTitle) => {
    setTitle(title)
}

const handleDetails = (details, setDetails) => {
    setDetails(details)
}

const saveNotes = (title, details, currLoggedInUser) => {
    if (title.length > 0 && details.length > 0) {
        const usersRef = firebase.firestore().collection('users')
        const currTime = moment().format('DD-MM-YYYY hh:mm:ss');
        usersRef
            .doc(currLoggedInUser.id)
            .collection("Notes")
            .add({
                "title": title,
                "details": details,
                "time": currTime
            })
            .then(() => {
                alert("Note Successfully Saved")
            })
            .catch((error) => {
                alert(error)
            });
    }
}

const viewNote = (navigation, currLoggedInUser) => {
    navigation.navigate('View Notes', { user: currLoggedInUser })
}

const loginScreen = (navigation) => {
    navigation.navigate('Login')
}

export default function SaveNotes(props) {
    const currLoggedInUser = !props.route.params ? props.user : props.route.params.user
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")

    return (
        <>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor={statusBarBackgroundColor} translucent={true} />
            <View style={styles.container}>
                <TextInput style={styles.inputTitle}
                    underlineColorAndroid="transparent"
                    placeholder="Title"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={(title) => handleTitle(title, setTitle)} />

                <TextInput style={styles.inputDetails}
                    underlineColorAndroid="transparent"
                    placeholder="Content"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    multiline={true}
                    onChangeText={(details) => handleDetails(details, setDetails)} />
                <Text>
                    <Ionicons name="md-home" size={50} style={{ marginHorizontal: 50 }} color="black" onPress={() => loginScreen(props.navigation)} />
                    <AntDesign name="checkcircle" size={50} style={{ marginHorizontal: 100 }} color="black" onPress={() => loginScreen(props.navigation)} />
                    <AntDesign name="closecircle" size={50} style={{ marginHorizontal: 100 }} color="black" />
                    <AntDesign name="back" size={50} style={{ marginHorizontal: 100 }} color="black" onPress={() => viewNote(props.navigation, currLoggedInUser)} />
                </Text>
            </View>
        </>
    )
}