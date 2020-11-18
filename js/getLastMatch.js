function getLastMatchHTML(data) {
  if (data.count === 0) {
    document.querySelector(".took-me").style.display = "block";
    document.querySelector("#btnLoadMore").style.display = "none";
  }
  data.matches
    .slice()
    .reverse()
    .forEach((match, index) => {
      let ts = new Date(match.utcDate);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
      };

      function getImgHome(match) {
        let final = getAllCrestUrl().then(function (data) {
          for (let i = 0; i <= data.length; i++) {
            let idCompDb = data[i].competition.id;
            let idCompNm = match.competition.id;
            if (idCompNm === idCompDb) {
              if (idCompNm == 2001 || idCompNm == 2000) {
                let standing = data[i].standings;
                let img = "";
                standing.forEach((standing) => {
                  standing.table.forEach((table) => {
                    let idHomeDb = table.team;
                    let idHome = match.homeTeam;

                    if (idHomeDb.id == idHome.id) {
                      img = convertImg(idHomeDb.crestUrl);
                      return img;
                    }
                    return table;
                  });
                  return standing;
                });
                return img;
              } else {
                table = data[i].standings[0].table;
                for (let j = 0; j <= table.length; j++) {
                  let idHomeDb = table[j].team;
                  let idHome = match.homeTeam;

                  if (idHomeDb.id == idHome.id) {
                    var img = convertImg(idHomeDb.crestUrl);
                    return img;
                  }
                }
                return table;
              }
            }
          }
        });
        return final;
      }

      function getImgAway(match) {
        let final = getAllCrestUrl().then(function (data) {
          for (let i = 0; i <= data.length; i++) {
            let idCompDb = data[i].competition.id;
            let idCompNm = match.competition.id;
            if (idCompNm === idCompDb) {
              if (idCompNm == 2001 || idCompNm == 2000) {
                let standing = data[i].standings;
                let img = "";
                standing.forEach((standing) => {
                  standing.table.forEach((table) => {
                    let idHomeDb = table.team;
                    let idHome = match.awayTeam;

                    if (idHomeDb.id == idHome.id) {
                      img = convertImg(idHomeDb.crestUrl);
                      return img;
                    }
                    return table;
                  });
                  return standing;
                });
                return img;
              } else {
                table = data[i].standings[0].table;
                for (let j = 0; j <= table.length; j++) {
                  let idHomeDb = table[j].team;
                  let idHome = match.awayTeam;

                  if (idHomeDb.id == idHome.id) {
                    var img = convertImg(idHomeDb.crestUrl);
                    return img;
                  }
                }
                return table;
              }
            }
          }
        });
        return final;
      }

      function convertImg(img) {
        let logoTeam = img;
        if (logoTeam == null || logoTeam == "" || logoTeam == undefined) {
          logoTeam = "img/liga/404.png";
          return logoTeam;
        } else {
          logoTeam = logoTeam.replace(/^http:\/\//i, "https://");
          return logoTeam;
        }
      }

      async function getImg(match) {
        try {
          var val = await getImgHome(match);
          var val2 = await getImgAway(match);
          let html = "";
          html += `
            <li class="collection-item avatar hmm">
            <div class="row lighten-1 collapsible-header valign-wrapper hidden" style="margin:0px;">
                <div class="col s12 m5 center-align home">
                  <a href="./team.html?id=${match.homeTeam.id}">
                    <img src="${val}" onError="this.onerror=null;this.src='/img/liga/404.png';" 
                      alt="${match.homeTeam.name}" 
                      class="responsive-img img-home" style="height: 50px;">
                    <br>
                    ${match.homeTeam.name}
                  </a>
                </div>
                <div class="col s12 m2 center-align score black-text">
                  <p>
                    ${match.score.fullTime.homeTeam} - ${
            match.score.fullTime.awayTeam
          }
                  </p>
                </div>
                <div class="col s12 m5 center-align away">
                  <a href="./team.html?id=${match.awayTeam.id}">
                    <img src="${val2}" onError="this.onerror=null;this.src='/img/liga/404.png';" 
                    alt="${match.awayTeam.name}" 
                    class="responsive-img img-home" style="height: 50px;">
                    <br>
                    ${match.awayTeam.name}
                  </a>
                </div>
            </div>
            <div class="lighten-1 collapsible-body center-align info black-text">
                <h6><b>${match.competition.name}</b></h6>
                <p>Week-${match.matchday}</p>
                <p>${match.homeTeam.name} (HOME)</p>
                <p>${match.score.fullTime.homeTeam}</p>
                <p>VS</p>
                <p>${match.score.fullTime.awayTeam}</p>
                <p>${match.awayTeam.name} (AWAY)</p>
                <p>${ts.toLocaleDateString("en-GB", options)}</p>
                <p>Referee ${match.referees[0].name}</p>
            </div>
            </li>
            `;

          document.getElementById("last-match").innerHTML += html;
          if (index <= 1) {
            document
              .querySelector("#last-match .hidden")
              .classList.remove("hidden");
          }
          document
            .getElementById("btnLoadMore")
            .addEventListener("click", loadMore);
        } catch (err) {
          console.log("Error: ", err.message);
        }
      }

      getImg(match);
    });

  function loadMore() {
    const hidden = document.querySelector("#last-match .hidden");
    if (hidden) {
      hidden.classList.remove("hidden");
    } else {
      M.toast({
        html: `Data last-match sudah habis.`,
      });
    }
  }
}
