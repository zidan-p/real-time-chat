import {accountSideContent} from "./../../../DOM_component/dom_component"
import {ComponentStruct} from "../../../core/component_struct";


class AccountSide extends ComponentStruct{
    // -- data value --
    userData
    active = false

    constructor(){
        super()
        this.getUserData();

        // -- define contructor --
        this.defineCreateElement(accountSideContent);
        this.defineElementStruct({
            nameContainer : "#name-account-side",
            idContainer : "#id-account-side",
            saveBtn : "button",
            formElement : "form"
        })
    }

    // -- state --
    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.fillCurrentElementDom();
        this.setEvent();
    }
    fillCurrentElementDom(){
        this.elementStruct.nameContainer.value = this.userData.name
        this.elementStruct.idContainer.value = this.userData.id
    }
    setActive(){
        this.active = true
         
    }
    setInactive(){
        this.active = false;
        this.fillCurrentElementDom();
         
        //dibuat supaya ketika diubah2 datanya masih sama
        //nanti kana di imporve supaya bisa handle emit
    }

    // -- state control --
    setActive(){this.active = true}
    setInactive(){this.active = false}

    

    // -- event --
    setEvent(){
        this.elementStruct.formElement.addEventListener('submit',(e)=>{
            e.preventDefault();
            this.changeUserData();

            //todo: create event untuk emit event websokcet global
        })
    }

    
    // -- functional behavior --
    getUserData(){
        this.userData = JSON.parse(
            localStorage.getItem('userData')
        )
    }
    

    changeUserData(){
        let user = {
            id: this.idContainer.value,
            name: this.nameContainer.value,
            lastActive : this.userData.latActive
        }

        localStorage.setItem("userData",JSON.stringify(
            user
        ))
    }

}


export {AccountSide}