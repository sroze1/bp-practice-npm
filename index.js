"use strict";
// tinyduration: "1h30m" / "45s" → seconds (pipeline end-to-end fixture).

/** Seconds in a duration text such as "1h30m" or "45s"; null for a text that is not a duration. */
function seconds(text) {
  const m = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(String(text));
  if (!m) return null;
  return Number(m[1] || 0) * 3600 + Number(m[2] || 0) * 60 + Number(m[3] || 0);
}

module.exports = { seconds };
