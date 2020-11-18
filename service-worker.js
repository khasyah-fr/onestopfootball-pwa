importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  console.log(`Workbox berhasil dimuat`);
} else {
  console.log(`Workbox gagal dimuat`);
}

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js",
  "/",
  "https://khasyah-fr.github.io/onestopfootball-pwa/favicon.ico",
  "https://khasyah-fr.github.io/onestopfootball-pwa/css/materialize.min.css",
  "https://khasyah-fr.github.io/onestopfootball-pwa/js/idb/lib/idb.js",
  "https://khasyah-fr.github.io/onestopfootball-pwa/js/materialize.min.js",
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/404.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/BL1.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/BSA.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/CL.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/DED.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/EC.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/ELC.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/FL1.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/PD.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/PL.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/PPL.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/SA.png",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/img/liga/WC.png",
    revision: "1",
  },
  "https://khasyah-fr.github.io/onestopfootball-pwa/icons/timericon.png",
  "https://khasyah-fr.github.io/onestopfootball-pwa/icons/timericon-192.png",
  "https://khasyah-fr.github.io/onestopfootball-pwa/icons/maskable_timericon.png",
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/css/styles.css",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/index.html",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/offline.html",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/manifest.json",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/package.json",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/package-lock.json",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/nav.html",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/standing.html",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/team.html",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/pages/home.html",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/pages/saved.html",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/script.js",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/api.js",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/firebase.js",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/getCompetitions.js",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/getLastMatch.js",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/getStandings.js",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/getTeam.js",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/getNextMatch.js",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/getSavedTeam.js",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/cek_sw.js",
    revision: "1",
  },
  {
    url: "https://khasyah-fr.github.io/onestopfootball-pwa/js/osf_db.js",
    revision: "1",
  },
  {
    url:
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css",
    revision: "1",
  },
  {
    url: "https://fonts.googleapis.com/icon?family=Material+Icons&display=swap",
    revision: "1",
  },
], {
ignoreUrlParametersMatching: [/.*/]
});

self.addEventListener("install", (event) => {
  const urls = ["https://khasyah-fr.github.io/onestopfootball-pwa/offline.html"];
  const cacheName = workbox.core.cacheNames.runtime;
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(urls)));
});

const offlinePage = "https://khasyah-fr.github.io/onestopfootball-pwa/offline.html";

workbox.routing.registerRoute(new RegExp("/"), async ({ event }) => {
  try {
    return await workbox.strategies
      .networkFirst({
        cacheName: "osfpwa",
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
          }),
        ],
      })
      .handle({
        event,
      });
  } catch (error) {
    return caches.match(offlinePage);
  }
});

workbox.routing.registerRoute(
  /^https:\/\/api\.football\-data\.org\/v2\//,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "football-data-api",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 120,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:png|jpx|css|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 25,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:woff2)$/,
  workbox.strategies.cacheFirst({
    cacheName: "font-icon",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 25,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);

//OLD SERVICE WORKER CODE (Stays for learning purposes)
// const CACHE_NAME = "osfpwa-v5";

// var urlsToCache = [
//   "/",
//   "/favicon.ico",
//   "/index.html",
//   "/manifest.json",
//   "/nav.html",
//   "/offline.html",
//   "/package-lock.json",
//   "/package.json",
//   "/standing.html",
//   "/team.html",

//   "/css/materialize.min.css",
//   "/css/styles.css",

//   "/icons/timericon-192.png",
//   "/icons/timericon.png",
//   "/icons/maskable_timericon.png",

//   "/img/liga/404.png",
//   "/img/liga/BL1.png",
//   "/img/liga/BSA.png",
//   "/img/liga/CL.png",
//   "/img/liga/DED.png",
//   "/img/liga/EC.png",
//   "/img/liga/ELC.png",
//   "/img/liga/FL1.png",
//   "/img/liga/PD.png",
//   "/img/liga/PL.png",
//   "/img/liga/PPL.png",
//   "/img/liga/SA.png",
//   "/img/liga/WC.png",

//   "/js/idb/lib/idb.js",
//   "/js/api.js",
//   "/js/cek_sw.js",
//   "/js/firebase.js",
//   "/js/getCompetitions.js",
//   "/js/getLastMatch.js",
//   "/js/getNextMatch.js",
//   "/js/getSavedTeam.js",
//   "/js/getStandings.js",
//   "/js/getTeam.js",
//   "/js/materialize.min.js",
//   "/js/osf_db.js",
//   "/js/script.js",

//   "/pages/home.html",
//   "/pages/saved.html",
// ];

// self.addEventListener("install", function (event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   var base_url = "https://api.football-data.org/v2/";

//   if (event.request.url.indexOf(base_url) > -1) {
//     event.respondWith(
//       caches.open(CACHE_NAME).then(function (cache) {
//         return fetch(event.request).then(function (response) {
//           cache.put(event.request.url, response.clone());
//           return response;
//         });
//       })
//     );
//   } else {
//     event.respondWith(
//       caches
//         .match(event.request, { ignoreSearch: true })
//         .then(function (response) {
//           return response || fetch(event.request);
//         })
//     );
//   }
// });

// self.addEventListener("activate", function (event) {
//   event.waitUntil(
//     caches.keys().then(function (cacheNames) {
//       return Promise.all(
//         cacheNames.map(function (cacheName) {
//           if (cacheName != CACHE_NAME) {
//             console.log("ServiceWorker: cache " + cacheName + " dihapus");
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

self.addEventListener("push", function (event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = "Push message no payload";
  }
  var options = {
    body: body,
    icon: "https://khasyah-fr.github.io/onestopfootball-pwa/img/timericon.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  if (!event.action) {
    console.log("Notification Clicked.");
    return;
  }
  switch (event.action) {
    case "yes-action":
      console.log("Pengguna memilih action yes.");
      clients.openWindow("https://khasyah-fr.github.io/onestopfootball-pwa/#saved");
      break;
    case "no-action":
      console.log("Pengguna memilih action no");
      break;
    default:
      console.log(`Action yang dipilih tidak dikenal: '${event.action}'`);
      break;
  }
});
