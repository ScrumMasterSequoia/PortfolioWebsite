let themeDots = document.getElementsByClassName("theme-dot")

let theme = localStorage.getItem('theme')

const menuButton = document.getElementById("menu-button");
const menuDropdown = document.getElementById("menu-dropdown");
let isMenuClosed = true;
setisMenuClosed(true);

menuButton.addEventListener("click", () => {
    setisMenuClosed(!isMenuClosed);
});

function setisMenuClosed() {
    if (isMenuClosed) {
        isMenuClosed = false;
        menuDropdown.classList.remove("open");
    } else {
        isMenuClosed = true;
        menuDropdown.classList.add("open");
    }
}

const handleClickOutside = (event) => {
    if (menuDropdown.classList.contains("open") && (!menuButton.contains(event.target))) {
        setisMenuClosed(false)
    }
}
document.addEventListener('click', handleClickOutside);

if(theme == null) {
    setTheme('black')
}else{
    setTheme(theme)
}

for(var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Clicked: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'portfolio.css'
    }
    if(mode == 'red'){
        document.getElementById('theme-style').href = 'red.css'
    }
    if(mode == 'black'){
        document.getElementById('theme-style').href = 'black.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme', mode)
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then(registration => {
        console.log("portfolio.js - Service Worker Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("Service Worker Registration Failed!" + error);
    });
}