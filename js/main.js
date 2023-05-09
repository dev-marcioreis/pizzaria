const navbarList = document.querySelector('.navbar__list')
const openMenu = document.querySelector('.open__navbar')
const closeMenu = document.querySelector('.close__navbar')

// Open menu navbar on click
const openNavbar = () => {
    navbarList.style.display = 'flex'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'inline-block'
}

// Close menu navbar on click
const closeNavbar = () => {
    navbarList.style.display = 'none'
    closeMenu.style.display = 'none'
    openMenu.style.display = 'inline-block'
}

openMenu.addEventListener('click', openNavbar)
closeMenu.addEventListener('click', closeNavbar)

// Close menu navbar when clicking any option
if(window.innerWidth < 1024) {
    document.querySelectorAll('.navbar__list .navbar__item').forEach(navbar => {
        navbar.addEventListener('click', () => {
            closeNavbar()
        })
    })
}


// Change menu navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolling', window.scrollY)
})


// Cart
const showCartBtn = document.getElementById('showCart')
const hideCartBtn = document.getElementById('hideCart')
const cartMenu = document.querySelector('.cart__container')

const showCartMenu = () => {
    cartMenu.style.left = '0'
    showCartBtn.style.display = 'none'
    hideCartBtn.style.display = 'inline-block'
}

const hideCartMenu = () => {
    cartMenu.style.left = '-100%'
    hideCartBtn.style.display = 'none'
    showCartBtn.style.display = 'inline-block'
}

showCartBtn.addEventListener('click', showCartMenu)
hideCartBtn.addEventListener('click', hideCartMenu)

