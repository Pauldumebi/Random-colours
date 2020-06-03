//querySelector
const button = document.getElementById('button')
const body = document.querySelector('body')
const colors = ['red', 'orange', 'purple', 'blue', 'yellow', 'green', 'brown']

//EventListener
body.style.backgroundColor = 'pink'
button.addEventListener('click', changeBackground)

//function
function changeBackground() {
   const colorIndex = parseInt(Math.random()*colors.length)
   body.style.backgroundColor = colors[colorIndex]
}