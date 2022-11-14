import { sideBody } from "../../DOM_component/dom_component"
import {AccountSide} from "./tool/accountSide";
import {CreateRoomSide} from "./tool/createRoomSide";
import {JoinRoomSide} from "./tool/joinRoomSide";
import {RoomListSide} from "./tool/roomListSide";
import {SettingSide} from "./tool/settingSide"
import {ComponentStruct} from "../../core/component_struct"



class SideBar extends ComponentStruct{

    // -- data value --
    active

    // -- object value --
    account
    createRoom // -- create room
    joinRoom
    roomListSide
    setting

    constructor(roomSideList){
        super()
        this.roomListSide = new RoomListSide(roomSideList);
        this.account = new AccountSide();
        this.createRoom = new CreateRoomSide();
        this.joinRoom = new JoinRoomSide();
        this.setting = new SettingSide();

        //set active defaultnya adalah room list
        this.active = this.roomListSide

        // -- define from constrcutor --
        this.defineCreateElement(sideBody)
        this.defineElementStruct({
            sideContentContainer : {
                selector : "#side-content",
                freeze : true
            },
            // ** button value **
            roomListSidebtn : "#room-list-btn",
            joinRoomBtn : "#join-room-btn",
            settingBtn : "#add-room-btn",
            createRoomBtn : "#setting-btn",// -- create room
            accountBtn : "#account-btn"
        })
    }


    // -- state --
    setActiveContent(content){
        console.log('---- content di set active')
        this.active = content;
        content.setActive();
    };
    setInactiveContent(content){
        content.setInactive()
    };
    changeMainContent(content){
        this.setInactiveContent(this.active);
        this.detachProp.sideContentContainer();
        this.setActiveContent(content);
        this.attachProp.sideContentContainer(content)
    }
    showCurrentContent(){
        console.log("yang aktif adalah",this.active);
        console.log(this.attachProp);
        this.attachProp.sideContentContainer(this.active);
        // this.attachProp.sideContentContainer(document.createElement('H1'));
        console.log(this.elementStruct.sideContentContainer);
    }
    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.defineAttachcement();

        this.roomListSide.prepareElement();
        this.account.prepareElement();
        this.createRoom.prepareElement();
        this.joinRoom.prepareElement();
        this.setting.prepareElement();

        this.setBtnEvent()
        this.showCurrentContent()
    }

    // -- event --
    setBtnEvent(){
        this.elementStruct.roomListSidebtn.addEventListener('click',(e)=>{this.changeMainContent(this.roomListSide)}) 
        this.elementStruct.joinRoomBtn.addEventListener('click',(e)=>{this.changeMainContent(this.joinRoom)}) 
        this.elementStruct.createRoomBtn.addEventListener('click',(e)=>{this.changeMainContent(this.createRoom)})
        this.elementStruct.settingBtn.addEventListener('click',(e)=>{this.changeMainContent(this.setting)})
        this.elementStruct.accountBtn.addEventListener('click',(e)=>{this.changeMainContent(this.account)})
    }

    testing(){
        console.log(this.sideContentContainerElement)
        console.log(this.roomListSidebtn)
        console.log(this.joinRoomBtn)
        console.log(this.createRoomBtn)
        console.log(this.settingBtn)
    }




}


export {SideBar}