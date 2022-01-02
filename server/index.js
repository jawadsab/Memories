import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use("/posts",postRoutes);

const CONNECTION_URL = 'mongodb://localhost:27017/memories_db';
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(PORT,() => console.log("The server is running at port",PORT))
  })
  .catch((error) => {
    console.log(error.message);
  });

