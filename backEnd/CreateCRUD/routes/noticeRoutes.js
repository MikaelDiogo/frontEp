
const router = require('express').Router()

const { exists } = require('../models/Notices')
const Notices = require('../models/Notices')


router.post('/', async (req,res) => {
    //req.body onde chegarão os dados
    const {name, img, text} = req.body
    if(!name){
    res.status(422).json({error: 'name is mandatory'})}
    const notice ={
        name, img, text
    }

    try{
        const Message = 'people insert'
        await Notices.create(notice)
        res.status(201).json(Message)
    } catch(error) {
        res.status(500).json({error: error})

    }

})

router.get('/', async (req, res)=> {
    try{
            const notice = await Notices.find()
            res.status(200).json(notice)
    } catch{
        res.status(500).json({error:error})

    }
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id

    try{
        const notice = await Notices.findOne({_id: id})
        if(!notice){
            res.status(422).json({message: "This person not exists"})
        }

        res.status(200).json(notice)

    } catch (error){
            res.status(500).json({error:error})
    }
})


module.exports = router