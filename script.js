let themeDots = document.getElementsByClassName("theme-dot")

let theme = localStorage.getItem('theme')

if(theme == null) {
    setTheme('light')
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
        document.getElementById('theme-style').href = 'default.css'
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
        console.log("script.js - Service Worker Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("Service Worker Registration Failed!" + error);
    });
}