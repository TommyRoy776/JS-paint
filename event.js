document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    let localX = null;
    let localY = null;
    function removePixelTimer(time) {
        setInterval(() => {
            let firstChild = body.firstElementChild;
            if (firstChild) {
                while (true) {
                    if(!firstChild) break;
                    if (["footprint","footprint circle"].includes(firstChild.className)) {
                        body.removeChild(firstChild);
                        break;
                    }
                    firstChild = firstChild.nextElementSibling;
                }
            }
        }, time);
    }

    removePixelTimer(50);

    const drawElement = (evt) => {
        if (evt.clientX === localX && evt.clientY === localY) {
            return;
        } else {
            localX = evt.clientX;
            localY = evt.clientY;
            const footprint = document.createElement('div');
            // use CSS class for styles; only position coordinates set inline
            switch(window.contextMenuOption){
                case 'Square':
                    footprint.className = 'footprint';
                    break;
                case 'Circle':
                    footprint.className = 'footprint circle'
                    break;
            }
            // footprint.className = 'footprint';
            footprint.style.left = localX + 'px';
            footprint.style.top = localY + 'px';
            body.appendChild(footprint);
        }
        console.log(body.childNodes.length);
    };

    const cleanUp = () => {
        body.removeEventListener('mousemove', drawElement);
        body.removeEventListener('mouseup', cleanUp);
    };

    body.addEventListener('mousedown', (evt) => {
        if (evt.button === 0) {
            body.addEventListener('mousemove', drawElement);
            body.addEventListener('mouseup', cleanUp);
        }
    });
    console.log(body);
});
