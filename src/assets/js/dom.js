export function addClass(el, className) {
  // classList属性返回元素的类名，作为DomTokenList对象， https://www.runoob.com/jsref/prop-element-classlist.html
  if (!el.classList.contains(className)) {
    el.classList.add(className);
  }
}

export function removeClass(el, className) {
  el.classList.remove(className);
}
