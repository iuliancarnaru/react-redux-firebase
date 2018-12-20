import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBKZAGcyaF0wYnkDSIdRqyHHiSL9A3_WEE",
    authDomain: "expensify-c5d9b.firebaseapp.com",
    databaseURL: "https://expensify-c5d9b.firebaseio.com",
    projectId: "expensify-c5d9b",
    storageBucket: "expensify-c5d9b.appspot.com",
    messagingSenderId: "358868883087"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Iulian Carnaru',
    age: 34,
    isSingle: false,
    location: {
        city: 'Windermere',
        country: 'Uk'
    }
});

