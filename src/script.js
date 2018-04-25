var config = {
    apiKey: "AIzaSyDvyYZGxQE5h2PLR-zfUz2oA0t9MEubCfA",
    authDomain: "superpark-a7029.firebaseapp.com",
    databaseURL: "https://superpark-a7029.firebaseio.com",
    projectId: "superpark-a7029",
    storageBucket: "superpark-a7029.appspot.com",
    messagingSenderId: "543622601809"
};
		
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//initialize your firebase
firebase.initializeApp(config);
var database = firebase.database();

//create a variable to hold our lists from firebase
var firebaseSpotCollection = database.ref().child('spots');
var firebaseDriverCollection = database.ref().child('drivers');
var firebaseOwnerCollection = database.ref().child('owners');
var firebaseBookingCollection = database.ref().child('bookings');