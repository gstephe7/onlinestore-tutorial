const mongoose = require('mongoose');

var Schema = mongoose.Schema,
      model = mongoose.model.bind(mongoose),
      ObjectId = mongoose.Schema.Types.ObjectId;

var productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  manufacturer: { type: ObjectId, ref: 'Manufacturer' }
});

var manufacturerSchema = Schema({
  id: ObjectId,
  name: String
})

var Product = mongoose.model('Product', productSchema);
var Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);

module.exports = {Product, Manufacturer};
