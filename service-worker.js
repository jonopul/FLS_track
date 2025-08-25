const CACHE='srn-shell-v15'; // bump after removing password gate
const APP_SHELL=[
	'./',
	'./index.html',
	'./manifest.json',
	'./SRN_Parts_Database_Improved.html',
	'./icons/icon-192.png',
	'./icons/icon-512.png'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP_SHELL)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});
