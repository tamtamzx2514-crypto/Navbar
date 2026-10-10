const navbartoggle = document.querySelector('.navbar-toggle')
const navbarMenu = document.querySelector('.navbar-menu')


navbartoggle.addEventListener('click' , () => {
    navbartoggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})
