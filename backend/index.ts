import express, { Request, Response } from 'express';
import cors from 'cors';

import { Product, CartItem } from './types';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const products: Product[] = [
  { id: '1', name: 'T-Shirt', price: 20 },
  { id: '2', name: 'Shoes', price: 50 },
  { id: '3', name: 'Cap', price: 10 },
];

// Health check endpoint (to verify the server is running)
app.get('/health', (req, res) => {
  res.status(200).json({ message: "Server is running!" });
});

// TODO: Implement API to return list of products. Same for POST /cart, GET /cart, DELETE /cart/:id


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});