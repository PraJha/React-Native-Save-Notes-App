"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var windowWidth = _reactNative.Dimensions.get('window').width;

var windowHeight = _reactNative.Dimensions.get('window').height / 2;

var _default = _reactNative.StyleSheet.create({
  container: {
    paddingTop: 23
  },
  notesCard: {
    backgroundColor: "red",
    marginBottom: 10 // marginTop: 10

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
    height: 40
  },
  viewNoteButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: 'white'
  }
});

exports["default"] = _default;