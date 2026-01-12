import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

//middelware
app.use(express.json())

//test route
app.get('/',(req,res)=>{
    res.json({message:'Hello from backend side'})
})

const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})
