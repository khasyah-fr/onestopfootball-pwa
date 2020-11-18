let dbPromised = idb.open("onestopfootball", 2, function (upgradeDb) {
  let teamOS = upgradeDb.createObjectStore("teams", {
    keyPath: "id",
  });
  teamOS.createIndex("name", "name", {
    unique: false,
  });

  let standingOS = upgradeDb.createObjectStore("standings", {
    keyPath: "competition.id",
  });
  standingOS.createIndex("competition.name", "competition.name", {
    unique: false,
  });
});

function saveStanding(standing) {
  dbPromised
    .then(function (db) {
      let tx = db.transaction("standings", "readwrite");
      let store = tx.objectStore("standings");
      store.put(standing);
      return tx.complete;
    })
    .then(function () {
      const title = "Data standing berhasil disimpan";
      console.log(title);
    })
    .catch(function () {
      M.toast({
        html: "Data logo team gagal disimpan",
      });
    });
}

function saveFavTeam(team) {
  dbPromised
    .then(function (db) {
      let tx = db.transaction("teams", "readwrite");
      let store = tx.objectStore("teams");
      store.put(team);
      return tx.complete;
    })
    .then(function () {
      const title = "Data team berhasil disimpan";
      console.log(title);
      const options = {
        body: `Club ${team.name} sudah tersimpan, cek Favorite.`,
        badge: "icons/timericon.png",
        icon: "icons/timericon.png",
      };

      if (Notification.permission === "granted") {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification(title, options);
        });
      } else {
        M.toast({
          html: `Club ${team.name} berhasil disimpan, cek Favorite.`,
        });
      }
    })
    .catch(function () {
      M.toast({
        html: "Team gagal disimpan",
      });
    });
}

function deleteFavTeam(team) {
  dbPromised
    .then(function (db) {
      let tx = db.transaction("teams", "readwrite");
      let store = tx.objectStore("teams");
      store.delete(team);
      return tx.complete;
    })
    .then(function () {
      const title = "Data team berhasil dihapus";
      const options = {
        body: `Club berhasil dihapus dari Favorite.`,
        badge: "icons/timericon.png",
        icon: "icons/timericon.png",
      };
      if (Notification.permission === "granted") {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification(title, options);
        });
      } else {
        M.toast({
          html: `Club berhasil dihapus dari Favorite.`,
        });
      }
    })
    .catch(function () {
      M.toast({
        html: "Team gagal dihapus",
      });
    });
}

function checkFavorite(id) {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then(function (db) {
        let tx = db.transaction("teams", "readonly");
        let store = tx.objectStore("teams");
        return store.get(id);
      })
      .then(function (favorite) {
        if (favorite !== undefined) {
          resolve(true);
        }
      });
  });
}

function getAllFavTeam() {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then(function (db) {
        let tx = db.transaction("teams", "readonly");
        let store = tx.objectStore("teams");
        return store.getAll();
      })
      .then(function (teams) {
        resolve(teams);
      });
  });
}

function getAllCrestUrl() {
  return new Promise(function (resolve, reject) {
    dbPromised
      .then(function (db) {
        let tx = db.transaction("standings", "readonly");
        let store = tx.objectStore("standings");
        return store.getAll();
      })
      .then(function (crest) {
        resolve(crest);
      });
  });
}
