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

    // -- dom component --
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


    // -- data fetching --
    setEvent(){
        this.elementStruct.formSignIn.addEventListener('submit',(e)=>{
            //mungkin bisa dilakukan handle server
            e.preventDefault()
            let data = {
                id : this.generatedId, // ini nantinya akan diproses ke database, sehingga akan dikosongi
                name : this.elementStruct.nameUserSignIn.value,
                description : this.elementStruct.descUserSignIn.value
            }
            this.sendDataCreateUser(data)
        })

        this.elementStruct.formLogin.addEventListener('submit', (e) => {
            e.preventDefault();

            //akan dilakukan test pada database
            let id = this.elementStruct.idLogin.value;
            this.sendDataCheckId(id)
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

    //ajax loader untuk loading
    async sendDataCheckId(id){
        let res = await this.checkUser(id)
        if(res){
            let {name,description,id} = res
            this.saveUserToLocal({name,description,id})
        }else{
            let div = document.createElement('DIV');
            div.innerHTML = `
            <div class="bg-red-600 bg-opacity-50 font-mono border border-red-600 mt-2 p-2">
                id tidak ditemukan
            </div>
            `
            this.elementStruct.loginContainer.append(div)
        }
        
    }
 
    //cek apakah ada user di database
    async checkUser(id){
        let result = await fetch('http://localhost:3004/user/'+id)
        result = await result.json();

        if (result.data == null || result.success == false) return false;
        return result.data
    }

    async sendDataCreateUser(data){
        let res = await this.createUser(data)
        console.log(res)
        let {name,description,id} = res
        this.saveUserToLocal({name,description,id})
    }

    async createUser(data){
        try {
            let result = await fetch("http://localhost:3004/user",{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                }
            })
            result = await result.json()
            if(result.success == false)return false
            return result.data
        } catch (error) {
            console.warn(error)
            throw new Error(error)
        }
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

}

export {SigninLogin}




    // let user = {
    //     id : 1234,
    //     name : "zidan putra rahman",
    //     lastActive : null
    // }

    /**
     * 
     * <div class="bg-red-400 font-mono p-2 opacity-60">
  akun tidak ditemukan
</div>
     */