const ViewFactory = require('./ViewFactory')
const PageStyle = require('./PageStyle')

module.exports = class Viewer {
	// views
	views = []

	constructor(opts) {
		// set window
		this.window = opts.window
		this.document = this.window.document

		// root
		this.root = opts.root
		this.page = this.root.querySelector('.pe-page')
	}

	// load function
	render(views = [], style) {
		this.views = []
		for (const data of views) {
			const { type, style, props } = data

			const view = ViewFactory(this, style, props, type)

			this.views.push(view)
			view.init()
		}

		// load style
		this.style = new PageStyle(style)
		this.page.style = this.style.toString()
	}

	// clear
	clear() {
		for (const v of this.views) v.remove()
		this.views = []
	}

	// get page
	getPage() {
		return this.page
	}

	// get window
	getWindow() {
		return this.window
	}

	// get document
	getDocument() {
		return this.document
	}
}
