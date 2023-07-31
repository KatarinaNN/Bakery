const items=document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("mouseover", () => {
        removeFocus();
        item.classList.add("selected");  
    })
    removeFocus=() => {
        items.forEach(item =>{
            item.classList.remove("selected");
        })
    }
})
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
    }