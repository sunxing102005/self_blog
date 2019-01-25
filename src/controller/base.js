module.exports = class extends think.Controller {
  async __before() {
    // const config = think.model('config')
    //   .cache('config')
    //   .getList();
    const config = await think
      .model('config')
    //   .cache('config')
      .getList();
    this.assign('site', config.site);

    // if (this.userInfo) {
    const user = this.model('user')
      .cache('user')
    // .where({ id: this.userInfo.id })
      .find();
    this.assign('user', user);
    // }
    const recent = await this.getRecent();
    this.assign('recent', recent);
    this.assign('title', '');
  }
  async getRecent() {
    const content = await this.model('content')
      .where({ status: 99, type: 'post' })
      .cache('recent_content')
      .limit(5)
      .order('create_time desc')
      .fieldReverse('content,markdown')
      .select();
    const comment = await this.model('comment')
      .cache('recent_comment')
      .alias('comment')
      .join({
        table: 'content',
        joint: 'left',
        as: 'content',
        on: ['content_id', 'id']
      })
      .join({
        table: 'meta',
        join: 'left',
        as: 'category',
        on: ['content.category_id', 'id']
      })
      .where({ 'comment.status': 99 })
      .field(
        'comment.*,content.slug,content.category_id,category.slug as category'
      )
      .limit(5)
      .order('comment.create_time desc')
      .select();
    return { content, comment };
  }
};
