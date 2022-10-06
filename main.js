window.onscroll = function () {
  myFunction();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

let aboutUsPage = document.getElementById("aboutUsNav");
aboutUsPage.addEventListener("click", () => {
  window.location.href = "./aboutUs.html";
});

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
