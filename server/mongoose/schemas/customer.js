const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
});

// customers

const Customer = mongoose.model("Customer", customerSchema); // 대문자 사용. Customer와 customerSchema연결

module.exports = Customer;
