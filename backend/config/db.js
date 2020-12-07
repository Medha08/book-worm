import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`Error ${err.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
