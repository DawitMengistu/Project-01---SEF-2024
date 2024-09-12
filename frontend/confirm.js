const confirmBtn = document.querySelector(".confirm-btn");
const confirmText = document.querySelector(".confirm-text");
const loading = document.querySelector(".loading-confirm");

const TN = document.querySelector(".payment-input");

confirmBtn.addEventListener("click", () => {
    confirmBtn.classList.add("loading");
    loading.classList.remove("hide");
    confirmText.classList.add("hide");

    console.log({ trasaction_number: TN.value, book_id: bookID }, bookID)

    fetch('http://localhost:3000/confirm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: { trasaction_number: TN.value, book_id: bookID },
        })
    })
        .then(response => response.json())
        .then(data => {

            confirmBtn.classList.remove("loading");
            loading.classList.add("hide");
            confirmText.classList.remove("hide");

            alert(data.message)
            hidePanel();
        }
        )
        .catch(error => console.error(error));



})