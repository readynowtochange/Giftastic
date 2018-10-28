

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
            var animateImg = response.data[i].images.fixed_height.url;
            var stillImg = response.data[i].images.fixed_height_still.url;
            var ratingImg = response.data[i].rating;

            $("#postImages").attr("data-still", stillImg);
            $("#postImages").attr("data-animate", animateImg);
            $("#postImages").attr("data-state", "still");

        $("#postImages").prepend("<img src='" +stillImg+ "'>");
        $("#postImages").prepend("<p> Rating: " +ratingImg + "</p>");
        //$("#postImages").prepend("<img src='" +animateImg+ "'>");
        };

        $("img").on("click", function() {
            var isState = $(this).attr("data-state");
            if (isState === "still") {
                $(this).attr("data-animate", $(this).data("animate"));
                $(this).attr("data-state", "animate");
            };
            if (isState !== "still") {
                $(this).attr("data-still", $(this).data("still"));
                $(this).attr("data-state", "still");
            };
        })

    });

});
//See README Intial commit link for pseudocode.