// default config
module.exports = {
  default_module: 'api',
  weixin: {
    appid: 'wxb358ead2203f34a8', // 小程序 appid
    secret: 'ad3ed9f987341584d3e670fb969d2b6e', // 小程序密钥
    mch_id: '1518257781', // 商户帐号ID
    partner_key: 'litingtingzhenmeilitingtingzhenm', // 微信支付密钥
    notify_url: 'https://zjadada.cn/api/pay/notify' // 微信异步通知，
    //mch_id: '', // 商户帐号ID
    //partner_key: '', // 微信支付密钥
    //notify_url: '' // 微信异步通知，例：https://www.nideshop.com/api/pay/notify
  },
  express: {
    // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    appid: 'test1382741', // 对应快递鸟用户后台 用户ID
    appkey: 'b62b24ff-4728-4d5d-803d-a11f84c73b8e', // 对应快递鸟用户后台 API key
    request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
    // appid: '', // 对应快递鸟用户后台 用户ID
    //appkey: '', // 对应快递鸟用户后台 API key
    // request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
  }
};
