export const CACHE_KEYS = {
  appShell: "spectralflow-app-shell",
  realtime: "spectralflow-realtime-cache",
  media: "spectralflow-media-cache",
};

export async function cacheApplicationShell(resources: string[]) {
  const cache = await caches.open(CACHE_KEYS.appShell);
  await cache.addAll(resources);
}

export async function clearRealtimeCache() {
  await caches.delete(CACHE_KEYS.realtime);
}
