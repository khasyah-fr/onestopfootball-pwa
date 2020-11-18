var db = firebase.firestore();

if (!("serviceWorker" in navigator)) {
  console.log("Service worker tidak didukung browser ini.");
} else {
  registerServiceWorker();
  requestPermission();
}

function registerServiceWorker() {
  return navigator.serviceWorker
    .register("https://khasyah-fr.github.io/onestopfootball-pwa/service-worker.js", { scope: '../onestopfootball-pwa/' })
    .then(function (registration) {
      console.log("Registrasi service worker berhasil.");
      return registration;
    })
    .catch(function (err) {
      console.error("Registrasi service worker gagal.", err);
    });
}

function requestPermission() {
  if ("Notification" in window) {
    Notification.requestPermission().then(function (result) {
      if (result === "denied") {
        console.log("Fitur notifikasi tidak diizinkan.");
        return;
      } else if (result === "default") {
        console.error("User menutup kotak dialog permintaan izin.");
        return;
      }

      if ("PushManager" in window) {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.pushManager
            .subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(
                "BCGc05u-TODlqmXT2AvMZ4ZIbfsq-XYELo275pZa7oODw6TjIrSEry-GZIb7PDttg-K8Dp9whob_357S0uF4pG8"
              ),
            })
            .then(function (subscribe) {
              console.log(
                "Berhasil melakukan subscribe dengan endpoint: ",
                subscribe.endpoint
              );
              console.log(
                "Berhasil melakukan subscribe dengan p256dh key: ",
                btoa(
                  String.fromCharCode.apply(
                    null,
                    new Uint8Array(subscribe.getKey("p256dh"))
                  )
                )
              );
              console.log(
                "Berhasil melakukan subscribe dengan auth key: ",
                btoa(
                  String.fromCharCode.apply(
                    null,
                    new Uint8Array(subscribe.getKey("auth"))
                  )
                )
              );

              const p256dh = btoa(
                String.fromCharCode.apply(
                  null,
                  new Uint8Array(subscribe.getKey("p256dh"))
                )
              );
              const auth = btoa(
                String.fromCharCode.apply(
                  null,
                  new Uint8Array(subscribe.getKey("auth"))
                )
              );

              db.collection("push-notif")
                .doc(auth)
                .set({
                  endpoint: subscribe.endpoint,
                  p256dh: p256dh,
                  auth: auth,
                })
                .then(function () {
                  console.log("Document successfully written!");
                })
                .catch(function (error) {
                  console.error("Error writing document: ", error);
                });
            })
            .catch(function (e) {
              console.error("Tidak dapat melakukan subscribe ", e.message);
            });
        });
      }
    });
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// "publicKey":"BCGc05u-TODlqmXT2AvMZ4ZIbfsq-XYELo275pZa7oODw6TjIrSEry-GZIb7PDttg-K8Dp9whob_357S0uF4pG8",
// "privateKey":"b31Vv8WSHKQopofUjBHszzsHwjcMotf6btYxpWaOQwg"
