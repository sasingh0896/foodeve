const cartValidator=require('./validator/cartValidator');
const cartController=require('./controller/cartController');


app.post('/calculateTotalAmount',cartValidator.addToCartValidator,cartController.calculateTotalAmount);
app.post('/editCart',cartValidator.editCart,cartController.editCart);