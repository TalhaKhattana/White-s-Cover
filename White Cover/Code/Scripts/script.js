const navIcon = document.querySelector('.navbar-icon');
const menue = document.querySelector('.menue');

function hamburger(e){
  // e.preventDefault();
  if(menue.style.display==="none"){
    menue.style.display="block"
  }
  else{
    menue.style.display="none"
  }

}

navIcon.addEventListener('click',hamburger)