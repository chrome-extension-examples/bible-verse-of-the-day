window.onload = function () {
    var verse = document.getElementById("verse");
    var author = document.getElementById("author"); 

    fetch("https://raw.githubusercontent.com/TheRealMarcusChiu/bible-verse-of-the-day-server/master/bvotd.json")
    .then(response => response.json())
    .then(function(data) {
        verse.innerHTML = data.verse;
        author.innerHTML = data.author;
    });
}