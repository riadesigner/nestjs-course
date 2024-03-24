require('reflect-metadata');

const express = require('express')
const path = require('path')

// --------
//  VARS
// --------
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname+'/public')
const api_books = require('./books/book-routes') 

// ----
//  DB
// ----
require('./infrastructure/db_connection')

// -----------
//  STRUCTURE
// -----------
require('./infrastructure/container')

// --------
//  ROUTES
// --------
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/',api_books);
app.use('/',(req,res)=>{    
    res.sendFile(`${PUBLIC_PATH}/index.html`);
    });
app.use((req,res)=>{  res.send("err");});


// --------
//  SERVER
// --------
app.listen(PORT,(err)=>{
    if(!err){
        console.log("hi from PORT")
    }else{
        console.log("error express!");
    }
})