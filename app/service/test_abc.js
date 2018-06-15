import Service from '@voejs/voe/class';

export default class TestAbcService extends Service {
  constructor(ctx) {
    super(ctx);
    this.word = 'test evio - oo';
  }
  
  abc() {
    return this.word;
  }
  
  hello() {
    return this.abc();
  }
}