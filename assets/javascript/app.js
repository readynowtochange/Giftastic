
/*Before you can make any part of our site work, you need to: 
1. Create an array of strings, each one related to a topic that interests you. 
====do that here======
topics- funny movies, dancing, food, working out, outdoors
2. Save it to a variable called topics.
====do that here====*/
var topics= ["Funny Movies", "Dancing", "It's Always Sunny In Philidelphia", "Seinfield", "selfie fails", "Chuck Norris", "Animal Friends", "Bananas"]

//===========================//

//create rows, with variable  = to references and how to add text to row??//

//Dynamically add buttons containing elements from the array.  Make a variable for the array object.  Did that above.

/*Append new data buttons to page.  Probably want to make a function for this b/c it will be a set of instructions to perform when the function name is called.*/
function makeButtons () {
//make sure everything you need this funcition to do goes inside the {}, including appending the buttons to the page.



/*Next, the function will need to loop through all the array items.*/
//goes inside  makebuttons{}//


for (var i = 0; i < topics.length; i++) {
//creating buttons and there attributes and appending to the page go inside for loop {}.//
/*On each interation of the loop, it will create a button, tell it where it needs to go on the page, then append to dom.*/
var newButton = document.createElement("button");  //each button will be its own div??   $("<div>")
newButton.dataset.topic= topics[i]; //this adds the new attributes and their values??
newButton.textContent = topics[i];
document.getElementById("buttons").innerHTML += newButton ; //this is the part of the loop where the new button gets appended to the page.
}

};



//Before moving on, figure this out first.///


 /*Create a variable for searching?? and set it equal to a function with argument of topics.   Don't know if I need this.
 ====do this here========*/
 var searchGiffay= function(topics){/*between brackets will include var url, $.ajax, .then{}*/}


/*Create a variable for the url and set it equal the url plus "beginnign part of the url and the stop at first query (and all the other queries??)", +the topics variable+, and "&api+key" 
====do that here=======*/
var queryUrl= "https://www.omdbapi.com/?t=" + topics + "&y=&plot=short&apikey=trilogy"//change this url to giffay and use my api.//

//Use the ajax call fmethod object
$.ajax( {
    url:     ,
    method: "GET"
}).then(function(response) {   //don't know if I need this, but found it in ajax to html bonus solved exercise
    createRow(response);
});

