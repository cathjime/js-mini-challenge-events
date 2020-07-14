// /***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

// /***** End of Starter Code ****/




/***** Deliverable 1 *****/


function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.getElementById("header")
header.addEventListener("click", function(e){
    toggleColor(header)
});



/***** Deliverable 2 *****/
const playerForm = document.getElementById("new-player-form")

playerForm.addEventListener("submit", function(e){
  e.preventDefault()

 // console.log(e.target.number)

  let newPlayer =  {
    jersey: e.target.number.value,
    name: e.target.name.value,
    nickname: e.target.nickname.value,
    photo: e.target.photo.value,
    likes: 0
  }

  renderPlayer(newPlayer)
})


/***** Deliverable 3 *****/
//When a user clicks the like button for a player, 
//that player's likes should increase by 1.
playerContainer.addEventListener("click", function(e){
  const likeBtn = playerContainer.querySelector(".like-button")
  let likes = playerContainer.querySelector(".likes")
  let newLike = parseInt(likes.innerHTML.split(" ")[0])
  // console.log(newLike)
    if(e.target === likeBtn){
      newLike += 1
      likes = newLike + " likes"
    }
})