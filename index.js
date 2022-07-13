const { MongoClient, ServerApiVersion } = require('mongodb');

const express = require('express')
const cors =require('cors');
const app = express();
require('dotenv').config();
const jwt= require('jsonwebtoken');
const port =process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());

//DB_USER=school-space-database
//DB_PASS=wM4zt3bN3Ja5FC5T

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.n3hxh.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async()=>{
    try{
        await client.connect();
        console.log('connected to db');
    }

    finally{

    }
}

run().catch(console.dir);
app.get('/',(req,res)=>{
    res.send('school space server is running');
});

app.listen(port,()=>{
    console.log('School space server is running at',port);
})

