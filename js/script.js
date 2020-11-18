document.addEventListener(
  "DOMContentLoaded",
  function () {
    loadNav();

    function loadNav() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status != 200) return;
          const text = document.querySelectorAll(".topnav, .botnav");
          text.forEach(function (elm) {
            elm.innerHTML = xhttp.responseText;
          });

          const link = document.querySelectorAll(".botnav li a, .topnav li a");
          link.forEach(function (elm) {
            elm.addEventListener("click", function (event) {
              if (event.target.attributes.href) {
                pagePref = event.target.attributes.href.value.substr(1);
                loadPage(pagePref);
              } else {
                pagePost = event.target.parentNode.attributes.href.value.substr(
                  1
                );
                loadPage(pagePost);
              }
            });
          });
        }
      };
      xhttp.open("GET", "nav.html", true);
      xhttp.send();
    }

    // Load page content
    var page = window.location.hash.substr(1);
    if (page == "") page = "home";
    loadPage(page);

    function loadPage(page) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          var content = document.querySelector(".body-content");
          if (this.status == 200) {
            content.innerHTML = xhttp.responseText;
            if (page == "home") {
              var parallax = document.querySelectorAll(".parallax");
              M.Parallax.init(parallax);
              getCompetitions();
            } else if (page == "saved") {
              getSavedTeam();
            }
          } else if (this.status == 404) {
            content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
          } else {
            content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
          }
        }
      };
      xhttp.open("GET", "pages/" + page + ".html", true);
      xhttp.send();
    }
  },
  {
    passive: true,
  }
);
