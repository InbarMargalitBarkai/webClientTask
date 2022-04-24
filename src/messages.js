$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$("#profile-img").click(function() {
    $("#status-options").toggleClass("active");
});

$(".expand-button").click(function() {
$("#profile").toggleClass("expanded");
    $("#contacts").toggleClass("expanded");
});

// $("#status-options ul li").click(function() {
//     $("#profile-img").removeClass();
//     $("#status-online").removeClass("active");
//     $("#status-away").removeClass("active");
//     $("#status-busy").removeClass("active");
//     $("#status-offline").removeClass("active");
//     $(this).addClass("active");
    
//     if($("#status-online").hasClass("active")) {
//         $("#profile-img").addClass("online");
//     } else if ($("#status-away").hasClass("active")) {
//         $("#profile-img").addClass("away");
//     } else if ($("#status-busy").hasClass("active")) {
//         $("#profile-img").addClass("busy");
//     } else if ($("#status-offline").hasClass("active")) {
//         $("#profile-img").addClass("offline");
//     } else {
//         $("#profile-img").removeClass();
//     };
    
//     $("#status-options").removeClass("active");
// });

function newMessage() {
    message = $(".message-input input").val();
    if($.trim(message) == '') {
        return false;
    }
    $('<li class="sent"><img src="https://talkjs.com/images/avatar-1.jpg" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
    $('.message-input input').val(null);
    $('.contact.active .preview').html('<span>You: </span>' + message);
    $(".messages").animate({ scrollTop: $(document).height() }, "fast");
};

$('.submit').click(function() {
newMessage();
});

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





function sendImage(event) {
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
            $('<li class="sent"><img src="https://talkjs.com/images/avatar-1.jpg" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
            $('.message-input input').val(null);
            $('.contact.active .preview').html('<span>You: </span>' + message);
            $(".messages").animate({ scrollTop: $(document).height() }, "fast");
        }, false);
        
        if(file) {
            reader.readAsDataURL(file);
        }
    }
}
        
// const image_input = document.querySelector("#image_input");
// var uploaded_image = "";

// image_input.addEventListener("change", function () {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         uploaded_image = reader.result;
//         document.querySelector("#display_image").style.backgroundImage = 'url(' + uploaded_image + ')';
//     });
//     reader.readAsDataURL(this.files[0]);
// })