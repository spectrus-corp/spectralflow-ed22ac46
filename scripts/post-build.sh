#!/bin/bash
# Post-build script to create a proper index.html with the correct asset references

set -e

CLIENT_DIR="dist/client"
ASSETS_DIR="$CLIENT_DIR/assets"

# Find the largest JS file (likely the main bundle)
MAIN_JS=$(ls -1hS "$ASSETS_DIR"/*.js 2>/dev/null | head -1 | xargs basename)

if [ -z "$MAIN_JS" ]; then
  echo "Error: No JS files found in $ASSETS_DIR"
  exit 1
fi

MAIN_JS_PATH="assets/$MAIN_JS"

# Generate index.html with correct asset reference
cat > "$CLIENT_DIR/index.html" << EOF
<!DOCTYPE html>
<html lang="fr" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="SpectralFlow : un réseau social immersif mêlant flux vidéo YouTube, chat temps réel et esthétique cyberpunk néon." />
    <meta name="theme-color" content="#060b1f" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta property="og:title" content="SpectralFlow" />
    <meta property="og:description" content="Le réseau social cyberpunk pour partager vidéos et idées." />
    <meta property="og:type" content="website" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <link rel="icon" type="image/svg+xml" href="/icon.svg" />
    <title>SpectralFlow — Réseau social cyberpunk</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/$MAIN_JS_PATH"></script>
  </body>
</html>
EOF

echo "Generated index.html with $MAIN_JS_PATH"
