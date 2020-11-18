function getTeamHTML(data, resolve) {
  let squadHTML = "";
  let teamHTML = "";

  let logoTeam = data.crestUrl;
  if (logoTeam == null || logoTeam == "") {
    logoTeam = "img/liga/404.png";
  } else {
    logoTeam = logoTeam.replace(/^http:\/\//i, "https://");
  }

  teamHTML += `
      <div class="col m3"></div>
          <div class="col s12 m6">
          <div class="card lighten-1">
              <div class="row">
              <div class="col s2"></div>
              <div class="col s8 card-image waves-effect waves-block waves-light">
                  <img class="responsive-img" alt="${data.name}" src="${logoTeam}" onError="this.onerror=null;this.src='/img/liga/404.png';" style="height:100%"/>
              </div>
              <div class="col s2"></div>
              </div>
              <div class="card-content">
              <span class="truncate"><b>${data.name} (${data.tla})</b></span>
              <a rel="noopener" href="${data.website}" target="_blank">  
                  <p>${data.website}</p>
              </a>
              <hr>
              <p>Founded: ${data.founded}</p>
              <p>Stadium: ${data.venue}</p>
              <p>Color: ${data.clubColors}</p>
              <p>E-mail: ${data.email}</p>
              <p>Phone: ${data.phone}</p>
              <p>Address: ${data.address}</p>
              </div>
          </div>
          </div>
      <div class="col m3"></div>
    `;

  document.getElementById("team").innerHTML = teamHTML;

  resolve(data);
}
