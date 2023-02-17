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
			} catch (error) {
				// ignore
			}
		}
		throw Error('Chromium binary not found')
	}

	// TAKE SCREENSHOT
	async print(page) {
		const width = page.width
		const height = page.height

		while (!this.browser) await new Promise(r => setTimeout(r, 200))

		const html = Renderer(page)
		const tab = await this.browser.newPage()

		await tab.setContent(html, { waitUntil: 'networkidle2' })

		const pdf = await tab.pdf({
			width: `${width}px`,
			height: `${height}px`,
			margin: { top: 0, right: 0, bottom: 0, left: 0 },
			omitBackground: true,
			printBackground: true,
			pageRanges: '1',
		})

		await tab.close()

		return pdf
	}
}
