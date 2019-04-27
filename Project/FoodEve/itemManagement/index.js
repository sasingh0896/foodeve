//ADMIN

const itemController = require('./controller/itemController');
const itemValidator  = require('./validator/itemValidator');

app.post("/addItem",itemValidator.addItemValidator,itemController.addItem);
app.post("/showItem",itemController.showItem);
app.post("/editItem",itemValidator.editItemValidator,itemController.editItem);
app.post("/deleteItem",itemValidator.deleteItemValidator,itemController.deleteItem);