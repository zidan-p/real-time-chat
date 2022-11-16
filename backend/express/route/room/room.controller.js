const sequelize = require("../../../database");

const models = sequelize.models;
const room = models.room;
const user = models.user;
const message = models.message;


module.exports = {
    controllerGetAll : async (req,res)=>{
        try {
            let result = await room.findAll();
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
            let result = await room.findAll({
                include : [
                    {
                        model : user,
                        as : "users"
                    },
                    {
                        model : message,
                        as : "messages"
                    },
                    {
                        model : user,
                        as : "creator_room"
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
            let result = await room.findByPk(id,{
                include:[
                    {
                        model: user,
                        as : 'users'
                    },
                    {
                        model: message,
                        as: 'messages'
                    },
                    {
                        model : user,
                        as : 'creator_room'
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

    controllerGetByUser : async (req,res)=>{
        const params = {id : req.params.user_id}
        try {

            let result = await user.findOne({
                where: params,
                include : [{
                    model : room,
                    through : "pair_user_room",
                    include: [
                        {
                            model : user,
                            as : "users"
                        },
                        {
                            model : message,
                            as : "messages"
                        },
                        {
                            model : user,
                            as : "creator_room"
                        }
                    ]
                }]
            })
            // result = await rest.getRooms()
            res.status(200)
            res.json({
                success : true,
                data : result.rooms,
                msg : "test yang lumayan"
            })
        } catch (error) {
            res.status(500)
            res.json({
                success : false,
                data : error.message
            })
        }
    },

    controllerGetByCreator : async (req,res) => {
        const params = {creator : req.params.creator}
        try {
            let result = await room.findAll({where : params})
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
            creator : req.body.creator ?? null
        }
        try {
            let result = await room.create(data)
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
            let datas = req.body.rooms;
            let result = await room.bulkCreate(datas);
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
            name : req.body.roomName,
            description : req.body.description,
            creator : req.body.creator 
        }
        try {
            let result = await room.update(data, {
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
            let result = await room.destroy({where : param})
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

    controllerAddUser : async (req,res) => {
        try {
            let roomId = req.params.room_id;
            let userInstance = req.body.user;
            const [_user,created] = await user.findOrCreate({
                where : {id : userInstance.id},
                defaults : userInstance
            })
            

            const _room = await room.findByPk(roomId,{
                include : [{
                    model : user,
                    through : "pair_user_room"
                }]
            });
            await _room.addUsers(_user);

            if(_room.hasUser(_user)){
                res.json({
                    success : true,
                    data : {
                        msg: created ? "data telah dibuat baru" : "user telah di sandingkan"
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

    controllerRemoveUser : async (req,res)=>{
        try {
            let roomId = req.params.room_id;
            let userInstance = req.body.user;
            const _user = await user.findByPk(userInstance.id);

            const _room = await room.findByPk(roomId,{
                include : [{
                    model : user,
                    through : "pair_user_room"
                }]
            });
            await _room.removeUser(_user);

            res.json({
                success : true,
                data : {
                    msg: "user telah di putuskan"
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
            let roomId = req.params.room_id
            let messageInstance = req.body.message
            const [_message, created] = await message.findOrCreate({
                where : {id : messageInstance.id},
                defaults : messageInstance
            })

            const _room = await room.findByPk(roomId);
            await _room.addMessages(_message);

            if(_room.hasMessages(_message)){
                res.json({
                    success : true,
                    data : {
                        msg: created ? "data telah dibuat baru" : "message telah di sandingkan"
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
            let roomId = req.params.room_id
            let messageInstance = req.body.msg
            const _message = await message.findByPk(messageInstance.id);

            const _room = await room.findByPk(roomId);
            await _room.removeMessage(_message);

            if(!_room.hasMessages(_message)){
                res.json({
                    success : true,
                    data : {
                        msg: created ? "data telah dibuat baru" : "message telah di sandingkan"
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

    controllerSetCreator : async (req,res) => {
        try {
            let roomId = req.params.room_id;
            let creatorInstance = req.body.creator;
            const [_creator, created] = await user.findOrCreate({
                where : {id : creatorInstance.id},
                defaults: creatorInstance
            })

            const _room = await room.findByPk(roomId);
            await _room.setCreator_room(_creator);
            res.json({
                success : true,
                data : {
                    msg: created ? "data telah dibuat baru" : "creator telah di sandingkan"
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