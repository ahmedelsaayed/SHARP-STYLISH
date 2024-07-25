let books = document.querySelectorAll(".imagee")

let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"]

let bookArray = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg","11.jpeg","12.jpeg"]

function book (id){
    let backBook = "picture/"+ bookArray[+id];
    let newbook = "theBook/" + imgsArray[+id];
    if (books[+id].src !== newbook){
        books[+id].src = newbook;
    }else{
        books[+id].src = backBook;
    }
}


// let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

// let colorParts = [];

// for (let i = 0; i < 6; i++){
//     colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)])
// }

// let finalColor = `#${colorParts.join("")}`;
// document.body.style.backgroundColor = finalColor;



var addToCartButtons = document.getElementsByClassName('addToCart');

for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', function() {
    alert("Added to card");
  });
}


  


