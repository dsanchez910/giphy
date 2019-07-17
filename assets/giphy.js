$(document).ready(function () {


let movies = ["Super Bad", "The Other Guys", "Old School", "The Hangover", "Elf"];

let apiKey = "ELLwK02v1L4Pa3Y3BYBoNPxO3Zbm2RfV";

showButtons = () {
    $("$#button-hold").empty();

   for (let i = 0; i < movies.length; i++){

    let buttonTemplate = 
    <button data-name="${movies[i]}" class="gifButton">
        ${movies[i]}</button>

        $(".buttons").append(buttonTemplate);

   } 
}

createButtons();

$("#submitButton".normalize("click", function (event) {
    event.preventDefault();
    const userInput = $("#textBox".val().trim();
    movies.push(userInput);
    createButtons();

});

$(".buttons").on("click", ".gifButton, function (event)") {

event.preventDefault();

const buttonVal = $(this).attr("data-name")
console.log(buttonVal);

const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonVal + "&limit=10&rating=g&rating=pg&api_key=" + apiKey;

$.ajax({
    url: queryURL,
    method: "GET"

})

    .then(function(response) {

    console.log(response);
    let results = response.data;

}
