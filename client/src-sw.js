const { offlineFallback, warmStrategyCache } = require("workbox-recipes");
const { CacheFirst } = require("workbox-strategies");
const { registerRoute } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

precacheAndRoute(self.__WB_MANIFEST);

// Implemented offline fallback
offlineFallback({
  pageFallback: "/offline.html", // Path to your offline fallback page
});

const pageCache = new CacheFirst({
  cacheName: "page-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === "navigate", pageCache);

registerRoute(
  ({ request }) => {
    return (
      // CSS
      request.destination === "style" ||
      // JavaScript
      request.destination === "script"
    );
  },
  new StaleWhileRevalidate({
    cacheName: "static-resources",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200], // Cache only successful responses
      }),
      new ExpirationPlugin({
        maxEntries: 60, // Limit the number of cached assets
        maxAgeSeconds: 30 * 24 * 60 * 60, // Cache assets for 30 days
      }),
    ],
  })
);

// Implemented asset caching
registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "my-image-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
).catch((error) => {
  console.error("Error fetching image:", error);
});
