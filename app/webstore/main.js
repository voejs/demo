import { ChildVuex } from 'super-vuex';
const child = new ChildVuex('main');
export default child;
child.setState({
  nav: [
    {
      icon: 'speedometer',
      name: '监控大盘',
      link: '/'
    },
    {
      icon: 'compose',
      name: '表单页',
      child: [
        {
          icon: 'flash',
          name: '基础表单',
          link: '/edit'
        },
        {
          icon: 'wand',
          name: '分布表单',
          link: '/edit'
        },
        {
          icon: 'mic-a',
          name: '高级表单',
          link: '/edit'
        }
      ]
    }
  ]
});