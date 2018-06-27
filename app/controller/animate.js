import Controller from '@voejs/voe/class';
export default class IndexController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  
  list(ctx) {
    ctx.body = ctx.webview.animate.list;
    ctx.props = {
      source: this.store.state.animate.list
    }
  }
}