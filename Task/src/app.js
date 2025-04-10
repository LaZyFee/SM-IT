import { configDotenv } from "dotenv";
import express from 'express'
import TransactionRoute from "./Routes/TransactionRoutes.js"

const app = express()


configDotenv();

app.get("/", (req, res) => {
    res.send("Hello");
})
app.use(express.json());

app.use("/", TransactionRoute)

export default app