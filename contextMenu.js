document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.addEventListener("contextmenu", (evt) => {
        evt.preventDefault();  // ✅ stops the menu
        const menu = document.getElementById("customMenu");
        if (menu.className === 'contextMenu') {
            menu.className = "contextMenu active";
            menu.style.top = evt.pageY + "px";
            menu.style.left = evt.pageX + "px";
        } else {
            menu.className = "contextMenu";
        }

    });
});
