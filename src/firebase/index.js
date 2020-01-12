import app from 'firebase/app';
// import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAOHeRn-jqY3kHpmiuktErLzzeOhtaDBpY",
    authDomain: "codesandbox-test-8.firebaseapp.com",
    databaseURL: "https://codesandbox-test-8.firebaseio.com",
    projectId: "codesandbox-test-8",
    storageBucket: "codesandbox-test-8.appspot.com",
    messagingSenderId: "729726017439",
    appId: "1:729726017439:web:2c5d6a72d51b894ac727aa"
};

app.initializeApp(config);

export const database = app.database();