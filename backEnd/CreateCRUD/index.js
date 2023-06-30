const express = require('express')
const app = express()
const mongoose = require('mongoose')




    app.use(
        express.urlencoded({
            extended: true,
        }),
    )
  //minha senha cluster:  4Ad3aqzUm07dKsTD


  
    app.use(express.json())
    const personRoutes = require('./routes/noticeRoutes') 
    app.use('/notice', personRoutes)

    app.get('/', (req, res) => {

        res.json({message: 'hi express!'})
    })

    


    mongoose.connect(
        `mongodb+srv://enfermagemEEEP:WBj7ztLGMQmSUDDs@cluster0.3tamxr8.mongodb.net/?retryWrites=true&w=majority`
        )
    .then(  () =>{
        console.log("MongoDB has been connected")
        app.listen(3001)
    })
    .catch((err) => console.log(err))

    app.listen(3000)



   