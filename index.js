import Express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import fs from 'fs'
const rawData = fs.readFileSync('data.json')
const data = JSON.parse(rawData);
let data1=data.batteryholder
console.log(data1)

const __dirname = dirname(fileURLToPath(import.meta.url))
const App =Express()

App.use(Express.static(__dirname))
App.use(bodyParser.urlencoded({extended:false}))
App.get("/search",(req,res)=>{
    res.render(__dirname+"/Roboat.ejs",{data:data1})
})
App.get("/",(req,res)=>{
    res.sendFile(__dirname+"/main.html")
})
App.post("/category",(req,res)=>{
    const query = req.body.category.toLowerCase();
    
    const result = data[query]
    console.log(result)
    res.render(__dirname+"/Roboat.ejs",{data:result})
})
App.listen(3300,()=>{
    console.log("Server is running on port 3300")
})