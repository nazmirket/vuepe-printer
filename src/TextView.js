const View = require('./View')

module.exports = class TextView extends View {
   constructor(viewer, style, props) {
      super(viewer, style, props, 'text')
   }

   create() {
      const document = this.viewer.getDocument()
      const element = document.createElement('div')
      element.classList.add('pe-element', 'pe-is-element-text')

      const item = document.createElement('p')
      item.classList.add('pe-item')
      item.textContent = this.props.content

      element.appendChild(item)

      return element
   }
}
