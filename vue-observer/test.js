import { Observe } from './index';

const data = { a: 1, b: 2 };
const subscribe = () => {
  console.log(data.a * data.b);
};

const observe = new Observe(data);
observe.subscribe(subscribe);

observe.data.a = 10;
