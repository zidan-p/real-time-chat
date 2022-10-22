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
            <p class="whitespace-nowrap ${fromMe ? 'text-[#FFC355]' : 'text-[#FF5A76]'}  tracking-widest">[#${idSender}]</p>
            <p class="text-justify" >"${msg}"</p>
        </div>
    </div>
    `.trim()
    return div.firstChild;
}


//daftar room
let roomList = ({isActive = false, roomName = "", newMsg = "", roomId=0}) => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div id="room-${roomId}-side" class="hover:bg-vscode-2 flex gap-3 py-2 ${isActive ? 'bg-vscode-3' : ''} rounded-l-full transition cursor-pointer">
        <div class="bg-green-300 ml-2 basis-1/6 rounded-full"></div>
        <div class="flex flex-col py-2">
            <h4 class="room-name-aside font-semibold text">${roomName}</h4>
            <h4 class="new-msg-container font-extralight text-xs text-gray-400">${newMsg}...</h4>
        </div>
    </div>
    `.trim()
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
    `.trim()
    return div.firstChild;
}


//input pesan
let inputMessage = ({inpTxt = ""}) => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="w-full flex flex-row gap-x-5 px-6 py-[28px] shadow-inner group bg-vscode-2">
        <div class="user-id bg-white text-black rounded-lg w-1/12 text-center p-2 cursor-copy">
            <p>Ini ID</p>
        </div>
        <div class="w-10/12 text-black rounded-lg text-center">
            <form>
                <input id="find" class="w-full py-2 px-4 rounded-lg focus-within:outline-none focus-within:bg-white" placeholder="Ketik Disini YGY">
            </form>
        </div>
        <button class="flex w-1/12 justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
        </button>
    </div>
    `.trim()
    return div.firstChild;
}

//body applikasi
let appBody = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div id="body-program" class="h-screen flex bg-vscode-2">
        <aside class="basis-1/3 ">
        </aside>
        <main class="w-full">
        </main>
    </div>
    `.trim()
    return div.firstChild;
}


let sideBody = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="bg-vscode-4 h-full rounded-r-2xl overflow-hidden flex flex-col">
    <div class="wrapper">
        <h1 class="text-center py-5 my-2 text-2xl text-white font-medium">Daftar Room</h1>
        <div class="px-3 mb-5 group"> <!-- search bar -->
            <form id="form-find" class="p-2 bg-vscode-2 group-focus-within:bg-white flex flex-nowrap gap-2 rounded-full transition">
                <svg class="basis-1/12 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input id="find" class="bg-vscode-2 w-full px-1 text-vscode-5 focus-within:outline-none rounded-full focus-within:bg-white transition" placeholder="Search.."/>
            </form>
        </div>
    </div>
    <!--daftar room dan setting-->
    <div id="room-setting" class="flex w-full h-full gap-2">
        <div id="setting-list" class="basis-1/6 bg-vscode-5 rounded-r-xl flex flex-col p-4 justify-between"> <!--setting-->
            <div class="flex flex-col"> 
                <!--tambah room-->
                <div id="add-room" class="tooltip-collection">
                    <svg class="tooltip-target cursor-pointer mx-auto hover:bg-vscode-2 rounded transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="16"></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                    <div class="tooltip absolute transition delay-150 bg-vscode-2 p-2 shadow rounded text-sm text-gray-400" role="tooltip">
                        Add Room
                        <div class="arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <!--setting-->
                <div id="setting" class="tooltip-collection">
                    <svg class="tooltip-target cursor-pointer mx-auto hover:bg-vscode-2 rounded transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    <div class="tooltip absolute transition delay-150 bg-vscode-2 p-2 shadow rounded text-sm text-gray-400" role="tooltip">
                        Setting
                        <div class="arrow" data-popper-arrow></div>
                    </div>
                </div>
                <!--account-->
                <div id="account" class="tooltip-collection">
                    <svg class="tooltip-target cursor-pointer mx-auto hover:bg-vscode-2 rounded transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <div class="tooltip absolute transition delay-150 bg-vscode-2 p-2 shadow rounded text-sm text-gray-400" role="tooltip">
                        Account
                        <div class="arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="room-list" class="grow"> <!--room-->
            <!-- ini tempat roomnya nanti -->
        </div>
    </div>
    </div>
    `.trim();
    return div.firstChild;
}

let mainBodyRoom = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="h-screen flex flex-col relative bg-vscode-3">
        <div id="header" class="bg-vscode-2 drop-shadow-2xl min-h-36 cursor-default">
        </div>

        <!--chat container-->
        <div class="grow overflow-y-auto">
            <div id="msg-container" class="flex flex-col gap-2 py-8 px-5">
            </div>
        </div>

        
        <!-- Input -->
        <div id="input-msg-container" class="">
        </div>
    </div>
    `.trim();
    return div.firstChild;
}


export {
    msgRow, 
    roomList, 
    header, 
    inputMessage,
    appBody,
    sideBody,
    mainBodyRoom
}