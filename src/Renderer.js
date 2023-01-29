const Viewer = require('./Viewer')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const CSS = require('fs').readFileSync('./public/css/vuepe.css')
const Fonts = require('./Fonts')

const DefaultHTML = (w, h) => `
<html>
   <head>
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
      <script>
         WebFont.load({
            google: {
               families: [${Fonts.map((f) => `'${f}'`).join(',')}]
            }
         });
      </script> 
      <style>
         ${CSS}
      </style>
   </head>
   <body>
      <div class="pe-viewer pe-size-${w}x${h}">
         <div class="pe-page" />
      </div>
   </body>
</html>
`

function load(w, h) {
   const dom = new JSDOM(DefaultHTML(w, h))
   return dom.window
}

module.exports = function render(page) {
   const window = load(page.width, page.height)
   const root = window.document.querySelector('.pe-viewer')
   const viewer = new Viewer({ root, window })
   viewer.render(page.components, page.style)
   return window.document.documentElement.outerHTML
}
