const sidePanel = document.querySelector(".side-panel")
const shade = document.querySelector(".shade")


shade.addEventListener("click", () => {
    console.log("I'm here")
    hidePanel();
})

function hidePanel() {
    sidePanel.classList.add("side-closed")
    shade.classList.add("hide")
}
function openPanel() {
    sidePanel.classList.remove("side-closed")
    shade.classList.remove("hide")
}