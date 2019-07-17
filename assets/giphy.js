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

