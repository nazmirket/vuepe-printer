module.exports = class Style {
	z = 0
	left = 0
	top = 0
	width = 'auto'
	height = 'auto'
	opacity = 1
	color = '#000000'

	transform = {
		translate: { x: 0, y: 0 },
		rotate: 0,
		scaleX: 1,
		scaleY: 1,
	}

	font = {
		weight: 'normal',
		style: 'normal',
		size: 16,
		family: 'sans-serif',
		align: 'left',
		decoration: 'none',
	}

	background = {
		image: undefined,
		color: undefined,
	}

	constructor(p = {}) {
		this.z = isNaN(p?.z) ? 0 : p.z

		// position
		this.left = isNaN(p?.left) ? 0 : p.left
		this.top = isNaN(p?.top) ? 0 : p.top

		// size
		this.width = p?.width
		this.height = p?.height

		// opacity
		this.opacity = isNaN(p?.opacity) ? 1 : p.opacity

		// color
		this.color = p?.color || '#000000'

		// translate
		this.transform.translate.x = p?.transform?.translate?.x || 0
		this.transform.translate.y = p?.transform?.translate?.y || 0

		// rotate
		this.transform.rotate = p?.transform?.rotate || 0

		// horizantal flip
		this.transform.scaleX = p?.transform?.scaleX || 1
		this.transform.scaleY = p?.transform?.scaleY || 1

		// font props
		this.font.weight = p?.font?.weight || 'normal'
		this.font.style = p?.font?.style || 'normal'
		this.font.size = p?.font?.size || 16
		this.font.family = p?.font?.family || 'sans-serif'
		this.font.align = p?.font?.align || 'left'
		this.font.decoration = p?.font?.decoration || 'none'

		// background
		this.background.image = p?.background?.image
		this.background.color = p?.background?.color
	}

	setTransform(p) {
		this.transform = { ...this.transform, ...p }
	}

	setFont(p) {
		this.font = { ...this.font, ...p }
	}

	setSize(width, height) {
		this.width = width
		this.height = height
	}

	setOpacity(value) {
		this.opacity = value
	}

	setRotate(angle) {
		this.transform.rotate = angle
	}

	setPosition(left, top) {
		this.left = left
		this.top = top
	}

	setBackground({ image, color }) {
		this.background.image = image
		this.background.color = color
	}

	setZ(z) {
		this.z = z
	}

	copy(p) {
		this.z = isNaN(p?.z) ? 0 : p.z

		// position
		this.left = isNaN(p?.left) ? 0 : p.left
		this.top = isNaN(p?.top) ? 0 : p.top

		// size
		this.width = p?.width
		this.height = p?.height

		// translate
		this.transform.translate.x = p?.transform?.translate?.x || 0
		this.transform.translate.y = p?.transform?.translate?.y || 0

		// rotate
		this.transform.rotate = p?.transform?.rotate || 0
	}

	toObject() {
		return {
			z: this.z,
			left: this.left,
			top: this.top,
			width: this.width,
			height: this.height,
			opacity: this.opacity,
			transform: { ...this.transform },
			font: { ...this.font },
			background: { ...this.background },
		}
	}
}
