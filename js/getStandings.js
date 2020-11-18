function getStandingsHTML(data, resolve) {
  let standingsHTML = "";
  let leagueHTML = "";

  if (data.competition.id == 2018) {
    leagueHTML += `
        <div class="col m3 l4"></div>
          <div class="col s12 m6 l4">
            <div class="card grey darken-4">
              <div class="white card-image waves-effect waves-block waves-light">
                <img class="responsive-img" alt="${data.competition.name}" src="img/liga/${data.competition.code}.png" style="height:100%"/>
              </div>
              <div class="card-desc">
                <span class="truncate"><b>${data.competition.name}</b></span>
                <p>${data.competition.area.name}</p>
              </div>
            </div>
          </div>
        <div class="col m3 l4"></div>
        `;

    standingsHTML += `
        <tr class="text-center">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <h4>Data Kosong</h4>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
      `;
  } else if (data.competition.id == 2001 || data.competition.id == 2000) {
    leagueHTML += `
        <div class="col m3 l4"></div>
          <div class="col s12 m6 l4">
            <div class="card grey darken-4">
              <div class="white card-image waves-effect waves-block waves-light">
                <img class="responsive-img" alt="${data.competition.name}" src="img/liga/${data.competition.code}.png" style="height:100%"/>
              </div>
              <div class="card-desc">
                <span class="truncate"><b>${data.competition.name}</b></span>
                <p>${data.competition.area.name}</p>
              </div>
            </div>
          </div>
        <div class="col m3 l4"></div>
        `;

    data.standings.forEach((standing) => {
      standingsHTML += `
        <tr>
        <td>${standing.group.replace("_", " ")}</td>
        </tr>
        `;
      standing.table.forEach((dataTeam) => {
        let urlTeamImage = dataTeam.team.crestUrl;
        if (urlTeamImage == null || urlTeamImage == "") {
          urlTeamImage = "img/liga/404.png";
        } else {
          urlTeamImage = urlTeamImage.replace(/^http:\/\//i, "https://");
        }
        standingsHTML += `
            <tr>
            <td>${dataTeam.position}<br />&nbsp;</td>
            <td>
              <a href="./team.html?id=${dataTeam.team.id}">
              <img src="${urlTeamImage}" onError="this.onerror=null;this.src='/img/liga/404.png';" alt="${dataTeam.team.name}" class="responsive-img" style="height:30px">
              </a>
            </td>
            <td>
              <a href="./team.html?id=${dataTeam.team.id}">
                ${dataTeam.team.name}
              </a><br />&nbsp;
            </td>
            <td>${dataTeam.playedGames}<br />&nbsp;</td>
            <td>${dataTeam.won}<br />&nbsp;</td>
            <td>${dataTeam.draw}<br />&nbsp;</td>
            <td>${dataTeam.lost}<br />&nbsp;</td>
            <td>${dataTeam.goalsFor}<br />&nbsp;</td>
            <td>${dataTeam.goalsAgainst}<br />&nbsp;</td>
            <td>${dataTeam.goalDifference}<br />&nbsp;</td>
            <td>${dataTeam.points}<br />&nbsp;</td>
            </tr>
          `;
      });
    });
  } else {
    leagueHTML += `
      <div class="col m3 l4"></div>
        <div class="col s12 m6 l4">
          <div class="card grey darken-4">
            <div class="white card-image waves-effect waves-block waves-light">
              <img class="responsive-img" alt="${data.competition.name}" src="img/liga/${data.competition.code}.png" style="height:100%" />
            </div>
            <div class="card-desc">
              <span class="truncate"><b>${data.competition.name}</b></span>
              <p>${data.competition.area.name}</p>
            </div>
          </div>
        </div>
      <div class="col m3 l4"></div>
      `;

    data.standings[0].table.forEach((dataTeam) => {
      let urlTeamImage = dataTeam.team.crestUrl;
      if (urlTeamImage == null || urlTeamImage == "") {
        urlTeamImage = "img/liga/404.png";
      } else {
        urlTeamImage = urlTeamImage.replace(/^http:\/\//i, "https://");
      }
      standingsHTML += `
                <tr>
                <td>${dataTeam.position}<br />&nbsp;</td>
                <td>
                  <a href="./team.html?id=${dataTeam.team.id}">
                  <img src="${urlTeamImage}" onError="this.onerror=null;this.src='/img/liga/404.png';" alt="${dataTeam.team.name}" class="responsive-img" style="height:30px">
                  </a>
                </td>
                <td>
                  <a href="./team.html?id=${dataTeam.team.id}">
                    ${dataTeam.team.name}
                  </a><br />&nbsp;
                </td>
                <td>${dataTeam.playedGames}<br />&nbsp;</td>
                <td>${dataTeam.won}<br />&nbsp;</td>
                <td>${dataTeam.draw}<br />&nbsp;</td>
                <td>${dataTeam.lost}<br />&nbsp;</td>
                <td>${dataTeam.goalsFor}<br />&nbsp;</td>
                <td>${dataTeam.goalsAgainst}<br />&nbsp;</td>
                <td>${dataTeam.goalDifference}<br />&nbsp;</td>
                <td>${dataTeam.points}<br />&nbsp;</td>
                </tr>
              `;
    });
  }

  document.getElementById("standings").innerHTML = standingsHTML;
  document.getElementById("leagues").innerHTML = leagueHTML;

  resolve(data);
}
