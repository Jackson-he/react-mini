function render(root, container) {
  if (typeof root === 'function') {
    const rootElement = new root().render();
    container.appendChild(mount(rootElement));
  }
}

function mount(element) {
  if (typeof element === "string") {
    return element;
  }

  const { type } = element;
  // 自定义组件
  if (typeof type === 'function') {
    return mountComposite(element);
  } else { // 宿主元素
    return mountHost(element);
  }
}

function mountComposite(element) {
  const { type, props } = element;
  // 是否是class 组件
  if (isClass(type)) {
    const instance = new type();
    const renderContent = instance.createElement();
    return mountHost(renderContent);
  } else { // 函数组件

  }
}

function isClass(type) {
  // 类组件会有这个标识位
  return (
    Boolean(type.prototype) &&
    Boolean(type.prototype.isReactComponent)
  );
}

function mountHost(element) {
  if (typeof element === "string") {
    return element;
  }

  const { type, props, children } = element;

  const node = document.createElement(type);

  if (props !== null) {
    for (const attr in props) {
      node.setAttribute(attr, props[attr]);
    }
  }

  // 递归得到子元素
  const childNode = mount(children);

  if (typeof childNode === "string") {
    node.innerText = childNode;
    return node;
  } else {
    return node.appendChild(childNode);
  }
}


const ReactDom = {};

ReactDom.render = render;

export default ReactDom;

export {
  render,
}