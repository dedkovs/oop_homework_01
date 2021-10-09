// Design two objects, HtmlElement and HtmlSelectElement.
// HtmlElement has "click" instance method and "focus" prototype method.

// const e = new HtmlElement();
// e.click() and e.focus();

// Then, create "HtmlSelectElement" with items(optional), addItem, removeItem members.
// HtmlSelectElement needs to inherit "click" and "focus" methods.

function HtmlElement() {
  this.click = () => {
    console.log('click', this);
  };
}

HtmlElement.prototype.focus = function () {
  console.log('focus', this);
};

const e = new HtmlElement();

console.log('%c\n*** OBJECT CONSTRUCTOR FUNCTIONS ***\n', 'color: tomato');

e.click();
e.focus();

function HtmlSelectElement(items) {
  HtmlElement.call(this);

  if (!items) {
    this.items = [];
  } else if (Array.isArray(items)) {
    this.items = items;
  } else {
    this.items = [items];
  }

  this.addItem = (item) => {
    this.items.push(item);
  };

  // 'removeItem' will not work with objects and NaN in array
  // more complex check is needed

  this.removeItem = (item) => {
    this.items = this.items.filter((el) => el !== item);
  };
}

Object.setPrototypeOf(HtmlSelectElement.prototype, HtmlElement.prototype);

const s1 = new HtmlSelectElement([1, 2, 3]);
const s2 = new HtmlSelectElement();

console.log(s1.items);
console.log(s2.items);

s2.addItem(4);
s2.addItem(5);
s2.addItem(6);

console.log(s2.items);

s2.removeItem(5);

console.log(s2.items);

s2.click();
s2.focus();

console.log({ HtmlElement });
console.log({ HtmlSelectElement });

console.log(HtmlElement.prototype.constructor === HtmlElement);
console.log(HtmlSelectElement.prototype.constructor === HtmlSelectElement);
