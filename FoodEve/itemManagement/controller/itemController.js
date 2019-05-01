const itemService = require('./../services/itemServices');
const response = require('../../routes/responses');

exports.addItem = addItem;
exports.showItem = showItem;
exports.deleteItem=deleteItem;
exports.editItem=editItem;

async function addItem(req,res){
  let itemDetail = {};
  itemDetail.item_name = req.body.item_name?req.body.item_name:0;
  itemDetail.item_amount = req.body.item_amount?req.body.item_amount:0;
  itemDetail.item_status = req.body.item_status?req.body.item_status:0;
  itemDetail.item_description = req.body.item_description?req.body.item_description:0;
  let checkItem=await itemService.itemExists(itemDetail.item_name);
  if(checkItem){
    return response.sendResponse(res, "item Already Exist")
  }
  let result=await itemService.addItem(itemDetail);
  if(result)
    return response.actionCompleteResponse(res,"ITEM ADDED")
  else
    return response.sendError(res,"FAILED TO ADD")
}

async function showItem(req,res){
  let result=await itemService.showItem();
  return response.actionCompleteResponse(res,result,"Item list")
}

async function deleteItem(req,res){
  let itemDetail={};
  itemDetail.item_id=req.body.item_id?req.body.item_id:-1;
  let result=await itemService.deleteItem(itemDetail);
  if(result)
    return response.actionCompleteResponse(res,result,"Item deleted")
}

function editItem(req,res){
  let itemDetail = {};
  itemDetail.item_id = req.body.item_id?req.body.item_id:0;
  itemDetail.item_name = req.body.item_name?req.body.item_name:0;
  itemDetail.item_amount = req.body.item_amount?req.body.item_amount:0;
  itemDetail.item_status = req.body.item_status?req.body.item_status:0;
  itemDetail.item_description = req.body.item_description?req.body.item_description:0;
  let result=itemService.editItem(itemDetail);
  if(result)
    return response.actionCompleteResponse(res,"Updated Successfully")
}