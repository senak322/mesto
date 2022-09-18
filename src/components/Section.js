
export default class Section {
  constructor({ renderer}, selector) {
    this.renderer = renderer,
    this.container = document.querySelector(selector)
  }

  renderItems(data) {
    data.reverse().forEach(item => {
      this.renderer(item)
    });
  }

  addItem(el) {
    this.container.prepend(el);
  }
}
