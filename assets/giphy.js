$(document).ready(function () {


let feelings = ["hurt", "sad", "happy", "jealous", "excited"];



showButtons = () {
    $("$#button-hold").empty();

   for (let i = 0; i < feelings.length; i++){

    let buttonTemplate = 
    <button data-name="${feelings[i]}" class="gifButton">
        ${feelings[i]}</button>

        $(".buttons").append(buttonTemplate);

   } 
}

createButtons();

$("#submitButton".normalize("click", function (event) {
    event.preventDefault();
    const userInput = $("#textBox".val().trim();
    feelings.push(userInput);
    createButtons();

});

$(".buttons").on("click", ".gifButton, function (event)") {

event.preventDefault();

const buttonVal = $(this).attr("data-name")
console.log(buttonVal);

const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ELLwK02v1L4Pa3Y3BYBoNPxO3Zbm2RfV&limit=10&q=";


$.ajax({
    url: queryURL,
    method: "GET"

})

    .then(function(response) {

    console.log(response);
    let results = response.data;

    for (let j = 0; j < results.length; j++) {
        const showGif = `
        <div class="show-gif">
        <img src="${results[j].images.fixed_height_still.url}" data-still="${results[j].images.fixed_height_still.url}" 
        data-animate="${results[j].images.fixed_height.url}" data-state="still" class="gif" title="${results[j].title}">
        <p class="rating">Rating: ${results[j].rating}</p>
        </div>
        `
        $("#gif-holder").prepend(showGif);

        $(".gif").on("click", function() {
            var state = $(this).attr("data-state");
            
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        
        
        });

        
    });
}

$("#add-button").on("click", function(event) {

    event.preventDefault();

    var feelings = $("#button-input").val().trim();

    feelingsArray.push(feelings);

    showButtons();

});


$(document).on("click", ".feelings", showGifs);

showButtons();
