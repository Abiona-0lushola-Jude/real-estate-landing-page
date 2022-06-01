// setInterval(() => {
//     console.log("We are working here")
//     console.log("Working!")
// }, 7000);
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
hamburger.addEventListener('click',()=>{
    menu.classList.toggle('show')
})