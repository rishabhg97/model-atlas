/* Kaizen — KUI icon set
   ----------------------
   Reconstructed from the Kaizen "common/" and "shapes/" icon symbols in
   the KUI v11 Figma library. All icons are 16×16, monochrome, with a
   consistent visual weight that matches the library.
   Usage:
     <i data-kui-icon="cog-fill"></i>
     KUI.hydrateIcons(document);  // replaces <i data-kui-icon> with SVG
   Or import the raw path strings (KUI.icons) and inline yourself.
*/
(function (global) {
  // Each path uses the 16×16 viewBox and currentColor for fills.
  const ICONS = {
    /* --- common (filled, ~14×14 inside 16×16) --- */
    "cog-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M6.5 1.5h3l.4 1.7a5 5 0 0 1 1.1.66l1.66-.55 1.5 2.6-1.25 1.2c.06.32.09.65.09.99s-.03.67-.09.99l1.25 1.2-1.5 2.6-1.66-.55a5 5 0 0 1-1.1.66L9.5 14.5h-3l-.4-1.7a5 5 0 0 1-1.1-.66l-1.66.55-1.5-2.6 1.25-1.2A5 5 0 0 1 3 8c0-.34.03-.67.09-.99L1.84 5.81l1.5-2.6 1.66.55a5 5 0 0 1 1.1-.66L6.5 1.5ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>',
    "info-circle-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm.75 3.5h-1.5v1.5h1.5V5Zm0 2.5h-1.5V12h1.5V7.5Z"/>',
    "check-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M14.354 4.354 6 12.707 1.646 8.354l.708-.708L6 11.293l7.646-7.647.708.708Z"/>',
    "check-circle-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm3.4 4.2L7.1 10 4.6 7.5l-.7.7 3.2 3.2 5-5-.7-.7Z"/>',
    "error-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM7.25 4v5h1.5V4h-1.5Zm0 6v1.5h1.5V10h-1.5Z"/>',
    "warning-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 1.5 14.928 13.5H1.072L8 1.5Zm-.75 4v4h1.5v-4h-1.5Zm0 5V12h1.5v-1.5h-1.5Z"/>',
    "close-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 7.293 12.646 2.646l.708.708L8.707 8l4.647 4.646-.708.708L8 8.707l-4.646 4.647-.708-.708L7.293 8 2.646 3.354l.708-.708L8 7.293Z"/>',
    "close-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM5.5 5l-.5.5L7.5 8 5 10.5l.5.5L8 8.5 10.5 11l.5-.5L8.5 8 11 5.5l-.5-.5L8 7.5 5.5 5Z"/>',
    "menu-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M2 3.5h12v1H2v-1Zm0 4h12v1H2v-1Zm0 4h12v1H2v-1Z"/>',
    "search-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M7 1.5a5.5 5.5 0 1 0 3.4 9.81l3.15 3.14.7-.7-3.14-3.15A5.5 5.5 0 0 0 7 1.5Zm0 1a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"/>',
    "bell-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 1.5a4 4 0 0 0-4 4v3l-1.5 2.5h11L12 8.5v-3a4 4 0 0 0-4-4Zm0 1a3 3 0 0 1 3 3v3.27L11.85 10H4.15L5 8.77V5.5a3 3 0 0 1 3-3ZM6.5 12.5a1.5 1.5 0 0 0 3 0h-3Z"/>',
    "home-line":
      '<path fill="currentColor" fill-rule="evenodd" d="m8 1.5 6.5 5.5h-2v6h-3v-4h-3v4h-3v-6h-2L8 1.5Zm0 1.31L4.5 6V12h1v-4h5v4h1V6L8 2.81Z"/>',
    "user-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 2.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 1a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.5 14a4.5 4.5 0 0 1 9 0h-1a3.5 3.5 0 0 0-7 0h-1Z"/>',
    "user-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 2.5a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5ZM12.5 14a4.5 4.5 0 0 0-9 0h9Z"/>',
    "clock-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM7.5 4v4.5h4v-1H8.5V4h-1Z"/>',
    "pencil-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="m11.293 1.793 2.914 2.914-9 9H2.293v-2.914l9-9Zm-1.207 2.621L3 11.5V13h1.5l7.086-7.086-1.5-1.5Z"/>',
    "plus-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M7.5 2h1v5.5H14v1H8.5V14h-1V8.5H2v-1h5.5V2Z"/>',
    "minus-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M2 7.5h12v1H2v-1Z"/>',
    "external-link":
      '<path fill="currentColor" fill-rule="evenodd" d="M9 2h5v5h-1V3.707L8.354 8.354l-.708-.708L12.293 3H9V2ZM3 4h4v1H4v7h7V9h1v4H3V4Z"/>',
    "more-horizontal":
      '<path fill="currentColor" fill-rule="evenodd" d="M3 8a1.25 1.25 0 1 1 2.5 0A1.25 1.25 0 0 1 3 8Zm3.75 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm3.75 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"/>',
    "download-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M7.5 2h1v6.293l2.146-2.147.708.708L8 10.207 4.646 6.854l.708-.708L7.5 8.293V2ZM3 12h10v1H3v-1Z"/>',
    "filter-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M2 3h12v1L9.5 9v4l-3-1.5V9L2 4V3Z"/>',
    "gpu-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M1.5 4h13v8h-13V4Zm1 1v6h11V5h-11Zm1.5 1h3v4H4V6Zm4 0h3v4H8V6Z"/>',
    "world-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 1c1.1 0 2.1.9 2.8 2.3-1.7.4-3.9.4-5.6 0C5.9 3.4 6.9 2.5 8 2.5Zm-4 4.6c.6.2 1.3.3 2 .4v1c-.7.1-1.4.2-2 .4-.1-.4-.2-.9-.2-1.4s.1-.9.2-1.4Zm6 0c.1.5.2.9.2 1.4 0 .5-.1 1-.2 1.4-.6-.2-1.3-.3-2-.4v-1c.7-.1 1.4-.2 2-.4Z"/>',
    /* --- shapes --- */
    "chevron-down-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M3.646 5.646 8 10l4.354-4.354.708.708L8 11.414 2.939 6.354l.707-.708Z"/>',
    "chevron-up-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M12.354 10.354 8 6l-4.354 4.354-.708-.708L8 4.586l5.061 5.061-.707.707Z"/>',
    "chevron-left-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M10.354 3.646 6 8l4.354 4.354-.708.708L4.586 8l5.061-5.061.707.707Z"/>',
    "chevron-right-line":
      '<path fill="currentColor" fill-rule="evenodd" d="M5.646 12.354 10 8 5.646 3.646l.708-.708L11.414 8l-5.061 5.061-.707-.707Z"/>',
    "chevron-down-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M3 5.5h10L8 11 3 5.5Z"/>',
    "chevron-right-fill":
      '<path fill="currentColor" fill-rule="evenodd" d="M5.5 3v10L11 8 5.5 3Z"/>',
  };

  function renderIcon(name, opts = {}) {
    const path = ICONS[name];
    if (!path) return "";
    const size = opts.size || 16;
    const cls = opts.class ? ` class="${opts.class}"` : "";
    const fill = opts.color ? ` style="color:${opts.color}"` : "";
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 16 16" aria-hidden="true"${cls}${fill}>${path}</svg>`;
  }

  function hydrateIcons(root = document) {
    root.querySelectorAll("[data-kui-icon]").forEach((el) => {
      const name = el.getAttribute("data-kui-icon");
      const size = el.getAttribute("data-size") || 16;
      const svg = renderIcon(name, { size });
      if (svg) el.innerHTML = svg;
    });
  }

  const api = { icons: ICONS, renderIcon, hydrateIcons };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  global.KUI = Object.assign(global.KUI || {}, api);
})(typeof window !== "undefined" ? window : globalThis);
