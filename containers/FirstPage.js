import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height / 2;

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    inputTitle: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    inputDetails: {
        margin: 15,
        height: windowHeight,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})

const handleTitle = (title, setTitle) => {
    console.log("Title ", title)
    setTitle(title)
}
const handleDetails = (details, setDetails) => {
    setDetails(details)
}
const saveNotes = (title, details) => {
    if (title.length > 0 && details.length > 0) {
        alert('Title: ' + title + '\nDetails: ' + details)
    }
}

function FirstPage(props) {
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")

    console.log("title ", title)
    console.log("details ", details)
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputTitle}
                underlineColorAndroid="transparent"
                placeholder="Title"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={(title) => handleTitle(title, setTitle)} />

            <TextInput style={styles.inputDetails}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={(details) => handleDetails(details, setDetails)} />

            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => saveNotes(title, details)}>
                <Text style={styles.submitButtonText}> Save Notes </Text>
            </TouchableOpacity>
        </View>
    )
}

export default FirstPage