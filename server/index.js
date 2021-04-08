const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"helpevent",
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

// app.post('/application',(req,res) => {
//     const number = req.body.number
//     const email = req.body.email
//     const comment = req.body.comment
//     console.log(req.body.number);
//      const sqlInsert = "INSERT INTO application (`number`, `email`, `comment`) VALUES (?, ?, ?);"
//         db.query(sqlInsert,[number, email,comment], (err,result) => {
//         console.log(err);
//         res.send(result)
//         console.log(result);
//      })
// })
// app.get('/get/application',(req,res) => {
//     const sqlSelect = "SELECT * FROM `application` WHERE 1"
//     db.query(sqlSelect, (err,result) => {
//        res.send(result)
//        return result
//     })
   
// })
app.get('/login',(req,res) => {
    const sqlSelect = "SELECT * FROM `users` WHERE 1"
    db.query(sqlSelect, (err,result) => {
       res.send(result)
       return result
    })
   
})
app.post('/registration',(req,res) => {
    const login = req.body.login
    const password = req.body.password
    console.log(req.body.number);
     const sqlInsert = "INSERT INTO users (`login`, `password`) VALUES (?, ?);"
        db.query(sqlInsert,[login, password], (err,result) => {
        console.log(err);
        res.send(result)
        console.log(result);
     })
})
app.get('/events',(req,res) => {
    const sqlSelect = "SELECT * FROM `event` WHERE 1"
    db.query(sqlSelect, (err,result) => {
       res.send(result)
       return result
    })
   
})
app.listen('3001',() => {
    console.log("start server 3001 port");
})
