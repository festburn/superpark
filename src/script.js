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

//SPOT functions
function createSpot(image,address,stall,description,price)
{
    
};

function readSpot()
{
    
};

function updateSpot(image,address,stall,description,price)
{
    
};

function deleteSpot(spotId)
{
    
};

//DRIVER functions
function createDriver(firstName, lastName, carMake, licensePlate)
{
    
};

function readDriver()
{
    
};

function updateDriver(firstName, lastName, carMake, licensePlate)
{
    
};

function deleteDriver(driverId)
{
    
};

//OWNER functions
function createOwner(firstName, lastName, phone, email, proof, spots)
{
    
};

function readOwner()
{
    
};

function updateOwner(firstName, lastName, phone, email, proof, spots)
{
    
};

function deleteOwner(ownerId)
{
    
};


//BOOKING functions
function createBooking(ownerId, driverId, spotId, startDate, endDate, cost, paidFlag)
{
    
};

function readBooking()
{
    
};

function updateBooking(ownerId, driverId, spotId, startDate, endDate, cost, paidFlag)
{
    
};

function deleteBooking(bookingId)
{
    
};

