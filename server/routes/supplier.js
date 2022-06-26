const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

router.get("/", async (req, res) => {
  const supplierList = await mysql.query("supplierList");
  res.send(supplierList);
});

// Detail정보 api
router.get("/:supplier_id", async (req, res) => {
  const { supplier_id } = req.params;
  const supplierDetail = await mysql.query("supplierDetail", supplier_id);
  res.send(supplierDetail[0]); // 배열로 가져오고 첫번째 한개
});

// 이름검색 api
router.post("/search", async (req, res) => {
  const supplierList = await mysql.query(
    "supplierListByCondition",
    req.body.param
  );
  res.send(supplierList);
});

// Supplier 생성 api
router.post("/", async (req, res) => { // app.js에 이미 라우터에 supplier가 붙어 있으니 여기서는 '/'만
  const result = await mysql.query("supplierInsert", req.body.param);
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


// supplier 삭제 api
router.delete("/:supplier_id", async (req, res) => {
  const { supplier_id } = req.params;
  const count = await mysql.query("productCountBySupplierId", supplier_id);
  if (count[0].count === 0) {
    const result = await mysql.query("supplierDelete", supplier_id);
    res.send(result);
  } else {
    res.send({ status: 501, count: count[0] });
  }
});

module.exports = router;
