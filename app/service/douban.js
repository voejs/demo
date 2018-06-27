import Service from '@voejs/voe/class';

export default class DouBanService extends Service {
  constructor(ctx) {
    super(ctx);
  }
  
  async getList() {
    const res = await this.ctx.ajax.get('/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=60&offset=0');
    this.store.douban.push('hot.songs', ...res.song_list);
    this.store.douban.commit('hot.billboard', res.billboard);
  }
}