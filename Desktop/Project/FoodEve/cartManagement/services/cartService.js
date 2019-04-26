const dbHandler       = require("../../database/mySqlLib");

exports.calculateTotalAmount=calculateTotalAmount;
exports.insertIntoCart=insertIntoCart;
exports.updateCart=updateCart;

async function calculateTotalAmount(item) {
  return new Promise(async (resolve,reject)=> {
    let query = `SELECT SUM(item_available.item_amount) amount FROM (SELECT * FROM item WHERE item_status=1) as item_available WHERE item_available.item_id IN (${item})`;
    try {
      let result = await dbHandler.mysqlQueryPromise({
        module: "calculateTotalAmount",
        api: "calculateTotalAmount"
      }, "calculateTotalAmount", query);
      console.log(result);
      if (result.length!=0)
        resolve(result);
      else
        resolve( false);
    } catch (error) {
      return true;
    }
  })
}

async function insertIntoCart(item) {
  return new Promise(async (resolve,reject)=> {
    let items=[];
    items.push(item.item_id);
    items.push(item.amount);
    items.push(item.customer_name);
    let query = `INSERT INTO cart_management (item_id,cart_totalamount,customer_name) VALUES(?,?,?)`;
    try {
      let result = await dbHandler.mysqlQueryPromise({
        module: "insertIntoCart",
        api: "insertIntoCart"
      }, "insertIntoCart", query,items);
      if (result.affectedRows)
        resolve(true);
      else
        resolve( false);
    } catch (error) {
      return true;
    }
  })
}
async function updateCart(item) {
  return new Promise(async (resolve,reject)=> {
    let items=[];
    items.push(item.item_id);
    items.push(item.amount);
    items.push(item.customer_name);
    let query = `UPDATE cart_management SET item_id=? , cart_totalamount=? WHERE customer_name=?`;
    try {
      let result = await dbHandler.mysqlQueryPromise({
        module: "updateCart",
        api: "updateCart"
      }, "updateCart", query,items);
      if (result.affectedRows)
        resolve(true);
      else
        resolve( false);
    } catch (error) {
      return true;
    }
  })
}