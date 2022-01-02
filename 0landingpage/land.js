const toggleButton = document.querySelector('#menu-bars')
const navlink = document.getElementsByClassName("nav-link")[0]


toggleButton.onclick =  () =>{
  navlink.classList.toggle('active');

}
window.onscroll = () => {
  navlink.classList.remove('active'); //open menu then scroll pag will auto close
}

