/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sono chi no Sadame", "BLOODY STREAM", "Stand Proud", "Sono chi no kioku", "Crazy Noisy Bizarre Town", "Chase", "Great Days", "Fighting Gold"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ["", "Coda", "", "", "", "", "", "Coda"];
var imageLinks = ["", "", "", "", "", "", "", ""];
var songLengths = ["4:20", "", "", "", "", "", "", ""];
var songLinks = ["https://www.youtube.com/watch?v=yI3pg_YJnPM", "", "", "", "", "", "", ""];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div


function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#artists").empty();
    $("#images").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    songs.push($("#song").val());
    artists.push($("#artist").val());
    imageLinks.push($("#image").val());
    songLengths.push($("#length").val());
    songLinks.push($("#link").val());
}

function displaySongInfo(){
    songs.forEach(function(song, i){
        $("#images").append("<img src='" + imageLinks[i] + "'>");
        $("#songs").append("<p>" + songs[i] + "</p>");
        $("#artists").append("<p>" + artists[i] + "</p>");
        $("#lengths").append("<p>" + songLengths[i] + "</p>");
        $("#links").append("<p>" + songLinks[i] + "</p>");
    })
        
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
