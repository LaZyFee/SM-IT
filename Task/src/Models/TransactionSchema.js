import mongoose from "mongoose";

const TransactionSchema = mongoose.Schema({
    amount: {
        type: Number
    },
    keyword: {
        type: String,
        enum: ["withdraw", "deposit"]
    },
    total: {
        type: Number,
        default: 5000
    }
})

export const TransactionModel = mongoose.model("Transaction", TransactionSchema)