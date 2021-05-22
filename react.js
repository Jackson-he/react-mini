class React {
  constructor() {
    this.isReactComponent = true;
  }
  static createElement(type, config, children) {
    const props = {};

    if (config !== null) {
      for (const key in config) {
        props[key] = config[key];
      }
    }
    /** 返回元素：对组件实例或 DOM 节点的描述 */
    return {
      type,
      props,
      children,
    };
  }
}

export default React;