const ImageView = require('./ImageView')
const TextView = require('./TextView')

module.exports = function create(viewer, style, props, type) {
   if (type === 'image') return new ImageView(viewer, style, props)
   if (type === 'text') return new TextView(viewer, style, props)
}
