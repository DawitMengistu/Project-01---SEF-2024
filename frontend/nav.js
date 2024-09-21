const navBtn = document.querySelectorAll(".nav-btn");

const libCon = document.querySelector(".library-con");
const bookcon = document.querySelector(".book-con");

for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", () => {
        if (i == 0) {
            bookcon.classList.remove("hide");
            libCon.classList.add("hide");

            navBtn[0].classList.add("focused")
            navBtn[1].classList.remove("focused")
            navBtn[2].classList.remove("focused")
        }
        else if (i == 2) {
            bookcon.classList.add("hide");
            libCon.classList.remove("hide");

            navBtn[2].classList.add("focused")
            navBtn[1].classList.remove("focused")
            navBtn[0].classList.remove("focused")



        }
    })
}