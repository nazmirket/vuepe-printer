const ViewStyle = require('./ViewStyle')

module.exports = class View {
	// root element
	type
	root
	viewer

	props = {}

	//style
	style

	// constructor
	constructor(viewer, style, props, type) {
		this.viewer = viewer
		this.style = new ViewStyle(style)
		this.props = { ...props }
		this.type = type
	}

	// init function
	init() {
		this.root = this.create()
		const page = this.viewer.getPage()

		page.appendChild(this.root)

		this.reload()
	}

	// reload function
	reload() {
		this.root.style = this.style.toString()
	}

	// remove
	remove() {
		this.root.remove()
	}
}
