module.exports = class PageStyle {
   background = {
      image: undefined,
      color: undefined,
   }

   constructor(p) {
      // background
      this.background.image = p?.background?.image
      this.background.color = p?.background?.color
   }

   setBackground({ image, color }) {
      this.background.image = image
      this.background.color = color
   }

   toString() {
      const parts = []
      // background image
      if (this?.background?.image)
         parts.push(`background-image: url(${this.background.image})`)

      // background color
      if (this?.background?.color)
         parts.push(`background-color: ${this.background.color}`)

      return parts.join(';')
   }

   toObject() {
      return {
         background: { ...this.background },
      }
   }
}
