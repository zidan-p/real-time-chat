const sequelize = require("../../../database");

const models = sequelize.models;
const message = models.message
const room = models.room
const user = models.user

module.exports = {
    controllerGetAll : async (req,res)=>{
        try {
            let result = await message.findAll();
            res.status(200)
            res.json({
                success : true,
                data : result
            })
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },
    controllerGetById : async (req,res)=>{
        let id = parseInt(req.params.id);
        try {
            let result = await message.findByPk(id)
            res.status(200)
            res.json({
                success : true,
                data : result
            })
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },
    controllerGetByRoom : async (req,res)=>{
        let param = {roomId : parseInt(req.params.room_id)}
        try {
            let result = await message.findOne({where : param})
            res.status(200)
            res.json({
                success : true,
                data : result
            })
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },
    controllerGetByUser : async (req,res)=>{
        let param = {userId : parseInt(req.params.user_id)}
        try {
            let result = await message.findOne({where : param})
            res.status(200)
            res.json({
                success : true,
                data : result
            })
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },

    controllerCreate : async (req,res)=>{
        try {
            const data = {
                message : req.body.message,
                userId : req.body.userId,
                roomId : req.body.roomId
            }

            if(!await room.findByPk(data.roomId)) throw Error('room undefined')
            if(!await user.findByPk(data.userId)) throw Error('user undefined')

            let result = await message.create(data)
            res.status(201)
            res.json({
                success : true,
                data : result
            })
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },

    //mungkin bisa saya hilangkan
    controllerEdit : async (req,res)=>{
        try {
            const id = req.params.id
            const data = {
                message : req.body.message,
                userId : req.body.userId,
                roomId : req.body.roomId
            }
            if(!await room.findByPk(data.roomId)) throw Error('room undefined')
            if(!await user.findByPk(data.userId)) throw Error('user undefined')

            let result = await message.update(data, {where : id})
            res.status(201)
            res.json({
                success : true,
                data : result
            })
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },

    //ini juga mungkin bisa saya hilangkan
    controllerDelete : async (req,res) => {
        try {
            const id = req.params.id
            let result = await message.destroy({where : {id : id}});
            res.status(200)
            res.json({
                success : true,
                data : result
            })
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },
}