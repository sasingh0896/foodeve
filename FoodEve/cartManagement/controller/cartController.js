const cartService = require('./../services/cartService');
const response = require('../../routes/responses');

exports.calculateTotalAmount = calculateTotalAmount;
exports.editCart=editCart;


async function calculateTotalAmount(req,res) {
  let itemDetail = {};
  itemDetail.item_id = req.body.item_id;
  itemDetail.customer_name = req.body.customer_name;
  let totalAmount = await cartService.calculateTotalAmount(itemDetail.item_id);
  itemDetail.amount = totalAmount[0].amount;
  console.log(itemDetail)
  let result = await cartService.insertIntoCart(itemDetail)
  if (result)
    return response.actionCompleteResponse(res, itemDetail);
  else
    return response.sendError(res, "calculateTotalAmount")
}

async function editCart(req,res) {
  let itemDetail = {};
  itemDetail.item_id = req.body.item_id;
  itemDetail.customer_name = req.body.customer_name;
  let totalAmount = await cartService.calculateTotalAmount(itemDetail.item_id);
  itemDetail.amount = totalAmount[0].amount;
  console.log(itemDetail)
  let result = await cartService.updateCart(itemDetail)
  if (result)
    return response.actionCompleteResponse(res, itemDetail);
  else
    return response.sendError(res, "editCart")
}