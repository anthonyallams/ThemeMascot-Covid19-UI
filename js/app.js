//Smooth Scrolling
$("#nav a, .btn").on("click", (e) => {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      1200
    );
  }
});

//Collapse hamburger on anchor/li click
let menu = document.querySelector(".menu-wrap");
let closeIcon = document.querySelector(".toggler");

menu.addEventListener("click", handleMenuClick);

function handleMenuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    closeIcon.checked = false;
  }
}
