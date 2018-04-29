/* @flow */

type ItemType = {
  image: {},
  icon: string,
  content: {} | string,
  text: string
}

export class Item {
  image: {}
  icon: string
  content: {} | string
  text: string

  constructor ({image, icon, content, text}: ItemType) {
    this.image = image
    this.icon = icon
    this.content = content
    this.text = text
  }

  hasComplexContent (): boolean {
    return typeof this.content !== 'string'
  }
}
