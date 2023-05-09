let modal = document.getElementById("modal");

let closeButton = document.querySelector(".close-modal");
document.querySelector("#modalOpen").addEventListener("click", openModal)

export function openModal() {
  modal.style.display = "block";
}


export function closeModal() {
  modal.style.display = "none";
}

closeButton.addEventListener("click", closeModal);

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
}}

