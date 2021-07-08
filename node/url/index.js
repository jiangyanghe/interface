// 获取URL 参数
const { URL } = require('url'); // URL 是类
const intUrl = 'https://m.trustlife.com/iacweb/productInfo/1040420990053646336/BT201906965972?extend=20255_260001590__10000307738_10001_5d995acab709438ca8a691b28339606e_';

const myurl = new URL(intUrl);
console.log(myurl.pathname); // /iacweb/productInfo/1040420990053646336/BT201906965972
console.log(myurl.search); // ?extend=20255_260001590__10000307738_10001_5d995acab709438ca8a691b28339606e_
console.log(myurl.searchParams.get('extend')) // 20255_260001590__10000307738_10001_5d995acab709438ca8a691b28339606e_
