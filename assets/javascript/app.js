

var topics = ["Friday", "Jif", "Spongebob Squarepants", "Hello", "selfie fails", "Animals being jerks", "Animal Friends", "Bananas"];


function makeButtons() {
    console.log("hey");

    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>").text(topics[i]);
        $("#buttons").append(newButton);
    };
}

makeButtons();


$("button").on("click", function () {
    console.log(($(this)).text());
});







var searchGiffay = function (topics) {



    var queryUrl = "https://www.giphy.com/?t=" + topics + "&y=&plot=short&apikey=trilogy"


    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        ;
    });
}

