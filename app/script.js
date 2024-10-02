const starContainer = document.querySelectorAll(".stars-container");
for (let container of starContainer) {
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("img");
    star.src = "../assets/star.png";
    star.classList.add("w-5", "h-5");
    container.appendChild(star);
  }
}
