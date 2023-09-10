const bar = document.querySelector('#bar')
const navbar = document.querySelector('#navbar')
const close = document.querySelector('#close')

bar.addEventListener('click', function(){
    navbar.classList.toggle('active');
})

close.addEventListener('click', function(){
    navbar.classList.remove('active')
})

// *************************************************************

const mainImg = document.querySelector('#MainImg')
const smallImgs = document.querySelectorAll('.small-img')

for(let smallImg of smallImgs){
    smallImg.addEventListener('click', function(){
        mainImg.src = smallImg.src;
    })
}