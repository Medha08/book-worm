import mongoose from 'mongoose';
import colors from 'colors';

import users from './fixtures/users.js';
import products from './fixtures/products.js';

import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';

import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);

    const admin = createdUsers[0];

    const productsToInsert = products.map((product) => {
      return { ...product, user: admin };
    });

    await Product.insertMany(productsToInsert);

    console.log('Imported Data'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log('Destroyed Data'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == '-d') {
  destroyData();
} else {
  importData();
}
