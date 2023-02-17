const View = require('./View')

module.exports = class ImageView extends View {
	constructor(viewer, style, props) {
		super(viewer, style, props, 'image')
	}

	create() {
		const document = this.viewer.getDcoument()
		const element = document.createElement('div')
		element.classList.add('pe-element', 'pe-is-element-image')

		const item = document.createElement('img')
		item.src = this.props.src
		item.classList.add('pe-item')

		element.appendChild(item)

		return element
	}
}
