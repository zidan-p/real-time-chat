// :: ini adalah tempat untuk menyimpan semua dom component ::

//untuk baris pesan
let msgRow = ({numberRow = NaN ,msg = "",idSender = NaN,fromMe = false})=>{
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="w-full flex bg-vscode-1 transition-all duration-300">
        <div class="basis-10 ${fromMe? "border-r-4 border-r-[#FFC355]" : ""}">
            <p class="text-center text-gray-400">${numberRow}</p>
        </div>
        <div class=" ${fromMe ? 'flex-row-reverse' : ''}  w-full grow flex gap-3 px-4">
            <p class="whitespace-nowrap ${fromMe ? 'text-[#FFC355]' : 'text-[#FF5A76]'}  tracking-widest">[#${idSender}]</p>
            <div class="">
                <p class="text-justify whitespace-pre-line max-w-full">"${msg}"</p>
            </div>
        </div>
    </div>
    `.trim()
    return div.firstChild;
}




//untuk header
let header = ({roomName = "", roomIcon = ""}) => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="bg-vscode-2 shadow min-h-36 cursor-default">
        <div class="flex justify-between p-1">
            <h1 id="header-room-name" class="font-semibold text-xl pl-5 m-2">${roomName}</h1>
        </div>
    </div>
    `.trim()
    return div.firstChild;
}


//input pesan
let inputMessage = ({inpTxt = ""}) => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="flex flex-col px-2 py-1 h-full">
        <div class="flex">
            <div class="flex py-2 gap-7">
                <button id="send-on-click-btn" class="text-xs text-gray-300  underline-offset-8 decoration-gray-600">SEND ON CLICK</button>
                <button id="send-on-enter-btn" class="text-xs text-gray-300 underline-offset-8 decoration-gray-600">SEND ON ENTER</button>
            </div>
            <div class="flex">
            </div>
        </div>
        <div class="send-on-enter flex py-2 gap-1 group">
            <div class="inline-flex gap-1 self-start ">
                <p class="user-id bg-amber-300 group-focus-within:bg-amber-200 rounded-l-full text-black px-2 whitespace-nowrap">ini adalah id</p>
                <button class="input-send bg-amber-300 group-focus-within:bg-amber-200 rounded-r-full text-black px-2"> > </button>
            </div>
            <form class="grow">
                <input id="add" autocomplete="off" type="text" class="px-2 w-full bg-vscode-4 focus-within:bg-vscode-1 focus-within:outline-none">
            </form>
        </div>
        <div class="send-on-click grow flex flex-col gap-1">
            <textarea class="px-1 w-full bg-vscode-4 focus-within:bg-vscode-1 focus-within:outline-none h-full resize-none" ></textarea>
            <div class="w-full bg-vscode-5 h-10 flex justify-end">
                <div class="inline-flex gap-1 self-start">
                    <p class="user-id bg-amber-300 rounded-l-full text-black px-2 whitespace-nowrap">ini adalah id</p>
                    <button class="text-area-send bg-amber-300 hover:bg-amber-200 rounded-r-full text-black px-2"> send --> </button>
                </div>
            </div>
        </div>
    </div>
    `.trim()
    return div.firstChild;
}

//----- side bar element --------
//daftar room
let roomList = ({isActive = false, roomName = "", newMsg = "", roomId=0}) => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div id="room-${roomId}-side" class="flex px-2 py-2 gap-3 cursor-pointer hover:bg-vscode-2 transition ${isActive ? 'bg-vscode-3' : ''}">
        <svg class="shrink-0 basis-[7%] w-4 mt-1 self-start" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="41" height="41" fill="#FFF504"/>
            <rect x="20.5494" y="4.34717" width="16.4" height="16.4" stroke="black" stroke-width="2" stroke-linejoin="round"/>
            <path d="M29.0458 4.59375V20.648" stroke="black" stroke-width="2"/>
            <path d="M36.6036 12.646L20.5494 12.646" stroke="black" stroke-width="2"/>
        </svg>
        <div class="flex grow flex-col">
            <p class="room-name-aside break-words">${roomName}</p>
            <h4 class="new-msg-container font-extralight text-xs text-gray-400">${newMsg}...</h4>
        </div>
    </div>
    `.trim()
    return div.firstChild;
}

//body applikasi
let appBody = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="h-screen max-h-screen flex flex-col ">
        <div class="basis-[97%] max-h-[97%] shrink-0 grow-0">
            <div id="body-program" class="h-full max-h-max overflow-hidden flex bg-vscode-2">
                <aside class="basis-1/5 shrink-0">
                </aside>
                <main class="w-full grow-0">
                </main>
            </div>
        </div>
        <div class="flex text-xs bg-vscode-1 h-full px-5">
            <p>ini adalah paragraf</p>
        </div>
    </div>
    `.trim()
    return div.firstChild;
}


let sideBody = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class=" bg-vscode-4 h-full overflow-hidden flex flex-col">
        <div class="wrapper shadow">
            <h1 class="text-center py-5 my-2 text-2xl text-white font-medium">Daftar Room</h1>
            <div class="px-3 mb-5 group"> <!-- search bar -->
                <form id="form-find" class="px-2 bg-vscode-2 group-focus-within:bg-white flex flex-nowrap gap-2 transition">
                    <svg class="basis-1/12 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <input id="find" class="bg-vscode-2 w-full px-1 text-vscode-5 focus-within:outline-none focus-within:bg-white transition" placeholder="Search.."/>
                </form>
            </div>
        </div>
        <!--daftar room dan setting-->
        <div id="room-setting" class="flex w-full h-full">
            <!-- setting list -->
            <div id="setting-list" class="basis-1/5 shrink-0 flex flex-col justify-between"> <!--setting-->
                <div class="flex flex-col "> 
                    <!--room list-->
                    <div id="room-list-btn" class="tooltip-collection px-4 py-1.5 focus-visible:outline-none focus:outline-none ">
                        <svg class="tooltip-target cursor-pointer mx-auto hover:bg-vscode-2 rounded-sm focus:outline-none transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                        </svg>
                        <div class="tooltip absolute transition delay-150 bg-vscode-2 p-2 shadow rounded-sm text-sm text-gray-400" role="tooltip">
                            Room list
                            <div class="arrow" data-popper-arrow></div>
                        </div>
                    </div>
                    <!--join room-->
                            <div id="join-room-btn" class="tooltip-collection px-4 py-1.5 focus-visible:outline-none">
                                <svg class="tooltip-target focus:outline-none cursor-pointer mx-auto hover:bg-vscode-2 rounded-sm transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                                <div class="tooltip absolute transition delay-150 bg-vscode-2 p-2 shadow rounded-sm text-sm text-gray-400" role="tooltip">
                                    Join Room
                                    <div class="arrow" data-popper-arrow></div>
                                </div>
                            </div>
                    <!--tambah room-->
                    <div id="add-room-btn" class="tooltip-collection px-4 py-1.5 focus-visible:outline-none">
                        <svg class="tooltip-target focus:outline-none cursor-pointer mx-auto hover:bg-vscode-2 rounded-sm transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                        <div class="tooltip absolute transition delay-150 bg-vscode-2 p-2 shadow rounded-sm text-sm text-gray-400" role="tooltip">
                            Add Room
                            <div class="arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <!--setting-->
                    <div id="setting-btn" class="tooltip-collection px-4 py-1.5 focus-visible:outline-none">
                        <svg class="tooltip-target focus:outline-none cursor-pointer mx-auto hover:bg-vscode-2 rounded-sm transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                        <div class="tooltip absolute transition delay-150 bg-vscode-2 p-2 shadow rounded-sm text-sm text-gray-400" role="tooltip">
                            Setting
                            <div class="arrow" data-popper-arrow></div>
                        </div>
                    </div>
                    <!--account-->
                    <div id="account-btn" class="tooltip-collection px-4 py-1.5 focus-visible:outline-none">
                        <svg class="tooltip-target focus:outline-none cursor-pointer mx-auto hover:bg-vscode-2 rounded-sm transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <div class="tooltip absolute transition delay-150 bg-vscode-2 p-2 shadow rounded-sm text-sm text-gray-400" role="tooltip">
                            Account
                            <div class="arrow" data-popper-arrow></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="side-content" class="grow bg-vscode-5 py-2"> <!--room-->
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
    <div class="max-h-full h-full flex flex-col relative bg-vscode-3">
        <div id="header" class="bg-vscode-2 shadow min-h-36 cursor-default">
        </div>

        <!--chat container-->
        <div class="h-full shrink overflow-y-auto">
            <div id="msg-container" class="flex flex-col gap-2 py-2 px-5 text-sm font-bold">
            </div>
        </div>
        
        <!-- Input -->
        <div class="resizer w-full bg-none hover:bg-slate-300 h-[6px] transition-all cursor-n-resize" data-direction="vertical"></div>
        <div id="input-msg-container" class="border-t border-t-gray-600 bg-vscode-4 grow">
        </div>
    </div>
    `.trim();
    return div.firstChild;
}



// -- ini bagian untuk side body --

let createRoomSideContent = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div id="create-room-side" >
        <h5 class="text-center font-bold bg-vscode-2" >Add Room</h5>
        <form class="text-xs font-bold p-5 " action="">
            <div class="mb-2">
                <label class="font-extralight" for="">Nama Room</label>
                <input class="room-name-side w-full text-black py-0.5 px-1 focus-within:outline-none" type="text" placeholder="room name..">
            </div>
            <div class="mb-2">
                <label class="font-extralight" for="">Deskripsi Room</label>
                <input class="room-description-side w-full text-black py-0.5 px-1 focus-within:outline-none" type="text" placeholder="room name..">
            </div>
            <div class="mb-2">
                <p class="id-creator">Creator id</p>
                <p class="text-[#FFC355]">[#12233]</p>
            </div>
            <button class="bg-vscode-2 hover:bg-vscode-1 rounded-sm w-full p-1">Create</button>
        </form>
    </div>
    `.trim();
    return div.firstChild
}

let settingSideContent = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div id="setting-side" >
        <h5 class="text-center font-bold bg-vscode-2" >Setting</h5>
        <p class="text-xs text-vscode-1">*TODO : buat functional setting</p>
        <form class="text-xs font-black p-5">
            <div class="mb-2 flex">
                <label class="basis-1/2 font-extralight" for="">Global on enter Submit</label>
                <span class="basis-1/2">
                    <input id="set-global-on-enter-submit" class="accent-vscode-5 h-3 w-3" type="checkbox" name="" id="">
                </span>
            </div>
            <div class="mb-2 flex">
                <label class="basis-1/2 font-extralight" for="">Font Size</label>
                <span class="basis-1/2">
                    <input id="setting-font-size" type="range" name="" id="">
                </span>
            </div>
            <button class="bg-vscode-2 hover:bg-vscode-1 rounded-sm w-full p-1">Save</button>
        </form>
    </div>
    `.trim()
    return div.firstChild
}

let accountSideContent = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div id="account-room-side" >
        <h5 class="text-center font-bold bg-vscode-2" >Account</h5>
        <form class="text-xs font-bold p-5 " action="">
            <div class="mb-2">
                <label class="font-extralight" for="">Nama</label>
                <input id="name-account-side" class="w-full text-black py-0.5 px-1 focus-within:outline-none" type="text" placeholder="namamu" value="Zidan Putra rahman">
            </div>
            <div class="mb-2">
                <label class="font-extralight" for="">ID 
                    <span class="text-[10px] text-gray-400">*only number</span> 
                </label>
                <input id="id-account-side" class="w-full text-black py-0.5 px-1 focus-within:outline-none" type="text" placeholder="ID anda" value="12341">
            </div>
            <button class="save-btn bg-vscode-2 hover:bg-vscode-1 rounded-sm w-full p-1">Save</button>
        </form>
    </div>
    `.trim();
    return div.firstChild;
}

let joinRoomSideContent = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div id="join-room-side" class="">
        <h5 class="text-center font-bold bg-vscode-2" >Join</h5>
        <form class="text-xs font-bold p-5 " action="">
            <div class="mb-2">
                <label class="font-extralight" for="">Room id 
                    <span class="text-[10px] text-gray-400">*only existing room</span> 
                </label>
                <input id="id-account-side" class="w-full text-black py-0.5 px-1 focus-within:outline-none" type="text" placeholder="ID anda" value="12341">
            </div>
            <button class="save-btn bg-vscode-2 hover:bg-vscode-1 rounded-sm w-full p-1">Find</button>
        </form>
        <div id="found-alert-room" class=" hidden w-full border border-red-700 bg-[rgb(89,6,6)]">
            <p class="not-found-room text-sm font-thin">maaf, room yang anda cari tidak terdaftar</p>
        </div>
        <div id="not-found-alert-room" class="hidden w-full border border-green-700 bg-[rgb(6,89,11)]">
            <p class="not-found-room text-sm font-thin">room ditemukan, anda sudah menjadi member
                <span class="founded-room"><span>
            </p>
        </div>
    </div>
    `.trim();
    return div.firstChild;
}

let roomListSideContent = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div id="room-list-content" class="">
    </div>
    `.trim();
    return div.firstChild;
}


// ------------------------------------ DAFTAR ------------------------------------------
let signinView = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div class="h-screen flex justify-center w-full bg-vscode-3">
        <div class="max-w-xl rounded-md p-3 bg-vscode-4 mx-auto my-auto border border-purple-700">
            <img class="mx-auto mb-2" src="./app/img/habibi-cat.jpg" alt="" srcset="">

            <h1 class="text-center text-2xl border-b py-3 mb-2 px-7 border-vscode-1">Daftar terlebih dahulu</h1>
            <form class="" action="">
                <div class="mb-3">
                    <label class="block" for="">Name :</label>
                    <input id="name-user" class="w-full bg-vscode-2 focus:text-black px-2 focus-within:bg-white focus-within:outline-none" type="text">
                </div>
                <div class="mb-3">
                    <label class="block" for="">Desc :</label>
                    <input id="desc-user" class="w-full bg-vscode-2 focus:text-black px-2 focus-within:bg-white focus-within:outline-none" type="text">
                </div>
                <div class="mb-3">
                    <label class="block" for="">Id anda :</label>
                    <span id="id-user-signin" >#1242</span>
                </div> 
                <button class="bg-vscode-2 w-full active:bg-vscode-1" >Daftar</button>
            </form>
        </div>
    </div>
    `.trim();
    return div.firstChild;
}


// ------------------------------------- LOADER -----------------------------------------
let loaderView = () => {
    let div = document.createElement('DIV');
    div.innerHTML = `
    <div id="room-list-content" class="">
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
    mainBodyRoom,
    
    createRoomSideContent,
    settingSideContent,
    accountSideContent,
    joinRoomSideContent,
    roomListSideContent
}