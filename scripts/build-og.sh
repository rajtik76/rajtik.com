#!/usr/bin/env bash
# Rebuild public/og.png (the social card) from og-src/og.html.
#
# The HTML is the source of truth - edit that, never the PNG. Whenever the
# headline on the homepage changes, this card has to change with it, or link
# previews keep advertising the old positioning.
#
# Usage: scripts/build-og.sh
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT="$ROOT/public/og.png"

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at: $CHROME" >&2
  exit 1
fi

# virtual-time-budget gives the webfont time to land; without it the card
# renders in a fallback face and the layout shifts.
"$CHROME" --headless --disable-gpu --hide-scrollbars \
  --window-size=1200,630 --force-device-scale-factor=1 \
  --virtual-time-budget=5000 \
  --screenshot="$OUT" "file://$ROOT/og-src/og.html" 2>/dev/null

echo "og.png -> $(file -b "$OUT")"
