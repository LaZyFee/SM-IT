import { TransactionModel } from "../Models/TransactionSchema.js";

export const CalculateMoney = async (req, res) => {
    const { amount, keyword } = req.body;

    if (!amount || !keyword) {
        return res.status(400).json("Amount and keyword are required");
    }

    try {
        // Get the most recent transaction to fetch current total
        const lastTransaction = await TransactionModel.findOne().sort({ _id: -1 });

        // Start from default 5000 if no transaction yet
        let currentTotal = lastTransaction ? lastTransaction.total : 5000;

        if (keyword === "withdraw") {
            if (amount <= 0) {
                return res.status(400).json("Invalid withdraw amount");
            }

            const newBalance = currentTotal - amount;

            if (newBalance < 1000) {
                return res.status(400).json("Withdrawal would reduce balance below 1000");
            }

            const newTransaction = await TransactionModel.create({
                amount,
                keyword,
                total: newBalance
            });

            return res.status(200).json({
                message: "Withdrawal successful",
                remaining: newTransaction.total
            });
        }

        // Optional: Handle "deposit"
        if (keyword === "deposit") {
            const newBalance = currentTotal + amount;

            const newTransaction = await TransactionModel.create({
                amount,
                keyword,
                total: newBalance
            });

            return res.status(200).json({
                message: "Deposit successful",
                newTotal: newTransaction.total
            });
        }

        return res.status(400).json("Invalid keyword");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Server error");
    }
};
