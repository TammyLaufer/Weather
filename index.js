let map = null;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}



let infowindow = new google.maps.InfoWindow({
    content: contentString
});

let marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
});
marker.addListener('click', function () {
    infowindow.open(map, marker);
});
//}

//function loadMap() {}

//map.addEventListener("click", loadMap);



// const name = document.getElementById("name");

// const searchBtn = document.getElementById("search");




// // this function 
// function searchUsers(event) {

//     event.preventDefault();
//     return getUserList();

// }


// async function getUserList() {
//     const input = name.value;

//     let usersList = await fetch(`https://api.github.com/search/users?q=${input}`)

//     let user_details = usersList.items;

//     console.log(user_details);

//     let user_card = document.querySelector(".user-info-wrapper");

//     for (let i = 0; i < user_details.length; i++) {


//     }

// }

// function createUserDetailsCard(user_details) {
//     const card = `<
//     div class = "user-info-item1" >
//         <
//         img src = "https://avatars3.githubusercontent.com/u/39902?v=4>" / >
//         <
//         <button class="form-controls" id="user-repo" type="">User repositories </button>
//          < /div> <
//     div > Full Profile < /div> < /
//         div >`
//     return card;

// }



// name.addEventListener("keydown", searchUsers);

// 