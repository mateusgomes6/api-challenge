const express = require("express");
const controller = require("../controllers/order.controller");

const router = express.Router();

router.post("/order", controller.create);
router.get("/order/:id", controller.get);
router.get("/order/list", controller.list);
router.put("/order/:id", controller.update);
router.delete("/order/:id", controller.remove);

module.exports = router;
