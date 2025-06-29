import mongoose from 'mongoose';

const connectTodb = async () => {
  try {
    console.log(process.env.MONGO_USER);
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER}@cluster0.s4xflam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log('Conectado a base de datos');
  } catch (error) {
    console.log(error);
  }
};

export default connectTodb;
