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
    job: {
        title : 'web designer',
        company: 'Google'},
    stressLevel: 6,
    location: {
        city: 'Windermere',
        country: 'Uk'
    }
}).then(() => {
    console.log('Data is saved')
}).catch((error) => {
    console.log('This failed', error);
});

// update only on the root level
database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
})

// database.ref().remove().
//     then(() => {
//         console.log('Data was removed')
//     }).catch((error) => {
//         console.log('This failed', error);
//     })

// // equivalent to remove
// database.ref('isSingle').set(null);

