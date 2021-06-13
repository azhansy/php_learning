'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b020f6a8299ae297ca0738297697fa39",
"splash/img/light-2x.png": "a854074ae429d51378ca5bef6bcf5901",
"splash/img/light-3x.png": "749de01075c6b96a917510403054f24c",
"splash/img/dark-3x.png": "749de01075c6b96a917510403054f24c",
"splash/img/dark-2x.png": "a854074ae429d51378ca5bef6bcf5901",
"splash/img/dark-1x.png": "567713d005444fdbc48d6203327e40d7",
"splash/img/light-1x.png": "567713d005444fdbc48d6203327e40d7",
"splash/style.css": "86126e7e4072786170390b7ceee604b3",
"index.html": "6bc2d9f19f854d8f206a6f6886e4f971",
"/": "6bc2d9f19f854d8f206a6f6886e4f971",
"main.dart.js": "5ce94e931c19094c658b6963f7fe8713",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "4b3050b45d56a2a6906dce7070436078",
"icons/Icon-512.png": "9500ca6f742e863f8e6f64a1b85f7cab",
"manifest.json": "a9b9b6caf4e0dd5a99651681f6cb7f95",
"assets/AssetManifest.json": "195a1808a229c73bd01636352c17b7f1",
"assets/NOTICES": "a12055e63e99fc1c7fda0f1af35ba84f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/home/ic_filter.svg": "aee81ac748ed63e2a2a1b750f5b7f2ce",
"assets/assets/images/home/ic_next_step.svg": "e399222b2f88bbc928f1ac4f04be9bed",
"assets/assets/images/home/ic_cars.svg": "e64df719856177372620293b4f17f947",
"assets/assets/images/home/ic_input_clear.svg": "52a5fe370352fda97dc313024cca0395",
"assets/assets/images/home/ic_more_default.svg": "81d63f8aa7c63be74fe36f87fdc23e3e",
"assets/assets/images/home/ic_location.svg": "2bc64f6c5cfe53e3dbc0cdf73dc517c7",
"assets/assets/images/home/ic_home.svg": "8bc3bc53e33245010f998a664ff142b5",
"assets/assets/images/home/ic_home_default.svg": "44d03647c7f0de247f9a74596a37915b",
"assets/assets/images/home/ic_splash_bg.png": "9b68674052584d507af6f7e73ceb1322",
"assets/assets/images/home/ic_images.svg": "a0fc419940d39c642c0fc51beb1f0bca",
"assets/assets/images/home/ic_cars_default.svg": "2fa0fae693b7b308438ebaf6085dd3ae",
"assets/assets/images/home/ic_distance.svg": "97a1e70f956f06c3f2e754d6f18da0fd",
"assets/assets/images/home/ic_home_contacts.svg": "ffdb6c27992962227fabc427547e1880",
"assets/assets/images/home/ic_search.svg": "a881a01de4c38ad6492a193e0beb3cd1",
"assets/assets/images/home/ic_position.svg": "e5cc6bd9b54a4973352a5c357e89e7b4",
"assets/assets/images/home/ic_more.svg": "20cc160fdedb1a8b29973d11925ff182",
"assets/assets/images/home/ic_location_refresh.svg": "3ea1709a25d152f9480ce16ee0ef95f7",
"assets/assets/images/core/ic_index_bar_bubble_white.png": "3a428b9603817acb16fc3abcfade936f",
"assets/assets/images/common/ic_default_avatar.png": "5e3a58dd6c650b374a4b475aa2f050d5",
"assets/assets/images/common/ic_close.svg": "bc856c6b1daf70b8681977652a64b4db",
"assets/assets/images/common/ic_photos.svg": "9c739112f5c0a3f37cb6013e5d55b7da",
"assets/assets/images/common/logo.png": "0726c79363b049279c9002c08e83ba27",
"assets/assets/images/common/ic_back.svg": "0b9afd0585c61f3aff1b9d2f316d9b7d",
"assets/assets/images/common/icon_empty.svg": "6050ecf74c08a3fc040c6830b358d738",
"assets/assets/images/common/ic_default_logo.svg": "6050ecf74c08a3fc040c6830b358d738",
"assets/assets/images/common/logo.svg": "541e825a17a67441aabfd0c37faefb0b",
"assets/assets/images/common/ic_back_shadow.png": "941e7bea6907eb2ad244a3292321ec5a",
"assets/assets/images/login/ic_splash_bg.png": "9b68674052584d507af6f7e73ceb1322"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
