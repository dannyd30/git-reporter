const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
const app = express();

const mongoClient = require("mongodb").MongoClient;
const connString = "mongodb+srv://test-user:citimongo@cluster0-nuzxw.mongodb.net/test?retryWrites=true&w=majority";




mongoClient.connect(connString, (err, client) => {
    if(!err){
        console.log('Successfully connected to DB');
        let db = client.db("employeeDB");
        db.collection("employee_collection", (err, collect) => {
            if(!err){
                collect.insertOne({"empId":101,"empName":"Pavi","salary":1000,"deptId":"D1"}, (err, data) => {
                    if(!err)
                        console.log('Inserted')
                   
        
                })

            }
        });
    } else {
        console.log(err);
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const port = 80;

app.use('/products', product);
app.listen(port, ()=>{
    console.log(`Server is up and running on ${port}`);
});

app.get('/', (req, res) => {
    res.write('GET');
});

app.post('/gitpush', (req, res) => {
    console.log('push')
    res.json({});
});