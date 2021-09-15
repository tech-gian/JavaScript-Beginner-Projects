
// Useful links
// https://developers.themoviedb.org/3/movies/get-latest-movie
// https://www.uidesigndaily.com/posts/photoshop-movie-app-mobile-day-193
// https://youtu.be/dtKciwk_si4?t=20116


function movie_style(id) {
    var item = document.getElementById("now_playing");
    item.classList.remove("cur-style");
    item = document.getElementById("popular");
    item.classList.remove("cur-style");
    item = document.getElementById("top_rated");
    item.classList.remove("cur-style");
    item = document.getElementById("upcoming");
    item.classList.remove("cur-style");
    
    document.getElementById(id).classList.add("cur-style");

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => print_movies(data));
    
}


fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1')
.then(response => response.json())
.then(data => print_movies(data));


// TODO:
// Give option for more pages ??
// Fix the search bar so it will work

function print_movies(data) {
    
    var main_div = document.getElementById("cards");
    main_div.innerHTML = '';

    for (var item in data['results']) {
        var card = document.createElement("div");
        card.classList.add('card');
        var title = data['results'][item]['original_title'].replace(/\s/g, '-');
        var link = `https://www.themoviedb.org/movie/${data['results'][item]['id']}-${title}?language=us`;

        card.innerHTML = `<a href="${link}"><img class="card-img-top" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data['results'][item]['poster_path']}" alt="${data['results'][item]['original_title']}"></a>
        <div class="card-body">
            <a href='${link}'><h6>${data['results'][item]['original_title']}</h6></a>
            <h5 class="rounded">${data['results'][item]['vote_average']}</h5>
        </div>`;
        
        main_div.appendChild(card);
    }
}
