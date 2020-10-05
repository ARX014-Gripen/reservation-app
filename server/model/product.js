const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  //   author: ObjectId,
  coverImage: String,
  name: {type:String,required:true,max:[60,"最大60文字までです。"]},
  price: String,
  description: String,
  heding1: String,
  heding2: String,
  heding3: String,
  hedingtext1: String,
  hedingtext2: String,
  hedingtext3: String,
});

module.exports = mongoose.model('Product',ProductSchema)

// coverImage: './assets/img/phone-cover.jpg',
// name: 'Phone XL',
// price: 799,
// description: 'A large phone with one of the best screens',
// heding1:'サンプルテキスト1',
// heding2:'サンプルテキスト2',
// heding3:'サンプルテキスト3',
// hedingtext1:'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
// hedingtext2:'テキスト文章 テキスト文章 テキスト文章 テキスト文章',
// hedingtext3:'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
