const burger = document.querySelector("div[burger-icon]")
const menu = document.querySelector("nav[menu-mobile]")

burger.addEventListener("click", (e) => {
    e.preventDefault()
    menu.classList.toggle('open')
    document.body.classList.toggle("scroll")
})

function hideMenu () {
    if (menu.style.display !== "none") {
        menu.classList.remove("open")
        document.body.classList.remove("scroll")
    }
}