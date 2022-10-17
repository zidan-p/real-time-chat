// :: ini adalah tempat untuk menyimpan semua dom component ::

//untuk baris pesan
let msgRow = ({numberRow = NaN ,msg = "",idSender = NaN,fromMe = false})=>{
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="w-full flex">
        <div class="basis-10">
            <p class="text-center text-gray-400">${numberRow}</p>
        </div>
        <div class="basis-1/4 ${fromMe ? 'flex-row-reverse' : ''}  grow flex gap-3 px-4">
            <p class="whitespace-nowrap ${fromMe ? 'text-[#FFC355]' : 'text-[#FF5A76]'}  tracking-widest">[ #${idSender} ]</p>
            <p class="text-justify" >"${msg}"</p>
        </div>
    </div>
    `.trim()
    return div.firstChild;
}


//daftar room
let roomList = ({isActive = false, roomName = "", newMsg = ""}) => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="flex gap-3 py-2 ${isActive ? 'bg-vscode-3' : ''} rounded-l-full transition cursor-pointer">
        <div class="bg-green-300 ml-2 basis-1/6 rounded-full"></div>
        <div class="flex flex-col py-2">
            <h4 class="font-semibold text">${roomName}</h4>
            <h4 class="font-extralight text-xs text-gray-400">${newMsg}...</h4>
        </div>
    </div>
    `
    return div.firstChild;
}

//untuk header
let header = ({roomName = "", roomIcon = ""}) => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="bg-vscode-2 drop-shadow-2xl min-h-36 cursor-default">
        <div class="flex justify-between p-5">
            <h1 class="font-semibold text-2xl pl-5 m-2">${roomName}</h1>
            <button class="bg-white rounded-full mr-10 openModal">
            ${roomIcon}
            </button>
        </div>
    </div>
    `
    return div.firstChild;
}


//input pesan
let inputMessage = ({inpTxt = ""}) => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="absolute w-full inset-x-0 bottom-0 flex flex-row gap-x-5 px-6 py-[28px] shadow-inner group bg-vscode-2">
        <div class="bg-white text-black rounded-lg w-1/12 text-center p-2 cursor-copy">
            <p>Ini ID</p>
        </div>
        <div class="w-10/12 text-black rounded-lg text-center">
            <form>
                <input id="find" class="w-full py-2 px-4 rounded-lg focus-within:outline-none focus-within:bg-white" placeholder="Ketik Disini YGY">
            </form>
        </div>
        <div class="flex w-1/12 justify-center cursor-pointer">
            <?xml version="1.0" encoding="iso-8859-1"?>
            <svg height="40px" width="40px" fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 491.022 491.022" style="enable-background:new 0 0 491.022 491.022;" xml:space="preserve">
                <g>
                    <g>
                        <path d="M490.916,13.991c-0.213-1.173-0.64-2.347-1.28-3.307c-0.107-0.213-0.213-0.533-0.32-0.747
                            c-0.107-0.213-0.32-0.32-0.533-0.533c-0.427-0.533-0.96-1.067-1.493-1.493c-0.427-0.32-0.853-0.64-1.28-0.96
                            c-0.213-0.107-0.32-0.32-0.533-0.427c-0.32-0.107-0.747-0.32-1.173-0.427c-0.533-0.213-1.067-0.427-1.6-0.533
                            c-0.64-0.107-1.28-0.213-1.92-0.213c-0.533,0-1.067,0-1.6,0c-0.747,0.107-1.493,0.32-2.133,0.533
                            c-0.32,0.107-0.747,0.107-1.067,0.213L6.436,209.085c-5.44,2.347-7.893,8.64-5.547,14.08c1.067,2.347,2.88,4.373,5.227,5.44
                            l175.36,82.453v163.947c0,5.867,4.8,10.667,10.667,10.667c3.733,0,7.147-1.92,9.067-5.12l74.133-120.533l114.56,60.373
                            c5.227,2.773,11.627,0.747,14.4-4.48c0.427-0.853,0.747-1.813,0.96-2.667l85.547-394.987c0-0.213,0-0.427,0-0.64
                            c0.107-0.64,0.107-1.173,0.213-1.707C491.022,15.271,491.022,14.631,490.916,13.991z M190.009,291.324L36.836,219.218
                            L433.209,48.124L190.009,291.324z M202.809,437.138V321.831l53.653,28.267L202.809,437.138z M387.449,394.898l-100.8-53.013
                            l-18.133-11.2l-0.747,1.28l-57.707-30.4L462.116,49.298L387.449,394.898z"/>
                    </g>
                </g>
            </svg>
        </div>
    </div>
    `
    return div.firstChild;
}


export {msgRow, roomList, header, inputMessage}