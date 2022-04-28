$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$("#profile-img").click(function() {
    $("#status-options").toggleClass("active");
});

$(".expand-button").click(function() {
$("#profile").toggleClass("expanded");
    $("#contacts").toggleClass("expanded");
});


function newMessage() {
    var t = new Date().toLocaleTimeString();
    var d = new Date().toLocaleDateString();
    var time = t + " " + d + ' ';
  

    message = $(".message-input input").val();
    if($.trim(message) == '') {
        return false;
    }


    $('<li class="sent"><p>' + time + '<br>' + message + '</p></li>').appendTo($('.messages ul'));
    $('.message-input input').val(null);
    $('.contact.active .preview').html('<span>You: </span>' + message);
    $(".messages").animate({ scrollTop: $(document).height() }, "fast");
};

// send the message after press the submit key (the arrow send button)
$('.submit').click(function () {
newMessage();
});

// send the message after press enter key
$(window).on('keydown', function(e) {
    if (e.which == 13) {
    newMessage();
    return false;
}
});

// upload an image in chat
function chooseImage() {
    document.getElementById("imageInput").click();
}


// upload video in chat
function chooseVideo() {
    document.getElementById("videoInput").click();
}





function sendImage(event) {
    var t = new Date().toLocaleTimeString();
    var d = new Date().toLocaleDateString();
    var time = t + " " + d + ' ';
    var file = event.files[0];
    var bannerPic = document.getElementById("displayImage");
    if(!file.type.match("image.*")) {
        alert("please select image only.");
    } else {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            var message = reader.result;
            if (bannerPic) {
                var picture = document.createElement("img");
                picture.id = "picture";
                picture.src = message;
                bannerPic.appendChild(picture);
            }
            $('<li class="sent"><p>' + time + '<br>' + message
 + '</p></li>').appendTo($('.messages ul'));
            $('.message-input input').val(null);
            $('.contact.active .preview').html('<span>You: </span>'
);
            $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        }, false);
        
        if(file) {
            reader.readAsDataURL(file);
        }
    }
}


function sendVideo(event) {
    var file = event.files[0];
    var bannerPic = document.getElementById("displayVideo");
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            var message = reader.result;
            if (bannerPic) {
                var video = document.createElement("video");
                video.id = "video";
                video.src = message;
                bannerPic.appendChild(video);
            }
            $('<li class="sent"><p>' + message + '</p></li>').appendTo($('.messages ul'));
            $('.message-input input').val(null);
            $('.contact.active .preview').html('<span>You: </span>' + message);
            $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
        