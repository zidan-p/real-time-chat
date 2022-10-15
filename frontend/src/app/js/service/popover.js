import { createPopper } from '@popperjs/core'

/*
bertasakkan fungction utils ini,
untuk meberikan popover yg harus dilakukan adalah sebagai berikut.
1. beri class "tooltip-target" untuk targte yg akan diberi tootip.
2. buat elemen tooltipnya dengan menambahkan class "tooltip".
3. bungkus kedua lemen dengan div yang diberi class "tooltip-collection".
4. selesai...
 */
let tooltipCollection
console.log('tooltip diaktifkan')


// --------- function untuk eventnya ------------
const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

function show(tootipElement, popperInstance) {
    tootipElement.setAttribute("data-show", "");
    popperInstance.update();
}

function hide(tootipElement, popperInstance) {
    tootipElement.removeAttribute("data-show");
}
function addEvent(target, tootipElement, popperInstance){
    showEvents.forEach((event) => {
      target.addEventListener(event, () => show(tootipElement, popperInstance));
    });
    
    hideEvents.forEach((event) => {
      target.addEventListener(event, ()=> hide(tootipElement, popperInstance));
    });
}

//akan mengexport function untuk mengupdate dom
//karena nantinya ini adalah elemen dinamis.
function updateTooltipDom(){
    tooltipCollection = document.querySelectorAll('.tooltip-collection');
    let tooltipTarget;
    let tooltip;

    //bongkar tiap2 wrapper dan buat instance tooltip
    tooltipCollection.forEach(container => {
        tooltipTarget = container.querySelector('.tooltip-target');
        tooltip = container.querySelector('.tooltip');

        let poppperInstance = createPopper(tooltipTarget, tooltip,{
            placement: 'right',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    },
                },
            ],
        });

        //tampilkan saat di hover
        addEvent(tooltipTarget, tooltip, poppperInstance);
    })
}


export {updateTooltipDom};