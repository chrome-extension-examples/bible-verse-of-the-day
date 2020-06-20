window.onload = function () {
    var verse = document.getElementById("verse");
    var author = document.getElementById("author"); 

    fetch("https://raw.githubusercontent.com/TheRealMarcusChiu/bible-verse-of-the-day-server/master/bvotd.json", {cache: "no-cache"})
        .then(response => response.json())
        .then(function(data) {
            verse.innerHTML = data.verse;
            author.innerHTML = data.author;
        })
        .catch(function(error) {
            verse.innerHTML = "What good is it for someone to gain the whole world, yet forfeit their soul?";
            author.innerHTML = "Mark 8:36 NIV";
        });
}