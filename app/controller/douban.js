import Controller from '@voejs/voe/class';
export default class IndexController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  
  async index() {
    this.store.douban.commit('playing', false);
    if (this.store.state.douban.hot.songs.length === 0) {
      await this.service.douban.getList();
    }
  }
  
  async play(ctx) {
    const id = ctx.params.id;
    this.store.douban.commit('playing', true);
  }
}