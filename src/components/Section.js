
export default class Section {
  constructor({items, renderer}, selector) {
    this.renderedItems = items,
    this.renderer = renderer,
    this.container = document.querySelector(selector)
  }

  renderItems() {
    this.renderedItems.forEach(item => {
      this.renderer(item)
    });
  }

  addItem(el) {
    this.container.prepend(el);
  }
}
