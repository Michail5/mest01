export default  class Sectuion{
    constructor({ items, renderer }) {
        this._initialArray = items;
        this._renderer = renderer;
      }
    
      rendererItems(items) {
        items.forEach((item) => {
          this._renderer(item);
        });
      }
    
      addItem(item) {
        this._element.prepend(item);
      }
    }