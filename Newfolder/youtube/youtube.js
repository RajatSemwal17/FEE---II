const leftBar = document.querySelector('.LEFT');
const hamBurger = document.querySelector('.hamburger');

let currMode = 'hidden'
hamBurger.addEventListener('click', () => {
  if(currMode === 'hidden'){
    leftBar.style.visibility = 'visible'
    // hamBurger.style.backgroundColor = 'blue'
    currMode = 'visible';
  }
  else{
    leftBar.style.visibility = 'hidden'
    // hamBurger.style.backgroundColor = 'transparent'
    currMode = 'hidden';
  }
})