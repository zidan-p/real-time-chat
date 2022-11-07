/*
sekarang ini berfung mengatur controller alur program
*/

import { Room } from "../components/room";
import {SideBar} from "../components/sidebar/sidebar"
import {StateRoom} from "../components/start"

// baru pertama kali user masuk
// ada 1 room
// terbuka percakapan antara user dengan user lain

//dummy data yang akan diproses
//ini hany astruktur sementara, nantinya ini akan diubah
let rooms = [
    {
        id : 1,
        name : "test room yang sudah saya editt",
        participant : [],
        msg : [
            {
                data : "fesyan satoe",
                idSender : 123123
            }, 
            {
                data : "fesyan doea",
                idSender : 122123
            }
        ],
        isActive : true,
    },
    {
        id : 3,
        name : "dummy room",
        participant : [],
        msg : [
            {
                data : "dumn mess",
                idSender : 123123
            }, 
            {
                data : "denn meshh",
                idSender : 122123
            }
        ],
        isActive : false,
    },
    {
        id : 2,
        name : "room lagi",
        participant : [],
        msg : [
            {
                data : "fesyan satoe",
                idSender : 123123
            }, 
            {
                data : "fesyan doea",
                idSender : 122123
            }
        ],
        isActive : false,
    },
]

let user = {
    id : 1234,
    name : "zidan putra rahman",
    lastActive : null
}

async function fecthData(){
    let results = await fetch('http://127.0.0.1:3004/room/full',{
        // mode: 'no-cors',
        headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    })
    results = await results.json()
    results = results.data
    return results.map(res => {
        return {
            id : res.id,
            name : res.name,
            participant : res.users,
            msg : res.messages,
            creator : res.creator_room,
            description : res.description
        }
    })
}

async function testRun(){

    //set local storage
    localStorage.setItem('userData', JSON.stringify(
        user
    ));

    let group = await fecthData();
    let start = new StateRoom(
        group.map(room => new Room(room))
    )

    document.querySelector('body').innerHTML = ""

    start.run(); //jalankan program

    document.querySelector('body').append(start.containerElement)

}

class ChatProgram{
    // -- data value --
    rooms


    // -- elemen --
    container
}


export {testRun}

