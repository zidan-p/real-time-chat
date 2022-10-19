// ini adalh program utama tempat ini dijalankan
// akan berisi beberapa state mengenai tampilanya.
// state disini adalah state roomnya? mungkin,,
import { appBody } from "../DOM_component/dom_component"
import {SideBar} from "./../components/sidebar/sidebar"

class StateRoom{
    // -- object elemen ---
    roomList = []
    sideBar

    // -- data value --
    currentActive

    // -- dom elemen --
    container

    // -- element value --
    containerElement

    constructor(roomList){
        this.roomList = roomList;
        console.log(this.roomList)

        //set sidebar
        this.sideBar = new SideBar(
            this.roomList.map(room => room.roomAside)
        )

        this.roomList.forEach(room => {
            console.log(room)
            console.log(room.roomAside)
        })
        
        //set room yang active
        let found = this.roomList.find((room,i)=> {
            if(room.isActive == true ){
                this.currentActive = room;
            }
        })

        // bila tidak maka tmapilkan halamn default
        if(!found) this.defaultPage();
    }

    // --- dom ---
    setDomContainer(){this.container = document.querySelector('body')}
    unsetDomContainer(){this.container = null;}
    fillElementDom(){this.container.append(this.containerElement);}
    deleteDom(){this.container.innerHTML = ""}

    // --- element ----
    createElement(){return appBody();}
    resetElement(){this.containerElement = this.createElement()}
    setCurrentElement(){this.containerElement = this.container.cloneNode(true)}
    deleteElement(){this.containerElement = null}

    showThis(){
        this.setDomContainer();
        this.resetElement();
        this.fillElementDom()
        this.fillElementDom();

        this.sideBar.showThis();
    }

    showActivePage(){
        this.hideEveryRoom();
        this.currentActive.setActive();
    }

    //saya tahu ini kurang efisien, tapi saya tidak tahu harus bagaimana lagi
    hideEveryRoom(){
        this.roomList.forEach(room => {
            room.hideSetInactive();
        })
    }

    run(){
        this.showThis();
        this.hideEveryRoom();
        this.showActivePage();
    }

    //TODO buat default page
    defaultPage(){}
}

export {StateRoom}
