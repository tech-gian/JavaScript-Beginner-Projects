// JavaScript code for basic functionality of the site
//////////////////////////////////////////////////////


// Search by movie-title, pressing enter
var search_bar = document.getElementById("search-input");
search_bar.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
        search();
    }
});

function search() {
    var title = document.getElementById("search-input").value;
    
    cur_link = 'https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=' + title.replace(/\s/g, '+') + '&page=';
    page = 1;

    document.getElementById('prev').classList.add('disable-button');
    document.getElementById('prev').disabled = true;

    var item = document.getElementById("now_playing");
    item.classList.remove("cur-style");
    item = document.getElementById("popular");
    item.classList.remove("cur-style");
    item = document.getElementById("top_rated");
    item.classList.remove("cur-style");
    item = document.getElementById("upcoming");
    item.classList.remove("cur-style");

    fetch(cur_link + page)
    .then(response => response.json())
    .then(data => print_movies(data));
}


// Initial page with now_playing titles
var page = 1;
var cur_link = 'https://api.themoviedb.org/3/movie/now_playing?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=';

fetch(cur_link + page)
.then(response => response.json())
.then(data => print_movies(data));


// Function to change 'style' of movies
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

    cur_link = `https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=`;
    page = 1;

    document.getElementById('prev').classList.add('disable-button');
    document.getElementById('prev').disabled = true;

    fetch(cur_link + page)
    .then(response => response.json())
    .then(data => print_movies(data));
}


// Function to navigate through pages
function change_page(id) {
    if (id == "next") {
        page++;
        fetch(cur_link + page)
        .then(response => response.json())
        .then(data => print_movies(data));

        document.getElementById('prev').classList.remove('disable-button');
        document.getElementById('prev').disabled = false;

        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    else if (id == "prev") {
        if (page != 1) {
            page--;
            fetch(cur_link + page)
            .then(response => response.json())
            .then(data => print_movies(data));
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        if (page == 1) {
            document.getElementById(id).classList.add('disable-button');
            document.getElementById(id).disabled = true;
        }
    }
}


// Function to display current movies
function print_movies(data) {
    
    var main_div = document.getElementById("cards");
    main_div.innerHTML = '';

    for (var item in data['results']) {
        var card = document.createElement("div");
        card.classList.add('card');
        var title = data['results'][item]['original_title'].replace(/\s/g, '-');
        var link = `https://www.themoviedb.org/movie/${data['results'][item]['id']}-${title}?language=us`;

        card.innerHTML = `<a href="${link}" target="_blank"><img class="card-img-top" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data['results'][item]['poster_path']}" alt="${data['results'][item]['original_title']}"></a>
        <div class="card-body">
            <a href='${link}' target='_blank'><h6>${data['results'][item]['original_title']}</h6></a>
            <h5 class="rounded">${data['results'][item]['vote_average']}</h5>
        </div>`;
        
        main_div.appendChild(card);
    }
}
