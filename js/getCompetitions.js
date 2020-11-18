function getCompetitionsHTML(data) {
  let leagueHTML = "";
  data.competitions.forEach(function (liga) {
    leagueHTML += `
        <div class="col s6 m4 l3" >
        <a href="./standing.html?id=${liga.id}">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img alt="${liga.area.name}" src="img/liga/${liga.code}.png" style="width:100%"/>
            </div>
            <div class="card-content" style="margin-top:-25px;">
              <span class="truncate"><b>${liga.name}</b></span>
              <p>${liga.area.name}</p>
            </div>
          </div>
        </a>
        </div>
        `;
  });

  document.getElementById("leagues").innerHTML = leagueHTML;
}
