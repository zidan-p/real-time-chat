/*
sekarang ini berfung mengatur controller alur program
*/

import { Room } from "./../components/room";
import {SideBar} from "./../components/sidebar/sidebar"

// baru pertama kali user masuk
// ada 1 room
// terbuka percakapan antara user dengan user lain

//dummy data yang akan diproses
//ini hany astruktur sementara, nantinya ini akan diubah
let rooms = [
    {
        id : 1,
        name : "test room",
        participant : [],
        msg : [],
    },
    {
        id : 3,
        name : "dummy room",
        participant : [],
        msg : [],
    },
    {
        id : 2,
        name : "room lagi",
        participant : [],
        msg : [],
    },
]



function testRun(){
    let roomList = rooms.map(room => {
        return new Room(room)
    });
    
    let side = new SideBar(
        roomList.map(room =>room.roomAside)
    )

    // //definisikan container text
    // let chatContent = new ChatContent();
    // chatContent.setEvent();
}


export {testRun}

