window.onload = function() {
  //Element definitions
  const nav = document.querySelector(".main-navigation");
  const navBtns = document.querySelectorAll(".nav-link");
  const signUp = document.querySelectorAll(".btn");
  const heroImg = document.querySelector(".intro img");
  const body = document.querySelector("body");
  const mapPic = document.querySelector(".img-content img");

  //Global variables
  let redMode = false;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.style.backgroundColor = "gray";
    }
    if (window.scrollY == 0) {
      nav.style.backgroundColor = "white";
    }
  });

  window.addEventListener("keydown", e => {
    if (e.keyCode === 69) {
      alert("You found my secret button");
    }
  });

  navBtns.forEach(btn =>
    btn.addEventListener("click", e => {
      e.preventDefault();
      alert(
        "We canceled the page refresh because the link does not work dummy"
      );
    })
  );

  mapPic.addEventListener("auxclick", e => {
    TweenMax.to(e.currentTarget, 3, { rotation: "360deg" });
  });

  signUp.forEach(btn =>
    btn.addEventListener("click", () => {
      alert(
        "We actually did not set up the sign up button...bear with us please!"
      );
    })
  );

  heroImg.addEventListener("mouseover", e => {
    e.currentTarget.style.opacity = 0.6;
  });

  heroImg.addEventListener("mouseout", e => {
    e.currentTarget.style.opacity = 1;
  });

  body.addEventListener("dblclick", e => {
    if (!redMode) {
      redMode = true;
      e.currentTarget.style.color = "red";
      alert("You've activated red mode!");
    } else {
      redMode = false;
      e.currentTarget.style.color = "";
      alert("You've turned off red mode!");
    }
  });
};
