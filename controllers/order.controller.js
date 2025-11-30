const service = require("../services/order.service");

module.exports = {
  async create(req, res) {
    try {
      const result = await service.createOrder(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async get(req, res) {
    try {
      const order = await service.getOrder(req.params.id);
      if (!order) return res.status(404).json({ error: "Pedido não encontrado" });

      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async list(req, res) {
    try {
      const orders = await service.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const updated = await service.updateOrder(req.params.id, req.body);
      if (!updated) return res.status(404).json({ error: "Pedido não encontrado" });

      res.json(updated);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      const deleted = await service.deleteOrder(req.params.id);
      if (!deleted) return res.status(404).json({ error: "Pedido não encontrado" });

      res.json({ message: "Pedido deletado" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
