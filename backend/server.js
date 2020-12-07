import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

const app = express();
app.use(express.json());

dotenv.config();

connectDB();

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

//404 Errors

app.use(notFound);

//Custom Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (!err) {
    console.log(
      `Server is running at ${process.env.PORT} in ${process.env.NODE_ENV} mode`
        .yellow.bold
    );
  }
});
