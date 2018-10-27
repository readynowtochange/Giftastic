

var topics = ["Friday", "Jif", "Spongebob Squarepants", "Hello", "selfie fails", "Animals being jerks", "Animal Friends", "Bananas"];


function makeButtons() {
    // console.log("hey");

    for (var i = 0; i < topics.length; i++) {
        var newButton = $("<button>").text(topics[i]);
        $("newbutton").attr("data-search", topics[i]);
        $("#buttons").append(newButton);
    };
}

makeButtons();


$("button").on("click", function () {
    // console.log(($(this)).text());





    var getGiphy = $(this).text();
    var queryUrl = "https://api.giphy.com/v1/gifs/search?&q=" + getGiphy + "&api_key=JQsV5IHcXy0dqD8lbPQM6mpZwr8tg0Gv&limit=10";
        // console.log(queryUrl);
  
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done(function (response) {
        // console.log(response.data[0].rating);
        for (var i = 0; i < response.data.length; i++) {
        $("#postImages").prepend("<img src='" +response.data[i].images.fixed_height_still.url+ "'>");
        $("#postImages").prepend("<p> Rating: " +response.data[i].rating + "</p>");
        };

    });

});
