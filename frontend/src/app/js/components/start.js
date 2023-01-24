import {appBody} from "../DOM_component/dom_component"
import {SideBar} from "./../components/sidebar/sidebar"
import {DefaultMain} from "./main/defaultMain"
import {ComponentStruct} from "../core/component_struct";
import {initRoom} from "./../controller/socket";

class StateRoom extends ComponentStruct{
    // -- object elemen ---
    roomList = []
    sideBar

    // -- data value --
    currentActive
    isFirstOpen

    constructor(roomList){
        super();
        this.roomList = roomList;

        //set sidebar
        this.sideBar = new SideBar(this.roomList.map(room => room.roomAside))
        
        // -- define from contructor --
        this.defineCreateElement(appBody);
        this.defineElementStruct({
            asideElement : "ASIDE",
            mainElement : "MAIN"
        })

    }

    setActiveRoom(room){
        room.setActive(); 
        this.currentActive = room
    }
    setInactiveRoom(room){
        console.log(room);
        room.setInactive()
    }

    setTheActivation(){
        let found = this.roomList.find((room,i)=> {
            room.isActive ? this.setActiveRoom(room) : this.setInactiveRoom(room)
        })

        if(!found)this.defaultPage();
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.defineAttachcement();
        this.initRoomSocket()
        this.roomList.forEach(room => {
            room.prepareElement();
        })
        
        this.sideBar.prepareElement();
        this.setTheActivation();
    }

    changeCurrentPage(room){
        if(this.currentActive){
            this.setInactiveRoom(this.currentActive)
        }
        this.currentActive = room;
        this.currentActive.setActive();
        this.showCurrentPage();
    }

    showCurrentPage(){
        this.detachProp.mainElement();
        if(!this.currentActive){
            return
        }
        if(this.currentActive){
            this.attachProp.mainElement(this.currentActive.roomMain); // elemen main yg diattach
        }
    }

    initRoomSocket(){
        let roomIdList = this.roomList.map(room => room.id );
        initRoom(roomIdList);
    }

    async run(){
        this.prepareElement();

        this.attachProp.asideElement(this.sideBar);
        this.showCurrentPage();
        this.setEventChangePage()
    }

    //TODO buat default page
    defaultPage(){
        this.currentActive = false
        let deff = new DefaultMain();
        return deff;
    }


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
