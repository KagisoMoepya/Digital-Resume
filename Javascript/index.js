/* 
Setting the menu/options button on click
*/

const menu = document.querySelector('[data-menu-status]')
const navigation_bar = document.querySelector('nav')
const navigation_selectors = document.querySelectorAll('#nav_items li a')

window.addEventListener('resize', () => {
    if(window.matchMedia('(min-width: 800px)').matches) {
        menu.setAttribute('data-menu-status', 'close')
        menu.textContent = 'menu'
        navigation_bar.style.left = '-100%'
    }
})

menu.addEventListener('click', (e) => {
    if(e.target.getAttribute('data-menu-status') === 'close') {
        menu.setAttribute('data-menu-status', 'open')
        menu.textContent = 'close'
        navigation_bar.style.left = '0%'

        if(window.matchMedia('(max-width: 800px)').matches) {
            navigation_selectors.forEach(link => {
                link.addEventListener('click', () => {
                    menu.setAttribute('data-menu-status', 'close')
                    menu.textContent = 'menu'
                    navigation_bar.style.left = '-100%'
                })
            })
        }
    } else {
        menu.setAttribute('data-menu-status', 'close')
        menu.textContent = 'menu'
        navigation_bar.style.left = '-100%'
    }
})

/**
 * Form submission event handler
 */

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const name = formData.get('name')
    const email = formData.get('email')
    const company_name = formData.get('company_name')
    const message = formData.get('message')

    console.log({name, email, company_name, message});

    emailjs.send("service_5ohexgr","template_q9tamd5",{
        name: name,
        email: email,
        company_name: company_name,
        message: message,
    }).then(alert(`The Email was sent Successfully!`)
    )
    form.reset()
})
