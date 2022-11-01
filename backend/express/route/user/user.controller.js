const sequelize = require("../../../database");

const models = sequelize.models;
const user = models.user;
const room = models.room;
const message = models.message

module.exports = {

    controllerGetAll : async (req,res)=>{
        try {
            let result = await user.findAll();
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
    
    //untuk mendapatkan secara full 
    controllerGetFull : async (req,res)=>{
        try {
            let result = await user.findAll({
                include : [
                    {
                        model : message,
                        as : "messages"
                    },
                    {
                        model : room,
                        as : "rooms"
                    }
                ]
            });
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
        let id = parseInt(req.params.id)
        try {
            let result = await user.findByPk(id,{
                include:[
                    {
                        model : room,
                        as : "rooms"
                    },
                    {
                        model: message,
                        as: 'messages'
                    }
                ]
            })
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
        const params = {roomId : req.params.room_id}
        try {
            let result = await user.findOne({
                where : params,
                include : {
                    model : message,
                    as : "messages"
                }
            })
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

    controllerCreate : async (req,res) => {
        const data = {
            name : req.body.name,
            description : req.body.description,
        }
        try {
            let result = await user.create(data)
            res.status(201)
            res.json({
                success : true,
                data : result
            })
        }catch(error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },

    controllerBulkCreate : async (req,res) => {
        try {
            const datas = req.body.users;
            let result = await user.bulkCreate(datas);
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

    controllerEdit : async (req,res)=>{
        const data = {
            name : req.body.userName,
            description : req.body.description,
        }
        try {
            let result = await user.update(data, {
                where : {id : req.params.id}
            })
            res.status(201)
            res.json({
                success : true,
                data : result
            })
        }catch(error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },

    controllerDelete : async (req,res)=>{
        const param = {id : req.params.id}
        try {
            let result = await user.destroy({where : param})
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

    controllerAddRoom : async (req,res) => {
        try {
            let userId = req.params.user_id;
            let roomId = req.params.room_id;
    
            const _user = await user.findByPk(userId);
            const _room = await room.findByPk(roomId);

            _user.addRooms(_room);
            if(_user.hasRooms(_room)){
                res.json({
                    success : true,
                    data : {}
                })
            }
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },

    controllerAddRoom : async (req,res) => {
        try {
            let userId = req.params.user_id;
            let roomInstance = req.body.room;
            const [_room,created] = await room.findOrCreate({
                where : {id : roomInstance.id},
                defaults : roomInstance
            })

            const _user = await user.findByPk(userId);
            await _user.addRooms(_room);

            if(_user.hasRoom(_room)){
                res.json({
                    success : true,
                    data : {
                        msg: created ? "data telah dibuat baru" : "room telah di sandingkan"
                    }
                })
            }
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },

    controllerRemoveRoom : async (req,res) => {
        try {
            let userId = req.params.user_id;
            let roomInstance = req.body.room;
            const _room = await room.findByPk(roomInstance.id)

            const _user = await user.findByPk(userId);
            await _user.removeRoom(_room);

            res.json({
                success : true,
                data : {
                    msg: "room telah diputuskan"
                }
            })            
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },

    controllerAddMessage : async (req,res) => {
        try {
            let userId = req.params.user_id
            let messageInstance = req.body.msg
            const [_message, created] = await message.findOrCreate({
                where : {id : messageInstance.id},
                defaults : messageInstance
            })

            const _user = await user.findByPk(userId);
            await _user.addMessages(_message);

            if(_user.hasMessages(_message)){
                res.json({
                    success : true,
                    data : {
                        msg: created ? "data telah dibuat baru" : "msg telah di sandingkan"
                    }
                })
            }
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }

    },

    controllerRemoveMessage : async (req,res) => {
        try {
            let userId = req.params.user_id
            let messageInstance = req.body.msg
            const _message = await message.findByPk(messageInstance.id);

            const _user = await user.findByPk(userId);
            await _user.removeMessage(_message);

            res.json({
                success : true,
                data : {
                    msg: created ? "data telah dibuat baru" : "msg telah di sandingkan"
                }
            })            
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }

    }
}
