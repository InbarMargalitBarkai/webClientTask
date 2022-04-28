// show all the contacts in a list

var mainUserRealUserName = localStorage.getItem("n");

    // Display contacts list on page
    // Get contacts list container from the DOM
    const contactsWrapper = document.getElementById('contacts-list');
    // Loop through array and display each contact in contact-list div
for (let contact of contactsList) {
        // show all users except mainUserRealUserName
        if (contact.Username === mainUserRealUserName) {
            continue;
        } else {
            // Extract contact details
            const username = contact.Username;
            const nickname = contact.Nickname;
            const password = contact.Password;
            const photoUrl = contact.photoUrl;


            //create img tag to hold contact pic, give it a class name (for styling purposes) and add photo to it
            const contactPhoto = document.createElement('img');
            contactPhoto.classList.add('contact-photo');
            contactPhoto.src = photoUrl;

            //create div to hold contact nickname and add name
            const nicknameDiv = document.createElement('div');
            nicknameDiv.classList.add('contact-name');
            nicknameDiv.innerText = nickname;

            //create contact parent div and add to it contactPhotoDiv and usernameDiv
            const contactContainerDiv = document.createElement('div');
            contactContainerDiv.classList.add('contact-container');

            contactContainerDiv.appendChild(contactPhoto);
            contactContainerDiv.appendChild(nicknameDiv);

            contactsWrapper.appendChild(contactContainerDiv);
        }
    };

   


    // Listen for clicks on each contact and select the appropriate conversation
    let list = document.getElementsByClassName('contact-container');
for (var i = 0; i < list.length; i++) {
    // saving the nickname of the contact
    let a = list[i].getElementsByClassName('contact-name')[0];
    let text = a.innerHTML;

    list[i].addEventListener("click", function () {
        myFunction(text);
    }) ;
}

function myFunction(theNickname) {
    // delete the previous messages (of another contact conversation and not sending again thhe conversation of the contact)
    $('.messages ul').empty();

    // show the div (the messgae chat side) only after there was a click in thhe contact list (choose conversation)
    document.getElementById("showAfterClickContact").style.display = "";

   
    let allMessagesSent = '<ul>';

    // place the contact nickname in the conversation
    var j = document.getElementById("contactNickname");
    if (j) {
        j.innerHTML = theNickname;
    }
        // place the contact photo in the conversation
    var i = document.getElementById("contactPhoto");
    if (i) {
        for (let c of contactsList) {
            if (c.Nickname === theNickname) {
                let thePhoto = c.photoUrl;
                var contactP = document.createElement("img");
                contactP.id = "contactP";
                contactP.src = thePhoto;
                // remove the previous contact photo before append the new one
                i.innerHTML = '';
                i.appendChild(contactP);
            }
        }
    }
    // place the messages
    // move on the messageList of the chosen contact
    for (let v of contactsList) {
        if (v.Nickname === theNickname) {
            for (let x = 0; x < v.MessageDetails.length; x++) {
                allMessagesSent += '<li><p>' + v.MessageDetails[x].time + '<br>' + v.MessageDetails[x].message + '</p></li>';
            }
        }
    }
    allMessagesSent += '</ul>';

    $('<li class="sent">' + allMessagesSent).appendTo($('.messages ul'));
    $(".messages").animate({ scrollTop: $(document).height() }, "fast");
}
