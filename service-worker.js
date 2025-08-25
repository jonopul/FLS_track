const CACHE='srn-shell-v17'; // force reload after password purge + cache bust
const APP_SHELL=[
	'./',
	'./index.html',
	'./manifest.json',
	'./SRN_Parts_Database_Improved.html',
	'./app.html',
	'./icons/icon-192.png',
	'./icons/icon-512.png'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP_SHELL)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});

self.addEventListener('message',event=>{
	if(event.data && event.data.type==='SKIP_WAITING') self.skipWaiting();
});
