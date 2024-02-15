var express = require("express");
const discounts = require("../demo_data/discounts.json");
const orders = require("../demo_data/orders.json");
const products = require("../demo_data/products.json");

// Calculate Total sales before discount
const calculateTotalSalesBeforeDiscount = () => {
  let totalSales = 0;
  orders.forEach((order) => {
    order.items.forEach((item) => {
      const product = products.find((p) => p.sku === item.sku);
      if (product) {
        totalSales += product.price * item.quantity;
      }
    });
  });
  return totalSales;
};

// Calculate Total sales after discount
const calculateTotalSalesAfterDiscount = () => {
  let totalSales = calculateTotalSalesBeforeDiscount();
  orders.forEach((order) => {
    const discount = discounts.find((d) => d.key === order.discount);
    if (discount) {
      totalSales -= totalSales * discount.value;
    }
  });
  return totalSales;
};

// Calculate Total amount of money lost via Discount Codes
const calculateTotalDiscountAmount = () => {
  let totalDiscount = 0;
  orders.forEach((order) => {
    const discount = discounts.find((d) => d.key === order.discount);
    if (discount) {
      order.items.forEach((item) => {
        const product = products.find((p) => p.sku === item.sku);
        if (product) {
          totalDiscount += product.price * item.quantity * discount.value;
        }
      });
    }
  });
  return totalDiscount;
};

// Calculate average discount per customer for the day as a percentage
const calculateAverageDiscount = () => {
  let totalDiscount = calculateTotalDiscountAmount();
  let totalSalesBeforeDiscount = calculateTotalSalesBeforeDiscount();
  return (totalDiscount / totalSalesBeforeDiscount) * 100;
};

module.exports = {
  calculateAverageDiscount,
  calculateTotalDiscountAmount,
  calculateTotalSalesAfterDiscount,
  calculateTotalSalesBeforeDiscount,
};
