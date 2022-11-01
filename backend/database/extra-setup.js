//melakuakan realtionshi disini


let applyRelation = (sequelize) => {
    const {user, room, message} = sequelize.models;

    // -- user --
    user.hasMany(message);
    user.belongsToMany(room,{through:'pair_user_room'});

    // -- message --
    message.belongsTo(user);
    message.belongsTo(room);

    // -- room --
    room.hasMany(message);
    room.belongsToMany(user,{through:'pair_user_room'})

    // -- relation admin dan group --
    user.hasMany(room,{
        foreignKey: {
            name: "creator",
            allowNull : true,
        },
        as : "room_created"
    })
    room.belongsTo(user,{
        foreignKey: {
            name: "creator",
            allowNull : true,
        },
        as : "creator_room"
    })
}

module.exports = { applyRelation };