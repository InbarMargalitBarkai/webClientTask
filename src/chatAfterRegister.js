// display nickname
    var div = document.getElementById("user");
if (div) {
    div.innerHTML = localStorage.getItem("name");
}


// display image
var bannerImg = document.getElementById("image");

if (bannerImg) {
    bannerImg.innerHTML = localStorage.getItem("photo");
}




