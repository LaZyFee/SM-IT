import express from 'express'
import { CalculateMoney } from '../Controller/TransactionController.js'


const router = express.Router();

router.post("/withdraw", CalculateMoney)



export default router