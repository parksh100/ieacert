const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

router.get("/", async (req, res) => {
  const applierList = await mysql.query("applierList");
  res.send(applierList);
});

// 하나만 조회하기
router.get("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const categoryList = await mysql.query("categoryDetail", product_category_id);
  res.send(categoryList);
});

// post방식으로 조회
router.post("/category/search", async (req, res) => {
  const categoryList = await mysql.query(
    "categoryListByCondition",
    req.body.param
  );
  res.send(categoryList);
});

// 생성 api
router.post("/", async (req, res) => {
  const result = await mysql.query("applierInsert", req.body.param);
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

router.delete("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const count = await mysql.query("productCount", product_category_id);
  if (count[0].count === 0) {
    const result = await mysql.query("categoryDelete", product_category_id);
    res.send(result);
  } else {
    res.send({ status: 501, count: count[0] });
  }
});

// 제품등록 api
router.post("/", async (req, res) => {
  const result = await mysql.query("productInsert", req.body.param);
  res.send(result);
});

// 제품상세페이지 api
router.get("/:product_id", async (req, res) => {
  const productDetail = await mysql.query(
    "productDetail",
    req.params.product_id
  );
  res.send(productDetail[0]);
});

// 제품 리스트 블러오기 api
router.get("/", async (req, res) => {
  const productList = await mysql.query("productList");
  res.send(productList);
});

module.exports = router;
