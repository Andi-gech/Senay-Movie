const express=require('express')    
const app=express()

const cors=require('cors')

const Popular=require('./Route/Popular')


app.use(cors())
app.use(express.json())


app.use('/popular',Popular)




    app.listen(3000,'192.168.1.15',()=>{
        console.log('listening on port 3000')
    })

