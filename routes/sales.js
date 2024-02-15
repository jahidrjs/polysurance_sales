var express = require("express");
var router = express.Router();
const {
  calculateTotalDiscountAmount,
  calculateAverageDiscount,
  calculateTotalSalesAfterDiscount,
  calculateTotalSalesBeforeDiscount,
} = require("../service/salesinfo");

router.get("/", (req, res) => {
  const totalSalesBeforeDiscount = calculateTotalSalesBeforeDiscount();
  const totalSalesAfterDiscount = calculateTotalSalesAfterDiscount();
  const totalDiscountAmount = calculateTotalDiscountAmount();
  const averageDiscount = calculateAverageDiscount();

  res.json({
    totalSalesBeforeDiscount,
    totalSalesAfterDiscount,
    totalDiscountAmount,
    averageDiscount,
  });
});

module.exports = router;
