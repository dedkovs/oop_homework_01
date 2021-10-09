// Design two objects, HtmlElement and HtmlSelectElement.
// HtmlElement has "click" instance method and "focus" prototype method.

// const e = new HtmlElement();
// e.click() and e.focus();

// Then, create "HtmlSelectElement" with items(optional), addItem, removeItem members.
// HtmlSelectElement needs to inherit "click" and "focus" methods.

class Focus {
  focus() {
    console.log('focus', this);
  }
}

class TsHtmlElement extends Focus {
  click() {
    console.log('click', this);
  }
}

const tsE = new TsHtmlElement();

console.log('%c\n*** TYPESCRIPT CLASSES ***\n', 'color: tomato');

tsE.click();
tsE.focus();

class TsHtmlSelectElement extends TsHtmlElement {
  items: any;

  constructor(items?: any) {
    super();

    if (!items) {
      this.items = [];
    } else if (Array.isArray(items)) {
      this.items = items;
    } else {
      this.items = [items];
    }
  }

  addItem(item: any) {
    this.items.push(item);
  }

  // 'removeItem' will not work with objects and NaN in array
  // more complex check is needed

  removeItem(item: any) {
    this.items = this.items.filter((el: any) => el !== item);
  }
}

const tsS1 = new TsHtmlSelectElement([1, 2, 3]);
const tsS2 = new TsHtmlSelectElement();

console.log(tsS1.items);
console.log(tsS2.items);

tsS2.addItem(4);
tsS2.addItem(5);
tsS2.addItem(6);

console.log(tsS2.items);

tsS2.removeItem(5);

console.log(tsS2.items);

tsS2.click();
tsS2.focus();

console.log({ TsHtmlElement });
console.log({ TsHtmlSelectElement });

console.log(TsHtmlElement.prototype.constructor === TsHtmlElement);
console.log(TsHtmlSelectElement.prototype.constructor === TsHtmlSelectElement);
