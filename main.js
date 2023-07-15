//to change navigation styles on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY >0 );
})

// circular word art in contact button

const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButtons => {
    let text = textButtons.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => 
    `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join(" ")
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  
