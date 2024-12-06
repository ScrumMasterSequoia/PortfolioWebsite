
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