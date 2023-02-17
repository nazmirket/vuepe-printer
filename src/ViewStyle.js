const StyleComposer = require('./StyleComposer')
const Style = require('./Style')

module.exports = class ViewStyle extends Style {
	constructor(props) {
		super(props)
	}

	toString() {
		return StyleComposer(this)
	}
}
