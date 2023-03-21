// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const HEART = 'test';

// Your JavaScript code goes here!

const likeGlyph = document.getElementsByClassName('like-glyph');
const modal = document.querySelector('#modal');





function changeHeart (item) {
  mimicServerCall()
  .then(() => {
    if (item.textContent === EMPTY_HEART) {
      item.textContent = FULL_HEART;
      item.classList.add("activated-heart");
    } else {
      item.classList.remove("activated-heart");
      item.textContent = EMPTY_HEART;
    };
  })
  .catch(error => {
    modal.classList.remove("hidden");
    document.querySelector('#modal-message').textContent = `${error}`;
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 3000);
  });
}







Array.from(likeGlyph).forEach( (item) => {
  item.addEventListener("click", function () {
    changeHeart(item);
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
