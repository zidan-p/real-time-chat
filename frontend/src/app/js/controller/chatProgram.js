/*
controller untuk menjalankan program
*/

import { Room } from "../components/room";
import {StateRoom} from "../components/start"

// ** dummy user **
let user = {
    id : 1234,
    name : "zidan putra rahman",
    lastActive : null
}


class ChatProgram{
    // -- data value --
    rooms
    user


    constructor(){

    }
    // -- elemen --
    async run(){
        this.user = JSON.parse(localStorage.getItem('userData'))
        let group = await this.fetchData();
        this.rooms = group;
        let start = new StateRoom(group.map(room => new Room(room)))

        document.querySelector('body').innerHTML = ""

        start.run(); //jalankan program
        document.querySelector('body').append(start.containerElement)
    }

    async fetchData(){
        let results = await fetch('http://127.0.0.1:3004/room/user/'+this.user.id,{
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
                description : res.description,
                createdAt : res.createdAt
            }
        })
    }
}


export {ChatProgram}

