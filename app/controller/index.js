import Controller from '@voejs/voe/class';
export default class IndexController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  
  hello(ctx) {
    ctx.body = ctx.webview.testDist;
    ctx.props = {
      abc: this.service.testAbc.hello()
    }
  }
}