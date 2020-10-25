import { StyleSheet, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        paddingTop: 23
    },
    navBarLeftButton: {
        paddingLeft: 8,
        width: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    icons: {
        position: 'absolute',
        height: 40,
        left: 0,
        bottom: 0,
        top: WINDOW_HEIGHT - 150,
        width: WINDOW_WIDTH,
    },
    iconsMargin: {
        marginLeft: 100,
        marginRight: 100,
        width: 100
    },
    inputTitle: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    inputDetails: {
        margin: 15,
        height: WINDOW_HEIGHT - 300,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    viewNoteButton: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})