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
    isFirstOpen

    // -- dom elemen --
    container

    // -- element value --
    containerElement
    asideElement
    mainElement

    constructor(roomList){
        this.roomList = roomList;

        //set sidebar
        this.sideBar = new SideBar(this.roomList.map(room => room.roomAside))
    }

    // --- element ----
    createElement(){return appBody();}
    resetElement(){this.containerElement = this.createElement()}
    deleteElement(){this.containerElement = null}
    setPseudoElement(){
        this.asideElement = this.containerElement.querySelector('ASIDE');
        this.mainElement = this.containerElement.querySelector('MAIN');
    }
    unsetPseudoElement(){
        this.asideElement = this.containerElement.querySelector('ASIDE');
        this.mainElement = this.containerElement.querySelector('MAIN');
    }

    //menggunakan attach detach
    attachSidebar(side){this.asideElement.append(side.containerElement)}
    detachSidebar(){this.asideElement.innerHTML = ""}
    attachMain(main){this.mainElement.append(main.containerElement)}
    detachMain(){this.mainElement.innerHTML = ""}

    setActiveRoom(room){room.setActive(); this.currentActive = room}
    setInactiveRoom(room){room.setInactive()}
    setTheActivation(){
        let found = this.roomList.find((room,i)=> {
            room.isActive ? this.setActiveRoom(room) : this.setInactiveRoom(room)
        })

        if(!found)this.defaultPage();
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.roomList.forEach(room => {
            room.prepareElement();
        })
        
        this.sideBar.prepareElement();
        this.setTheActivation();
    }

    changeCurrentPage(room){
        this.currentActive.setInactive();
        this.currentActive = room;
        this.currentActive.setActive();
        this.showCurrentPage();
    }

    showCurrentPage(){
        this.detachMain();
        this.attachMain(this.currentActive.roomMain); // elemen main yg diattach
    }

    run(){
        this.prepareElement();

        this.attachSidebar(this.sideBar);
        this.showCurrentPage();
        this.setEventChangePage()
    }

    //TODO buat default page
    defaultPage(){}


    // --- event ----
    //untuk perpindahan page
    setEventChangePage(){
        console.log('roomlist',this.roomList)
        this.roomList.forEach((room)=>{
            room.roomAside.onClick(
                ()=>{
                    this.changeCurrentPage(room);
                }
            )
        })
    }
}

export {StateRoom}
