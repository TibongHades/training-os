self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('training-os').then(cache =>
      cache.addAll(['/', '/index.html', '/manifest.json', '/icon.png'])
    )
  );
});
