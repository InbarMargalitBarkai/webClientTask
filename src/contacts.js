// Display contacts list on page
// Get contacts list container from the DOM
const contactsWrapper = document.getElementById('contacts-list');
// Loop through array and display each contact in contact-list div
for (let contact of contactsList) {
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
};



// Listen for clicks on each contact and select the appropriate conversation
let list = document.getElementsByClassName('contact-container');
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", myFunction);
}

function myFunction() {
    window.location.href = "conversation.html";
}