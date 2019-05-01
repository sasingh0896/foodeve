const dbHandler       = require("../../database/mySqlLib");

exports.itemExists    = itemExists;
exports.addItem       = addItem;
exports.showItem      = showItem;
exports.deleteItem    = deleteItem;
exports.editItem  = editItem;
async function itemExists(item) {
  return new Promise(async (resolve,reject)=> {
    let query = "SELECT * FROM item WHERE item_name=?";
    let items = [];
    items.push(item);
    try {
      let result = await dbHandler.mysqlQueryPromise({
        module: "itemExists",
        api: "itemExists"
      }, "itemExists", query, items);
      if (result.length!=0)
        resolve( true);
      else
        resolve( false);
    } catch (error) {
      return true;
    }
  })
}

async function addItem(item) {
  return new Promise(async (resolve,reject)=> {
    let query = "INSERT INTO item(item_name,item_amount,item_status,item_desc) VALUES(?,?,?,?)";
    let items = [];
    items.push(item.item_name);
    items.push(item.item_amount);
    items.push(item.item_status);
    items.push(item.item_description);
    try {
      let result = await dbHandler.mysqlQueryPromise({module: "addItem", api: "addItem"}, "addItem", query, items);
      console.log(result)
      if (!result.affectedRows)
        resolve(false);
      else
        resolve(true);
    } catch (error) {
      resolve(true);
    }
  })
}

async function showItem() {
  return new Promise(async(resolve,reject)=> {
    let query = "SELECT * FROM item";
    let result = await dbHandler.mysqlQueryPromise({module: "showItem", api: "showItem"}, "showItem", query);
    return resolve(result);
  })
}

async function deleteItem(item) {
  return new Promise(async(resolve,reject)=> {
    let query = `DELETE FROM item WHERE item_id=${item.item_id}`;
    let result = await dbHandler.mysqlQueryPromise({module: "deleteItem", api: "deleteItem"}, "deleteItem", query);
    try {
      if (!result.affectedRows)
        resolve(false);
      else
        resolve(true);
    } catch (error) {
      return true;
    }
  })
}

async function editItem(item) {
  return new Promise(async(resolve,reject)=> {
    let query = `UPDATE item SET item_name="${item.item_name}",item_amount="${item.item_amount}",item_status="${item.item_status}",item_desc="${item.item_description}" WHERE item_id="${item.item_id}"`;
    let result = await dbHandler.mysqlQueryPromise({module: "itemExists", api: "itemExists"}, "itemExists", query);
    try {
      if (!result.affectedRows)
        resolve(false);
      else
        resolve(true);
    } catch (error) {
      return true;
    }
  })
}