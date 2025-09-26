// window.contextMenuOption = "Square";

export let contextMenuOption = "Square";

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const menu = document.getElementById("customMenu");
    const menuItem = menu.querySelectorAll(".menu-item");
    body.addEventListener("contextmenu", (evt) => {
        evt.preventDefault();  // ✅ stops the menu
        if (menu.className === 'contextMenu') {
            menu.className = "contextMenu active";
            menu.style.top = evt.pageY + "px";
            menu.style.left = evt.pageX + "px";
        } else {
            menu.className = "contextMenu";
        }
    });
    if (menu && menuItem && menuItem.length) {
        menuItem.forEach(item =>{
            item.addEventListener("click",(evt)=>{
                // use the global window object and currentTarget to avoid target bubbling issues
                contextMenuOption = evt.currentTarget.textContent;
                menu.className = "contextMenu"; 
            })
        })
    }
    
});
