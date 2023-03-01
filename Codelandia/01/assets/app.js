const hearts = document.querySelectorAll(".heart-svg");
const filledHeart = document.querySelectorAll(".heart-filled");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].onclick = () => {
    hearts[i].style.display = "none";
    filledHeart[i].style.display = "block";
  };

  filledHeart[i].onclick = () => {
    filledHeart[i].style.display = "none";
    hearts[i].style.display = "block";
  };
}

const sr = ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  reset: true,
});

ScrollReveal().reveal(".post", { delay: 100 });
ScrollReveal().reveal(".date-heart", { delay: 120 });
ScrollReveal().reveal(".title", { delay: 140 });
ScrollReveal().reveal(".description", { delay: 150 });
