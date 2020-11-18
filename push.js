var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BCGc05u-TODlqmXT2AvMZ4ZIbfsq-XYELo275pZa7oODw6TjIrSEry-GZIb7PDttg-K8Dp9whob_357S0uF4pG8",
   "privateKey": "b31Vv8WSHKQopofUjBHszzsHwjcMotf6btYxpWaOQwg"
};
 
webPush.setVapidDetails(
   'mailto:dicoding@dicodingacademy.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cqtAlJ--ILE:APA91bErdpZ4lxb9-2pNtQDpq5Z4PHYl9IDLGfO3i2aQarDiYFduQTC65KcrTBMivKpG0C_vilrsKiJfMjHe6PqaVtZKX2yY9k3AqENzJcSlvlzly-fDa70UEr6K_Jao0fIg1o6LoHy9",
   "keys": {
       "p256dh": "BMD2MOUa3ru5u0hh5JL47NK+4bFBaN9gopUgGu5jq+wQO34YjO/pZ7HRCdQVHBcWZIsrhDpyPfOItI2SdC4npMI=",
       "auth": "46tdxR3BlNfh6Ja4UYMtdQ=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '1001283164705',
   TTL: 60
};

webPush.sendNotification(
   pushSubscription,
   payload,
   options
);