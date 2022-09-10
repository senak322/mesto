
export default class Section {
  constructor({ renderer}, selector) {
    this.renderer = renderer,
    this.container = document.querySelector(selector)
  }

  // setItems(data) {
  //   this.renderedItems = data
  // }

  renderItems(data) {
    this.renderedItems = data
    this.renderedItems.reverse().forEach(item => {
      this.renderer(item)
    });
  }

  addItem(el) {
    this.container.prepend(el);
  }
}
