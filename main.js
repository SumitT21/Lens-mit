//to change navigation styles on scroll
alert("Please view in Desktop Mode")
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY >0 );
})
