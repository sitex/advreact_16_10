import firebase from 'firebase'

export const appName = 'advreact-1610-542d0'

firebase.initializeApp({
    apiKey: "AIzaSyB1aXC2vHtl_gSnXKcQqGOrrPxO8IKorqw",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: "",
    messagingSenderId: "262410168253"
})