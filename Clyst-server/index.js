const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');


//application
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fovwt3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    //data collection
    const clystDataCollection = client.db('clyst').collection('clystDb');

    //post data to db
    app.post('/api/data', async (req, res)=>{
    const data = req.body;
    
    try{
      const result = await clystDataCollection.insertOne(data);
      res.status(200).json({
        success: true,
        message: "Data created db successfully",
        data: result
      })
    }catch(err){
      res.status(500).json({
        success: false,
        message: 'Failed to create dat into db',
        error: err
      })
    }
    //get data form db

    app.get('/api/data', async(req, res)=>{
      try {
        const result = await client.db('clyst').collection('clystDb').find().toArray();
        console.log('kire',result);
        res.status(200).json({
          success: true,
          message: 'Data get successfully',
          data: result,
        })
      } catch (err) {
        res.status(500).json({
          success: false,
          message: 'failed to getting data from db',
          error: err || "Something went wrong",
        })
      }
    })

      console.log(data);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


//home
app.get('/', (req, res)=>{
  res.send("App is running!");
})

app.listen(port, ()=>{
    console.log(`Hello world app is running on port: ${port} `);
})