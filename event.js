window.onload = () => {
    const body = document.body;
    let localX = null;
    let localY = null;
    function removePixelTimer(time) {
        setInterval(() => {
            const firstChild = body.firstElementChild;
            if (firstChild) {
                body.removeChild(firstChild);
            }
        }, time);
    }

    removePixelTimer(100);

    const drawElement = (evt) => {
        if (evt.clientX === localX && evt.clientY === localY) {
            return;
        } else {
            localX = evt.clientX;
            localY = evt.clientY;
            const footprint = document.createElement('div');
            footprint.style.position = 'absolute';
            footprint.style.left = localX + 'px';
            footprint.style.top = localY + 'px';
            footprint.style.width = '50px';
            footprint.style.height = '50px';
            footprint.style.backgroundColor = 'red';
            footprint.style.transform = 'translate(-50%, -50%)'; // center on click
            body.appendChild(footprint);
        }
        console.log(body.childNodes.length);
    };

    const cleanUp = () => {
        body.removeEventListener('mousemove', drawElement);
        body.removeEventListener('mouseup', cleanUp);
    };

    body.addEventListener('mousedown', () => {
        body.addEventListener('mousemove', drawElement);
        body.addEventListener('mouseup', cleanUp);
    });

    console.log(body);
}