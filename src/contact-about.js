function contact_about() {
    const content = document.querySelector('#content');
    
    if (content.contains(document.querySelector('#container'))) {
        content.removeChild(document.querySelector('#container'))
    }
    const container = document.createElement("div");
    container.id = "container";

    const title = document.createElement("div");
    title.id = "title";
    title.textContent = "The Hungry Stomach";

    

    container.appendChild(title);

    content.appendChild(container);
}

export {contact_about}