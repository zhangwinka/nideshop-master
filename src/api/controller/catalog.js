const Base = require('./base.js');

module.exports = class extends Base {
  /**
   * 获取分类栏目数据
   * @returns {Promise.<Promise|void|PreventPromise>}
   */
  async indexAction() {
    // const categoryId = this.get('id');
    const model = this.model('category');
    const data = await model.where({is_show:['!=', 2] }).select();
    const dateindex = await model.where({is_show:['!=', 1]}).select();
    // let currentCategory = null;
    // if (categoryId) {
    //   currentCategory = await model.where({'id': categoryId}).find();
    // }
    //
    // if (think.isEmpty(currentCategory)) {
    //   currentCategory = data[0];
    // }
    //
    // // 获取子分类数据
    // if (currentCategory && currentCategory.id) {
    //   currentCategory.subCategoryList = await model.where({'parent_id': currentCategory.id}).select();
    // }

    return this.success({
      categoryList: data,
      currentCategory: data,
      categoryIndexList: dateindex
    });
  }

  async currentAction() {
    const categoryId = this.get('id');
    const model = this.model('category');

    let currentCategory = null;
    if (categoryId) {
      currentCategory = await model.where({'id': categoryId}).find();
    }
    // 获取子分类数据
    if (currentCategory && currentCategory.id) {
      currentCategory.subCategoryList = await model.where({'parent_id': currentCategory.id}).select();
    }

    return this.success({
      currentCategory: currentCategory
    });
  }
};
