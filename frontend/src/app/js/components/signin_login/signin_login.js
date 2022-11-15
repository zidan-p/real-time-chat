import {signinView} from "../../DOM_component/dom_component";
import {ComponentStruct} from "../../core/component_struct"

class SigninLogin extends ComponentStruct{
    
    generatedId
    activeField = 1 //(1,2) --> 1 = daftar, 2 = login

    constructor(){
        super()
        // -- define constructor --
        this.defineCreateElement(signinView);
        this.defineElementStruct({

            // ** base **
            loginChange : "#login-change",
            signinChange : "#signin-change",

            // ** sign in **
            signinContainer : ".sign-in",
            idUserSignIn : "#id-user-signin",
            nameUserSignIn : "#name-user",
            descUserSignIn : "#desc-user",
            formSignIn : ".sign-in form",

            // ** log in **
            loginContainer : ".log-in",
            formLogin : ".log-in form",
            idLogin : "#id-user-login"
        })
        this.generatedId = this.makeId(4);
    }

    prepareElement(){
        this.activeField = 1
        this.resetElement();
        this.setPseudoElement();
        this.setEvent();

        this.checkActiveField();
        this.fillId()
        
    }

    changeFieldVisibility(){
        if(this.activeField == 1){
            this.elementStruct.signinContainer.classList.remove('hidden');
            this.elementStruct.loginContainer.classList.add('hidden');
        }
        else if(this.activeField == 2){
            this.elementStruct.signinContainer.classList.add('hidden');
            this.elementStruct.loginContainer.classList.remove('hidden');

        }
        else throw new Error('active field tidak valid')
    }

    checkActiveField(){
        switch(this.activeField){
            case 1:
                this.changeFieldVisibility();
                this.elementStruct.signinChange.className = 
                "basis-1/2 text-center hover:bg-purpler-400 active:bg-purple-600 bg-purple-500 rounded-sm";
                this.elementStruct.loginChange.className = 
                "basis-1/2 text-center hover:text-purpler-400 active:text-purple-600 text-purple-500 rounded-sm"
                break

            case 2 :
                this.changeFieldVisibility();
                this.elementStruct.loginChange.className = 
                    "basis-1/2 text-center hover:bg-purpler-400 active:bg-purple-600 bg-purple-500 rounded-sm";
                this.elementStruct.signinChange.className = 
                    "basis-1/2 text-center hover:text-purpler-400 active:text-purple-600 text-purple-500 rounded-sm"
                break
            default :
                throw new Error('active field tidak sesuai')
        }
    }





    // let user = {
    //     id : 1234,
    //     name : "zidan putra rahman",
    //     lastActive : null
    // }

    setEvent(){
        //sebelum adanay set event, ada baiknya untuk mendapat id dari server
        //sebelum eventlistener dibuat request untuk mendapat id di admin

        //untuk algoritmanya, ketika user menginputkan id user yang sudah ada
        //maka akan dibawakan data dari database, bukan dari sini.
        //namun bila user yg diinputkan tidak ada, maka akan buat baru

        this.elementStruct.formSignIn.addEventListener('submit',(e)=>{
            //mungkin bisa dilakukan handle server
            e.preventDefault()

            let data = {
                id : this.generatedId, // ini nantinya akan diproses ke database, sehingga akan dikosongi
                name : this.elementStruct.nameUserSignIn.value,
                descUser : this.elementStruct.descUserSignIn.value
            }

            //save user
            this.saveUserToLocal(data);
        })

        this.elementStruct.formLogin.addEventListener('submit', (e) => {
            e.preventDefault();

            //akan dilakukantest pada database
        })

        // ** event untuk masing2 button **
        this.elementStruct.loginChange.addEventListener('click', ()=>{
            this.activeField = 2;
            this.checkActiveField();
        })
        this.elementStruct.signinChange.addEventListener('click', () => {
            this.activeField = 1;
            this.checkActiveField();
        })
    }

    saveUserToLocal(data){
        localStorage.setItem('userData',JSON.stringify(data))
        window.location = ""
    }

    fillId(){
        this.generatedId = this.makeId(4)
        this.elementStruct.idUserSignIn.innerHTML = `#${this.generatedId}`
    }

    // ini hanya dummy untuk selanjutnya lebih baik dibuat dari server
    makeId(length){
        let result           = '';
        let characters       = '123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    checkToDB(){}

}

export {SigninLogin}