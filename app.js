const express = require('express');
const app = express ();

//const mongodb = require('mongodb');
//const { MongoClient } = mongodb;
// connection string 27017

const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017';

//app.use(express.json())

//create a function to connect the database

// async function connectToDB(str){
//     const client = new MongoClient(str, 
//         {useUnifiedTopology: true,
//         useNewUrlParser: true
//         }
//     );
//     try {
//         await client.connect();
//         return client.db()
//     }catch (error){
//         console.log(err)
//     }
        
// }

// connectToDB(connectionString)
//     .then(db=>{
//         console.log("database connected")
//         db.collection('geng').insertOne({
//             name:"Xyluz",
//             age:120,
//             netWorth: 120000000
//         })
//         .then(doc=>{
//             console.log({doc})
//         })
//     })
//     .catch(err=> {
//         console.log(err)
//     })

mongoose.connect(connectionString, {
    useUnifiedTopology:true,
    useNewUrlParser: true
}, (err) => {
    if (err){
        console.log({err})
    } else {
        console.log("DataBase Connected!")
    }
})

const gengSchema = new mongoose.Schema({
    name: String,
    age: Number,
    netWorth: Number,
    isCool: Boolean
});

const Geng = mongoose.model('Geng', gengSchema);

app.post('/gengs', function (req, res) {
    const book = req.body.geng;
    console.log({geng})
})
// Geng.create({
//     name: "KingBesh",
//     age: 10,
//     netWorth: 2000000,
//     isCool: false
// }, function (err, geng) {
//     if (err){
//         console.log({err})
//     } else {
//         console.log({newGeng: geng})
//     }
// }) 

// Geng.findById("609b13b6440672543c92dbd5", (err, geng)=>{
//     if (err) console.log(err)
//     else console.log ({geng})
// })
// Geng.findByIdAndUpdate ("609b13b6440672543c92dbd5", {name: "Boss Man Kylz"}, (err, geng) =>{
//     if (err) console.log(err);
//     else{
//         geng.save((err, done) => {
//             if(err) console.log(err)
//             else console.log ("geng updated")
//         })
//     }
// })

// schema  
app.listen(4000, function(){
    console.log('app connceted')
});