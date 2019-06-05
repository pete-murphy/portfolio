const main = () => {
  const hand = document.querySelector(".waving-hand")
  const header = document.querySelector("header")

  hand.addEventListener("animationend", () => {
    header.classList.remove("initial-wave")
    header.classList.add("wave-on-hover")
  })
}

window.onload = main
