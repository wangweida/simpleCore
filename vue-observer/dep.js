class Dep {
  constructor() {
    this.subs = [];
  }

  depend() {
    if (Dep.target && !this.subs.includes(Dep.target)) {
      this.subs.push(Dep.target);
    }
  }

  notify() {
    this.subs.forEach(sub => sub());
  }
}

Dep.target = null;

export default Dep;
