var config = {
    apiKey: "AIzaSyB5m0YBJ0J4tVmQ904oq5vJK3Dke_Gq_Rk",
    authDomain: "trainscheduler-9a283.firebaseapp.com",
    databaseURL: "https://trainscheduler-9a283.firebaseio.com",
    projectId: "trainscheduler-9a283",
    storageBucket: "trainscheduler-9a283.appspot.com",
    messagingSenderId: "186370673105"
};

var name = "";
var destination = "";
var firstTrain = "";
var frequency = "";
var nextArrival = "";
var minutesAway = "";
var updatedNextArrival = "";
var newMinutesAway = "";
var currentTime = moment();


function clock() {
    $("#clock").text(moment().format('LL'));
    $("#clock").append(" - ");
    $("#clock").append(moment().format('HH:mm:ss'));
    setTimeout("clock()", 1000);

};
clock();

$("#add-train").on("click", function (event) {
    event.preventDefault();

    name = $("#nameInput").val().trim();
    destination = $("#destInput").val().trim();
    firstTrain = $("#firstTrainInput").val().trim();
    frequency = $("#freqInput").val().trim();

    calculateVariables();

    database.ref().push({
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        minutesAway: minutesAway,
        nextArrival: nextArrival,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });//closes push
    $("#nameInput").val("");
    $("#destInput").val("");
    $("#firstTrainInput").val("");
    $("#freqInput").val("");
});//closes .onClick