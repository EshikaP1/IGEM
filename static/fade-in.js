 window.addEventListener("DOMContentLoaded", (event) => {
    var elements = document.querySelectorAll(".fade-in");
    function isElementInView(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.top + 50 <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    function callback() {
      for (var i = 0; i < elements.length; i++) {
        if (isElementInView(elements[i])) {
          elements[i].classList.add("in-view");
        }
      }
    }

    window.addEventListener("load", callback);
    window.addEventListener("resize", callback);
    window.addEventListener("scroll", callback);
  });
