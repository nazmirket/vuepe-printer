const Renderer = require('./src/Renderer')

const puppeteer = require('puppeteer')

const PuppeteerConfigs = require('./PuppeteerConfigs.json')

module.exports = class Printer {
   constructor(options) {
      // set chromium paths
      this.chromiumPaths = options.chromiumPaths
      // launch browser
      this.launch()
   }

   // LAUNCH BROWSER
   async launch() {
      for (const executablePath of this.chromiumPaths) {
         const launchOptions = {
            ...PuppeteerConfigs.launchConfigs,
            executablePath,
         }

         try {
            const browser = await puppeteer.launch(launchOptions)
            this.browser = browser
            return
         } catch (error) {}
      }
      throw Error('Chromium binary not found')
   }

   // TAKE SCREENSHOT
   async print(page) {
      while (!this.browser) await new Promise((r) => setTimeout(r, 200))

      const html = Renderer(page)
      const tab = await this.browser.newPage()

      await tab.setContent(html, { waitUntil: 'networkidle2' })
      await tab.focus('body')

      const image = await tab.screenshot({
         clip: { x: 0, y: 0, width: page.width, height: page.height },
      })

      return image
   }
}
