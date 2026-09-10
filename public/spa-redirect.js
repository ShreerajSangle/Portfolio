// Decodes the query-string path GitHub Pages' 404.html redirect encodes,
// restoring the real URL before React Router mounts. No-op on Vercel/local,
// where the router never needs this rewrite. Pattern:
// https://github.com/rafgraph/spa-github-pages
(function (l) {
  if (l.search[1] === "/") {
    var decoded = l.search
      .slice(1)
      .split("&")
      .map(function (s) {
        return s.replace(/~and~/g, "&");
      })
      .join("?");
    window.history.replaceState(null, "", l.pathname.slice(0, -1) + decoded + l.hash);
  }
})(window.location);
