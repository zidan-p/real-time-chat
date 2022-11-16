import css from "./app/css/index.css"
import {Initial} from "./app/js/controller/initialProgram"
import { ChatProgram } from "./app/js/controller/chatProgram";


//1. cek apakah sudah login
const init = new Initial();
const chatProgram = new ChatProgram();

//untuk loader
init.showLoader()



let checkSignin = async () => {
    if(init.checkIsset()){ 
        await chatProgram.run()
        return;
    }else{
        init.showSignin();
    }
}

checkSignin();







//jalankan tooltip
// updateTooltipDom();