// product관련된 route를 모아서 관리함

const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

// app -> router로 수정, url에 /api/product 부분 삭제
router.get("/category", async (req, res) => {
  const categoryList = await mysql.query("categoryList");
  res.send(categoryList);
});

router.get("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const categoryList = await mysql.query("categoryDetail", product_category_id);
  res.send(categoryList);
});

router.post("/category", async (req, res) => {
  const result = await mysql.query("categoryInsert", req.body.param);
  res.send(result);
});

router.put("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query("categoryUpdate", [
    req.body.param,
    product_category_id,
  ]);
  res.send(result);
});

router.delete(
  "/api/product/category/:product_category_id",
  async (req, res) => {
    const { product_category_id } = req.params;
    const result = await mysql.query("categoryDelete", product_category_id);
    res.send(result);
  }
);

module.exports = router;
