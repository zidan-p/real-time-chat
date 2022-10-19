/*
sekarang ini berfung mengatur controller alur program
*/

import { Room } from "./../components/room";
import {SideBar} from "./../components/sidebar/sidebar"
import {StateRoom} from "./../components/start"

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
        isActive : true,
    },
    {
        id : 3,
        name : "dummy room",
        participant : [],
        msg : [],
        isActive : false,
    },
    {
        id : 2,
        name : "room lagi",
        participant : [],
        msg : [],
        isActive : false,
    },
]



function testRun(){
    // let roomList = rooms.map(room => {
    //     return new Room(room)
    // });
    
    // let side = new SideBar(
    //     roomList.map(room =>room.roomAside)
    // )

    let start = new StateRoom(
        rooms.map(room => new Room(room))
    )

    document.querySelector('body').innerHTML = ""

    start.run(); //jalankan program

    // //definisikan container text
    // let chatContent = new ChatContent();
    // chatContent.setEvent();
}


export {testRun}

