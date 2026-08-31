#!/usr/bin/env bash
# Rebuild the CV PDFs from their HTML sources in cv-src/.
#
# The HTML is the source of truth - edit that, never the PDF. Chrome's
# print-to-PDF is what produced the original cv.pdf, so keep using it or the
# typography will drift.
#
# Usage: scripts/build-cv.sh
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at: $CHROME" >&2
  exit 1
fi

for src in "$ROOT"/cv-src/*.html; do
  name="$(basename "$src" .html)"
  out="$ROOT/public/$name.pdf"

  "$CHROME" --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$out" "file://$src" 2>/dev/null

  pages="$(pdfinfo "$out" 2>/dev/null | awk '/^Pages:/{print $2}')"
  echo "$name.pdf  ->  ${pages:-?} page(s)"

  # A CV that spills onto a second page reads as unedited. Tighten the CSS
  # (font-size / line-height / section margins) rather than shipping it.
  if [ "${pages:-0}" -gt 1 ]; then
    echo "  WARNING: $name.pdf is longer than one page" >&2
  fi
done
