/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Sono chi no Sadame", "BLOODY STREAM", "Stand Proud", "Sono chi no kioku", "Crazy Noisy Bizarre Town", "Chase", "Great Days", "Fighting Gold"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ["Hiroaki Tommy Tominaga", "Coda", "Jin Hashimoto", "TOMMY, Coda, JIN", "THE DU", "batta", "Daisuke Hasegawa, Karen Aoki", "Coda"];
var imageLinks = ["", "", "", "", "", "", "", ""];
var songLengths = ["4:20", "4:22", "4:38", "4:21", "3:07", "3:05", "4:01", "4:41"];
var songLinks = ["https://www.youtube.com/watch?v=yI3pg_YJnPM", "https://www.youtube.com/watch?v=KoY66lqmcYA", "https://www.youtube.com/watch?v=1u4xAB_-J74", "https://www.youtube.com/watch?v=E8n7zt4D-0Y", "https://www.youtube.com/watch?v=Rs0N_Lq6Gmo&vl=en", "https://www.youtube.com/watch?v=yml_GtuwY6o", "https://www.youtube.com/watch?v=GS12_iXq8Uw", "https://www.youtube.com/watch?v=rGfAyOFUdEY"];

var playlist = [songs, artists, imageLinks, songLengths, songLinks];
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
    if($("#song").val() != "" && $("#song").val() != "" && $("#song").val() != "" && $("#song").val() != "" && $("#song").val()!= ""){
        songs.push($("#song").val());
        artists.push($("#artist").val());
        imageLinks.push($("#image").val());
        songLengths.push($("#length").val());
        songLinks.push($("#link").val());
        playlist = [songs, artists, imageLinks, songLengths, songLinks];
    }
    //localStorage.setItem("playlist", playlist);
}

function displaySongInfo(){
    songs.forEach(function(song, i){
        $("#images").append("<img src='" + imageLinks[i] + "'>");
        $("#songs").append("<p>" + songs[i] + "</p>");
        $("#artists").append("<p>" + artists[i] + "</p>");
        $("#lengths").append("<p>" + songLengths[i] + "</p>");
        $("#links").append("<p>" + "<a href=" + songLinks[i] + ">" + songLinks[i] +"</a></p>");
    })
        
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
