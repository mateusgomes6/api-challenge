const Order = require("../models/order.model");

function mapInputToDB(data) {
  return {
    orderId: data.numeroPedido.replace("-01", ""),
    value: data.valorTotal,
    creationDate: new Date(data.dataCriacao),
    items: data.items.map(i => ({
      productId: Number(i.idItem),
      quantity: i.quantidadeItem,
      price: i.valorItem
    }))
  };
}