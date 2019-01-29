window.onload = function() {
  const nav = document.querySelector(".main-navigation");
  const signUp = document.querySelectorAll(".btn");
  const heroImg = document.querySelector(".intro img");
  const body = document.querySelector("body");
  let redMode = false;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.style.backgroundColor = "gray";
    }
    if (window.scrollY == 0) {
      nav.style.backgroundColor = "white";
    }
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
