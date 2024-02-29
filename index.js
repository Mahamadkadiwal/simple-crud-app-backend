const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.models');
const productRoute = require('./routes/product.route');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) =>{
    res.send("hello from node api server api")
})





mongoose.connect("mongodb+srv://admin123:cf9sDnBeYZuAJ1vP@backenddb.hlt5e4z.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDb")
.then(() =>{
    console.log("connected to database");
    app.listen(3000, () =>{
        console.log("server is running on port 3000");
    })
    
})
.catch(() =>{
    console.log("error")
})
