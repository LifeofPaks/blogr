

const closeBtn = document.querySelector('.close')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const subMenu = document.querySelectorAll('.sub-menu')
const menuHeading = document.querySelectorAll('.menu-heading')


closeBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    hamburger.classList.add('active')
})

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    if(hamburger.classList.contains('active')){
        hamburger.classList.remove('active')
    } else{
        hamburger.classList.add('active')
    }
})

for (let i = 0; i < menuHeading.length; i++){
    menuHeading[i].addEventListener('click', ()=>{
        subMenu[i].classList.toggle('active')
        const arrow = menuHeading[i].querySelector('.arrow')
        arrow.classList.toggle('active')
    })
}

window.addEventListener('scroll', ()=>{
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
        hamburger.classList.add('active')
    }
})

