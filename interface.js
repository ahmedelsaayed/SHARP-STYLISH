let page = document.querySelector(".page");

let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    page.style.backgroundImage = 'url("background/' + imgsArray[randomNumber] + '")'
},3000)

////////////////////////////////////////////////


let ourGallery = document.querySelectorAll(".Gallary");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {
        let overlay = document.createElement("div");

        overlay.className = 'popup-overlay';

        document.body.appendChild(overlay);
 
        let popupBox = document.createElement("div");

        popupBox.className = 'popup-box';

        let popupImage = document.createElement("img");

        popupImage.src = img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className = 'close-button';

        popupBox.appendChild(closeButton);
    })
})

// close popup
document.addEventListener("click",  (e) => {
    if (e.target.className == 'close-button'){

        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
})