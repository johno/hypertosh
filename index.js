'use strict'

module.exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor: '#fff',
  borderColor: 'transparent',
  foregroundColor: '#444',
  cursorColor: '#444',

  css: `
    ${config.css || ''}

    .header_header {
      left: 0;
      right: 0;
      border-bottom: 3px solid #444;
    }

    .tabs_list {
      border-color: #444 !important;
    }

    .tabs_title, .tab_textInner {
      background-color: #fff !important;
      color: #444 !important;
      display: inline-block;
      padding: 0 10px !important;
      position: relative !important;
      font-family: Silom, monospace;
      font-size: 14px;
    }

    .tab_tab, .tab_active {
      background-color: transparent !important;
      border-bottom-width: 0 !important;
    }

    .tab_tab .tab_textInner {
      color: #888 !important;
      background-color: #fafafa !important;
    }

    .tab_tab {
      opacity: .9 !important;
    }

    .tab_active {
      opacity: 1 !important;
      border-color: red;
    }

    .tab_active .tab_textInner {
      color: #444 !important;
      background-color: #fff !important;
    }

    .tabs_nav {
      background: linear-gradient(rgb(34, 34, 34), rgb(34, 34, 34) 50%, rgb(255, 255, 255) 50%, rgb(255, 255, 255)) 0% 0% / 0.35rem 0.35rem !important;
      margin: 6px 6px 6px !important;
      text-align: center !important;
    }
  `
})
