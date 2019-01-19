//firebase 
var app_fireBase = {};
(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCqo18V8EWOLBTDpNSTfM-xWsFQd8kjrro",
        authDomain: "project-fc6b5.firebaseapp.com",
        databaseURL: "https://project-fc6b5.firebaseio.com",
        projectId: "project-fc6b5",
        storageBucket: "project-fc6b5.appspot.com",
        messagingSenderId: "40795315670"
    };
    firebase.initializeApp(config);
    app_fireBase = firebase;
})()