module.exports = function compose(s) {
   const parts = []

   // z index
   parts.push(`z-index:${s.z || 0}`)

   // color
   parts.push(`color:${s.color || '#000000'}`)

   // transform
   const tParts = [
      `translate(${s.transform.translate.x || 0},${
         s.transform.translate.y || 0
      })`,
      `rotate(${s.transform.rotate || 0}rad)`,
      `scaleX(${s.transform.scaleX || 1})`,
      `scaleY(${s.transform.scaleY || 1})`,
   ]
   parts.push(`transform: ${tParts.join(' ')}`)

   // width height left top
   parts.push(isNaN(s.width) ? 'width:auto' : `width:${s.width}%`)
   parts.push(isNaN(s.height) ? 'height:auto' : `height:${s.height}%`)
   parts.push(`left:${s.left}%`)
   parts.push(`top:${s.top}%`)

   // opacity
   parts.push(`opacity:${isNaN(s.opacity) ? 1 : s.opacity}`)

   // font props
   parts.push(`font-weight: ${s?.font?.weight || 'normal'}`)
   parts.push(`font-style: ${s?.font?.style || 'normal'}`)
   parts.push(`font-size: ${s?.font?.size || 16}px`)
   parts.push(`font-family: ${s?.font?.family || 'sans-serif'}`)
   parts.push(`text-align: ${s?.font?.align || 'left'}`)
   parts.push(`text-decoration: ${s?.font?.decoration || 'none'}`)

   // background image
   if (s?.background?.image)
      parts.push(`background-image: url(${s.background.image})`)

   // background color
   if (s?.background?.color)
      parts.push(`background-color: ${s.background.color}`)

   return parts.join(';')
}
