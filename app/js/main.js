const headerBtn = document.getElementById('headerBtn')
const rightsideMenu = document.getElementById('rightsideMenu')
const rightMenuClose = document.getElementById('rightMenuClose')

headerBtn.addEventListener('click', () => {
    rightsideMenu.classList.remove('rightside-menu--close')
})

rightMenuClose.addEventListener('click', () => {
    rightsideMenu.classList.add('rightside-menu--close')
})

