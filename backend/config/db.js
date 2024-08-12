import mongoose from "mongoose";

export const connectDB = async()=>{
    mongoose.connect('mongodb+srv://greatstack:pksingh@cluster0.7pupm5a.mongodb.net/food-del')
  .then(() => console.log('DB Connected as '))
  .catch(err => console.error('DB Connection Error:', err));

}


