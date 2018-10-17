import Dep from './dep';

function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

function reactive(obj) {
  Object.keys(obj).forEach(key => {
    let val = obj[key];
    const dep = new Dep();

    Object.defineProperty(obj, key, {
      get() {
        dep.depend();
        return val;
      },
      set(newVal) {
        val = newVal;
        dep.notify();
      },
    });

    if (isObject(val)) {
      // deep
      reactive(val);
    }
  });
}

export default reactive;
