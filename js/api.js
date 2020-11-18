const base_url = "https://api.football-data.org/v2/";

const api_token = "501d28c8265041fc9369e9abd9607e33";

let fetchApi = (url) => {
  return fetch(url, {
    headers: {
      "X-Auth-Token": api_token,
    },
  });
};

function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    return Promise.reject(new Error(response.statusText));
  } else {
    return Promise.resolve(response);
  }
}

function json(response) {
  return response.json();
}

function error(error) {
  console.log("Error : " + error);
}

function getCompetitions() {
  if ("caches" in window) {
    caches
      .match(base_url + "competitions?plan=TIER_ONE")
      .then(function (response) {
        if (response) {
          response.json().then(function (data) {
            getCompetitionsHTML(data);
          });
        }
      });
  }
  fetchApi(base_url + "competitions?plan=TIER_ONE")
    .then(status)
    .then(json)
    .then(function (data) {
      getCompetitionsHTML(data);
    })
    .catch(error);
}

function getStanding() {
  return new Promise(function (resolve, reject) {
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");

    if ("caches" in window) {
      caches
        .match(
          base_url + "competitions/" + idParam + "/standings?standingType=TOTAL"
        )
        .then(function (response) {
          if (response) {
            response.json().then(function (data) {
              getStandingsHTML(data, resolve);
            });
          }
        });
    }
    fetchApi(
      base_url + "competitions/" + idParam + "/standings?standingType=TOTAL"
    )
      .then(status)
      .then(json)
      .then(function (data) {
        getStandingsHTML(data, resolve);
      });
  });
}

function getTeam() {
  return new Promise(function (resolve, reject) {
    // Ambil nilai query parameter (?id=)
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");

    if ("caches" in window) {
      caches.match(base_url + "teams/" + idParam).then(function (response) {
        if (response) {
          response.json().then(function (data) {
            getTeamHTML(data, resolve);
          });
        }
      });
    }
    fetchApi(base_url + "teams/" + idParam)
      .then(status)
      .then(json)
      .then(function (data) {
        getTeamHTML(data, resolve);
      });
  });
}

function getLastMatch() {
  let urlParams = new URLSearchParams(window.location.search);
  let idParam = urlParams.get("id");

  if ("caches" in window) {
    caches
      .match(base_url + "teams/" + idParam + "/matches?status=FINISHED")
      .then(function (response) {
        if (response) {
          response.json().then(function (data) {
            getLastMatchHTML(data);
          });
        }
      });
  }
  fetchApi(base_url + "teams/" + idParam + "/matches?status=FINISHED")
    .then(status)
    .then(json)
    .then(function (data) {
      getLastMatchHTML(data);
    });
}

function getNextMatch() {
  let urlParams = new URLSearchParams(window.location.search);
  let idParam = urlParams.get("id");

  if ("caches" in window) {
    caches
      .match(base_url + "teams/" + idParam + "/matches?status=SCHEDULED")
      .then(function (response) {
        if (response) {
          response.json().then(function (data) {
            getNextMatchHTML(data);
          });
        }
      });
  }
  fetchApi(base_url + "teams/" + idParam + "/matches?status=SCHEDULED")
    .then(status)
    .then(json)
    .then(function (data) {
      getNextMatchHTML(data);
    });
}

function getSavedTeam() {
  getAllFavTeam().then(function (teams) {
    getSavedTeamHTML(teams);
  });
}
