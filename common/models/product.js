module.exports = function(Product) {

Product.listProduct = function(cb) {
    Product.find({}, cb);
  };
Product.remoteMethod('listProduct', {
    returns: {arg: 'product', type: 'array'},
    http: {path:'/list-product', verb: 'get'}
  });

Product.findProductByID = function(cb) {
    Product.find({}, cb);
  };
Product.remoteMethod('findProductByID', {
    returns: {arg: 'product', type: 'array'},
    http: {path:'/list-product', verb: 'get'}
  });

};
