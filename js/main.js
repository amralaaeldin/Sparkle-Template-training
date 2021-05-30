/* top on reload */
history.scrollRestoration = "manual";
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

/* window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}; */

/* nav bar exchange */
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 78.5);
  if (window.scrollY > 78.5) {
    document.getElementById("logo").src = "images/images/logosticky.svg";
  } else {
    document.getElementById("logo").src = "images/images/logo.svg";
  }
});

/* static toggle list */
document
  .querySelector("header .container nav .icon")
  .addEventListener("click", function () {
    this.classList.toggle("open");
    document.getElementById("box").classList.toggle("flex");
  });
/* close when click outside ?? */
/* window.onload = function () {
  const box = document.getElementById("box");
  document.onclick = function (e) {
    if (e.target.id !== "box") {
      box.style.display = "none";
      console.log("i did");
    }
  };
}; */

/* const box = document.querySelector("#box");
box.addEventListener("click", function (event) {
  if (event.target.closest("#box")) {
    return box.classList.add("hidden");
  }
}); */

/* same animation when close ?? */

/* select from gallery */
const img1 = document.querySelector(".img1"),
  img2 = document.querySelector(".img2"),
  img3 = document.querySelector(".img3"),
  img4 = document.querySelector(".img4"),
  img5 = document.querySelector(".img5"),
  img6 = document.querySelector(".img6"),
  all = document.querySelector(".all"),
  graphic = document.querySelector(".graphic"),
  web = document.querySelector(".web"),
  development = document.querySelector(".development");

all.addEventListener("click", function () {
  img1.style.display = "block";
  img2.style.display = "block";
  img3.style.display = "block";
  img4.style.display = "block";
  img5.style.display = "block";
  img6.style.display = "block";
});
graphic.addEventListener("click", function () {
  img1.style.display = "block";
  img2.style.display = "block";
  img3.style.display = "none";
  img4.style.display = "none";
  img5.style.display = "none";
  img6.style.display = "none";
});
web.addEventListener("click", function () {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "block";
  img4.style.display = "block";
  img5.style.display = "none";
  img6.style.display = "none";
});
development.addEventListener("click", function () {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
  img5.style.display = "block";
  img6.style.display = "block";
});

/* test css text , innerHtml style ,
      check again https://dev.to/karataev/set-css-styles-with-javascript-3nl5
      check again https://www.w3schools.com/jsref/prop_style_csstext.asp

      How to return it as it was when scroll up ?? watch the tutorials
            */
