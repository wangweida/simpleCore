import Dep from './dep';
import reactive from './reactive';

function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

class Observe {
  constructor(data) {
    this.data = data;
  }

  subscribe(fn) {
    reactive(this.data);
    Dep.target = fn;
    this.start(this.data);
  }

  // 强制触发get
  start(data) {
    Object.keys(data).forEach(key => {
      // deep
      if (isObject(data[key])) {
        this.start(data[key]);
      }
      return data[key];
    });
  }
}

export default Observe;
