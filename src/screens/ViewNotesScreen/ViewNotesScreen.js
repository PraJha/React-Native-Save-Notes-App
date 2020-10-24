import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import { firebase } from '../../firebase/config'

import styles from './styles';

let userNotes = [] //It is getting updated inside getUserNotes function

const saveNote = (navigation) => {
    navigation.navigate('Save Notes')
}

const loginScreen = (navigation) => {
    navigation.navigate('Login')
}

const getUserNotes = (currLoggedInUser, setNotesFetch) => {
    const usersRef = firebase.firestore().collection('users').doc(currLoggedInUser.id)
    usersRef
        .collection("Notes")
        .get()
        .then(
            (querySnapshot) => {
                const notes = querySnapshot.docs.map((doc) => {
                    return { "Notes": doc.data(), "Id": doc.id }
                })
                userNotes = notes
                setNotesFetch(true)
            }
        )
        .catch((error) => {
            alert(error)
        });
}

export default function ViewNotes(props) {
    const currLoggedInUser = !props.route.params ? props.user : props.route.params.user
    const [notesFetch, setNotesFetch] = useState(false)

    if (notesFetch == false) {
        getUserNotes(currLoggedInUser, setNotesFetch)
    }

    const userNotesList = (userNotes.length > 0) ? userNotes.map((notes) => {
        const notesSubmittedTime = notes.Notes.time ? notes.Notes.time : null
        return { "Title": notes.Notes.title, "Details": notes.Notes.details, "Time": notesSubmittedTime, "Id": notes.Id }
    }) : []

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {userNotesList.map((notes) => (
                        <View style={styles.notesCard}>
                        <Card>
                            <Card.Title><Text>{notes.Title}</Text></Card.Title>
                            {notes.Time ? <Card.FeaturedSubtitle style={{ color: "red", fontSize: 10}}>{notes.Time}</Card.FeaturedSubtitle> : <Text></Text>}
                            <Text style={{ marginBottom: 5 }}>
                                {notes.Details}
                            </Text>
                        </Card>
                        </View>
                    )
                    )}
                    <TouchableOpacity
                        style={styles.viewNoteButton}
                        onPress={() => saveNote(props.navigation)}>
                        <Text style={styles.submitButtonText}> Back to Save Notes </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.viewNoteButton}
                        onPress={() => loginScreen(props.navigation)}>
                        <Text style={styles.submitButtonText}> Login </Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}