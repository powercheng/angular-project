'use strict';

var app_contacts = angular.module('myApp.contacts', ['ngRoute', 'firebase'])

app_contacts.config(function($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl: 'contacts/contacts.html',
            controller: 'ContactsCtrl'
        });
    })

app_contacts.controller("ContactsCtrl", function($scope, $firebaseArray, $firebaseAuth, $firebaseObject) {
    var ref = firebase.database().ref('contacts');
  // download the data into a local object
  $scope.contacts = $firebaseArray(ref);
    console.log($scope.contacts);
    $scope.addPost = function() {
    	console.log(123);
    }
    
    $scope.showAddForm = function() {
        $scope.addFormShow = true;
    }
    
    $scope.showEditForm = function(contact) {
        $scope.editFormShow = true;
        $scope.$id = contact.$id;
        $scope.name = contact.name;
        $scope.email = contact.email;
		$scope.company = contact.company;
		$scope.mobile_phone = contact.phones[0].mobile;
		$scope.home_phone = contact.phones[0].home;
		$scope.work_phone = contact.phones[0].work;
		$scope.street_address = contact.address[0].street_address;
		$scope.city = contact.address[0].city;
		$scope.state = contact.address[0].state;
		$scope.zipcode = contact.address[0].zipcode;
        
        
    }

    $scope.hide = function() {
        $scope.addFormShow = false;
        $scope.contactShow = false;
    }
        
    $scope.removeContact = function(contact) {
        $scope.contacts.$remove(contact);
        $scope.msg = "contact removed";
    }
    
    $scope.editFormSubmit = function() {
        var id = $scope.$id;
        var record = $scope.contacts.$getRecord(id);
            record.name = $scope.name;
            record.email = $scope.email;
		record.company = $scope.company;
		record.phones[0].mobile = $scope.mobile_phone; 
		record.phones[0].home = $scope.home_phone; 
		record.phones[0].work = $scope.work_phone;
		 record.address[0].street_address = $scope.street_address;
		record.address[0].city = $scope.city;
		record.address[0].state = $scope.state;
		record.address[0].zipcode = $scope.zipcode;
        
        $scope.contacts.$save(record).then(function(ref){});
        clearFields();
        $scope.editFormShow =false;
        $scope.msg = "contact edited"
        
    }
    
    $scope.addFormSubmit = function() {
        if($scope.name){ var name = $scope.name } else { var name = null; }
		if($scope.email){ var email = $scope.email; } else { var email = null; }
		if($scope.company){ var company = $scope.company; } else { var company = null; }
		if($scope.mobile_phone){ var mobile_phone = $scope.mobile_phone; } else { var mobile_phone = null; }
		if($scope.home_phone){ var home_phone = $scope.home_phone; } else { var home_phone = null; }
		if($scope.work_phone){ var work_phone = $scope.work_phone; } else { var work_phone = null; }
		if($scope.street_address){ var street_address = $scope.street_address; } else { var street_address = null; }
		if($scope.city){ var city = $scope.city; } else { var city = null; }
		if($scope.state){ var state = $scope.state; } else { var state = null; }
		if($scope.zipcode){ var zipcode = $scope.zipcode; } else { var zipcode = null; }
        
        $scope.contacts.$add({
			name: name,
			email: email,
			company: company,
			phones:[
				{
					mobile: mobile_phone,
					home: home_phone,
					work: work_phone
				}
			],
			address: [
				{
					street_address: street_address,
					city: city,
					state: state,
					zipcode: zipcode
				}
			]
		}).then(function(ref){
			var id = ref.key;
			console.log('Added Contact with ID: '+id);

			// Clear Form
			clearFields();

			// Hide Form
			$scope.addFormShow = false;

			// Send Message
			$scope.msg = "Contact Added";
		});
    }
    
    $scope.showContact = function(contact) {
        $scope.name = contact.email;
        $scope.email = contact.email;
		$scope.company = contact.company;
		$scope.mobile_phone = contact.phones[0].mobile;
		$scope.home_phone = contact.phones[0].home;
		$scope.work_phone = contact.phones[0].work;
		$scope.street_address = contact.address[0].street_address;
		$scope.city = contact.address[0].city;
		$scope.state = contact.address[0].state;
		$scope.zipcode = contact.address[0].zipcode;
        $scope.contactShow = true;
    }
    
    
    function clearFields(){
		console.log('Clearing All Fields...');

		$scope.name = '';
		$scope.email = '';
		$scope.company = '';
		$scope.mobile_phone = '';
		$scope.home_phone = '';
		$scope.work_phone = '';
		$scope.street_address = '';
		$scope.city = '';
		$scope.state = '';
		$scope.zipcode = '';
	}
});
