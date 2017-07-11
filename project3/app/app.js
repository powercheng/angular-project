'use strict';

/*  var config = {
    apiKey: "AIzaSyAGyJGSSPFEH2CmCxEZzbxiM_ThEwC9Yxs",
    authDomain: "mycontact-89458.firebaseapp.com",
    databaseURL: "https://mycontact-89458.firebaseio.com",
    projectId: "mycontact-89458",
    storageBucket: "mycontact-89458.appspot.com",
    messagingSenderId: "34437259834"
  };*/

var config = {
    apiKey: "AIzaSyAGyJGSSPFEH2CmCxEZzbxiM_ThEwC9Yxs",
    authDomain: "mycontact-89458.firebaseapp.com",
    databaseURL: "https://mycontact-89458.firebaseio.com",
    storageBucket: "mycontact-89458.appspot.com",
};
firebase.initializeApp(config);


// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute', 'firebase', 'myApp.contacts']);
app.config(function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/contacts'});
});

