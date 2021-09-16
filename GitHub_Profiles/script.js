// JavaScript file with all the functions
/////////////////////////////////////////


// Function to search github_user

var search_bar = document.getElementById("username");
search_bar.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {
        search();
    }
});

function search() {
    var username = document.getElementById("username").value;

    fetch('https://api.github.com/users/' + username)
    .then(response => response.json())
    .then(data => print_json(data));
}


// Function to display the result

function print_json(data) {
    var flag = false;
    
    for (var property in data) {
        if (property == 'message' && data[property] == 'Not Found') {
            flag = true;
            break;
        }


        if (property == 'avatar_url') {
            var img = document.getElementById("avatar");
            img.src = data[property];
        }

        if (property == 'name') {
            var name = document.getElementById("name");
            name.innerHTML = data[property];
        }

        if (property == 'bio') {
            var bio = document.getElementById("bio");
            bio.innerHTML = data[property];
        }

        if (property == 'followers') {
            var followers = document.getElementById("followers");
            followers.innerHTML = data[property] + " followers";
        }

        if (property == 'following') {
            var following = document.getElementById("following");
            following.innerHTML = data[property] + " following";
        }

        if (property == 'public_repos') {
            var repos = document.getElementById("repo");
            repos.innerHTML = data[property] + " repos";
        }

        if (property == 'repos_url') {
            fetch(data[property])
                .then(response => response.json())
                .then(repos_data => repo_function(repos_data));
        }
    }

    if (flag) {
        fetch('https://api.github.com/users/4-04')
        .then(response => response.json())
        .then(data_new => print_json(data_new));
    }
}


// Function to display 5 repos with their links

function repo_function(data) {
    var counter = 0;
    var repos = document.getElementById("repos");
    repos.innerHTML = '';

    for (var property in data) {
        if (counter >= 5) break;

        var name;
        var link;
        for (var prop in data[property]) {
            

            if (prop == 'name') {
                name = data[property][prop];
            }
            if (prop == 'html_url') {
                link = data[property][prop];
            }
        }

        repos.innerHTML += '<a class="repo_link rounded" href="' + link + '">' + name + '</a>' + ' ';

        counter++;
    }
}
