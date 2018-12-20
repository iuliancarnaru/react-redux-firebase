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

// on events: 'value', 'child_remove', 'child_changed', 'child_added'
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// get called for all existing childrens as well for the new ones
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});


// snapshot methods: val, forEach

// once supports promises
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     })
//     .catch((e) => {
//         console.log('Error', e)
//     });


//on doesn't support promises
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'rent',
//     note: 'rent december',
//     amount: 54500,
//     createdAt: 0
// });


// database.ref('notes/-LUALJv-hDINzlzhfASA').update({
//     body: 'Buy food'
// });

// database.ref('notes/-LUALl4luGUzPzwYI_AN').remove();

// database.ref('notes').push({
//     title: 'course topics',
//     body: 'react redux firebase'
// });

// Firebase doesn't accept arrays, we have to rethink 

// is not working:

// const notes = [
//     {
//         id: 'abc212',
//         'title': 'First note',
//         'body': 'My first note'
//     },
//     {
//         id: 'abc213',
//         'title': 'Second note',
//         'body': 'My second note'
//     },
// ];

// // new way to work around without arrays

// const firabaseNotes = {
//     notes: {
//         abc212: {
//             'title': 'First note',
//             'body': 'My first note'
//         },
//         abc213: {
//             'title': 'Second note',
//             'body': 'My second note'
//         }
//     }
// }


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`)
// })

// fetching data from database
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Something went wrong!', e);
//     });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error on data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(35);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(12);
// }, 10500);



// database.ref().set({
//     name: 'Iulian Carnaru',
//     age: 34,
//     job: {
//         title : 'web designer',
//         company: 'Google'},
//     stressLevel: 6,
//     location: {
//         city: 'Windermere',
//         country: 'Uk'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((error) => {
//     console.log('This failed', error);
// });

// // update only on the root level
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data is updated')
// }).catch((error) => {
//     console.log('This failed', error);
// });

// database.ref().remove().
//     then(() => {
//         console.log('Data was removed')
//     }).catch((error) => {
//         console.log('This failed', error);
//     })

// // equivalent to remove
// database.ref('isSingle').set(null);

