import mongoose from "mongoose";

//structer the order
const orderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    default: 1,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    orderItems: {
      type: [orderItemsSchema],
    },
    orderStatus: {
      type: String,
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    product_id: { type: String, required: true },
    address :{
        type:String,
        required:true,
        
    }
  },
  { timestamp: true }
);

export const Order = mongoose.model("Order", "orderSchema");
