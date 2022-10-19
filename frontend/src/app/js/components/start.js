// ini adalh program utama tempat ini dijalankan
// akan berisi beberapa state mengenai tampilanya.
// state disini adalah state roomnya? mungkin,,
import { mainBody } from "../DOM_component/dom_component"
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

        //set sidebar
        this.sideBar = new SideBar(
            this.roomList.map(room => {
                room.aside
            })
        )
        
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
    setDomContainer(){this.container = document.getElementsByTagName('BODY')}
    unsetDomContainer(){this.container = null;}
    fillElementDom(){this.container.append(this.containerElement);}
    deleteDom(){this.container.innerHTML = ""}

    // --- element ----
    createElement(){return mainBody();}
    resetElement(){this.containerElement = this.createElement()}
    setCurrentElement(){this.containerElement = this.container.cloneNode(true)}
    deleteElement(){this.containerElement = null}

    showThis(){
        this.setDomContainer();
        this.resetElement();
        this.fillElementDom();

        this.sideBar.showThis();
    }

    showActivePage(){
        this.hideEveryRoom();
        this.currentActive.showThis();
    }

    //saya tahu ini kurang efisien, tapi saya tidak tahu harus bagaimana lagi
    hideEveryRoom(){
        this.roomList.forEach(room => {
            room.hideThis();
        })
    }

    //TODO buat default page
    defaultPage(){}
}

export {StateRoom}
