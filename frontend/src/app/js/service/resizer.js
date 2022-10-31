// untuk menambahkan fitur resizeable


const addResizer = (element, directionRezise) => {
    let resizer = element
    let previousSide = resizer.previousElementSibling;
    let nextSide = resizer.nextElementSibling;
    console.log("seharusnya resizer bekerja");

    //posisi resizer
    const direction = resizer.getAttribute('data-direction') || 'horizontal';

    //ukuran tinggi sibling sebelumnya
    let previousSideHeight = 0; // -- untuk split horizontal
    let previousSideWidth = 0; // -- untuk split vertikal


    // posisi mouse
    let x = 0;
    let y = 0;

    // Handle event mouse down
    const mouseDownHandler = function (e) {
        console.log("event mouse down")
        // dapatakn posisi terkini
        x = e.clientX;
        y = e.clientY;
        let rect = previousSide.getBoundingClientRect();
        previousSideWidth = rect.width
        previousSideHeight = rect.height

        // sambung listener
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        const dx = e.clientX - x;
        const dy = e.clientY - y;

        switch (direction) {
            case 'vertical':
                const h = (previousSideHeight + dy) * 100 / resizer.parentNode.getBoundingClientRect().height;
                previousSide.style.height = `${h}%`;
                break;
            case 'horizontal':
            default:
                const w = (previousSideWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
                previousSide.style.width = `${w}%`;
                break;
        }

        const cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
        resizer.style.cursor = cursor;
        document.body.style.cursor = cursor;
    };

    const mouseUpHandler = function () {
        resizer.style.removeProperty('cursor');
        document.body.style.removeProperty('cursor');

        previousSide.style.removeProperty('user-select');
        previousSide.style.removeProperty('pointer-events');

        nextSide.style.removeProperty('user-select');
        nextSide.style.removeProperty('pointer-events');

        // Remove the handlers of `mousemove` and `mouseup`
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    resizer.addEventListener('mousedown', mouseDownHandler);

}

export {addResizer}
