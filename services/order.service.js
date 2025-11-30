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

module.exports = {
  createOrder: async (data) => {
    const mapped = mapInputToDB(data);
    return await Order.create(mapped);
  },

  getOrder: async (orderId) => {
    return await Order.findOne({ orderId });
  },

  getAllOrders: async () => {
    return await Order.find();
  },

  updateOrder: async (orderId, data) => {
    const mapped = mapInputToDB(data);
    return await Order.findOneAndUpdate({ orderId }, mapped, { new: true });
  },

  deleteOrder: async (orderId) => {
    return await Order.findOneAndDelete({ orderId });
  }
};