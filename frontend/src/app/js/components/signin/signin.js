import {signinView} from "./../../DOM_component/dom_component";
import {ComponentStruct} from "./../../core/component_struct"

class Signin extends ComponentStruct{

    //-- elemen --
    containerElement
    idUser
    nameUser
    descUser
    form

    constructor(){
        super()
        // -- define constructor --
        this.defineCreateElement(signinView);
        this.defineElementStruct({
            idUser : "#id-user-signin",
            nameUser : "#name-user",
            descUser : "#desc-user",
            form : "form"
        })
    }

    prepareElement(){
        this.resetElement();
        this.setPseudoElement();
        this.setEvent();
    }

    setEvent(){
        //sebelum adanay set event, ada baiknya untuk mendapat id dari server
        //sebelum eventlistener dibuat request untuk mendapat id di admin

        this.elementStruct.form.addEventListener('submit',(e)=>{
            //mungkin bisa dilakukan handle server
            e.preventDefault()
        })
    }
}

export {Signin}