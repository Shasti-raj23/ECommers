import Express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const App =Express()

App.use(Express.static(__dirname))

App.get("/",(req,res)=>{
    res.sendFile(__dirname+"/main.html")
})
App.listen(3300,()=>{
    console.log("Server is running on port 3300")
})