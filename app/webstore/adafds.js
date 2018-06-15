import { ChildVuex } from 'super-vuex';
const child = new ChildVuex('test');
export default child;
child.setState({
  test: {
    a: 1, b:2
  }
});