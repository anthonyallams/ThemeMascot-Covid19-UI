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
